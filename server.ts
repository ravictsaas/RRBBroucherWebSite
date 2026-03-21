import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Gemini
// Use lazy initialization for the AI client to prevent crashing if the key is missing initially
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn('GEMINI_API_KEY is not set. AI responses will fail.');
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
}

// WhatsApp Webhook Verification
app.get('/api/webhook', (req, res) => {
  const verify_token = process.env.WHATSAPP_VERIFY_TOKEN;
  
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === verify_token) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(400);
  }
});

// WhatsApp Webhook Message Handling
app.post('/api/webhook', async (req, res) => {
  const body = req.body;

  // Check if this is an event from a WhatsApp API
  if (body.object === 'whatsapp_business_account') {
    if (
      body.entry &&
      body.entry[0].changes &&
      body.entry[0].changes[0] &&
      body.entry[0].changes[0].value.messages &&
      body.entry[0].changes[0].value.messages[0]
    ) {
      const phoneNumberId = body.entry[0].changes[0].value.metadata.phone_number_id;
      const from = body.entry[0].changes[0].value.messages[0].from; // sender phone number
      const msgBody = body.entry[0].changes[0].value.messages[0].text.body; // text message content

      console.log(`Received message from ${from}: ${msgBody}`);

      try {
        // Generate AI response
        const ai = getAIClient();
        let replyText = "I'm sorry, I am currently unavailable. Please try again later.";
        
        if (ai) {
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: msgBody,
            config: {
              systemInstruction: `You are an expert legal assistant specializing in the UK Renters' Rights Act. 
              Answer questions regarding Section 21 (no-fault evictions), rent increases, tenant rights, landlord obligations, and the Decent Homes Standard.
              Keep your answers concise, accurate, and formatted for WhatsApp (use *bold* for emphasis, and keep paragraphs short).
              If the user asks something unrelated to UK renting or the Renters' Rights Act, politely redirect them to the topic.`,
            }
          });
          replyText = response.text || "I couldn't generate a response. Please try again.";
        }

        // Send response back via WhatsApp API
        const whatsappToken = process.env.WHATSAPP_ACCESS_TOKEN;
        if (whatsappToken && phoneNumberId) {
          await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${whatsappToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messaging_product: 'whatsapp',
              to: from,
              text: { body: replyText },
            }),
          });
          console.log(`Reply sent to ${from}`);
        } else {
          console.warn('WHATSAPP_ACCESS_TOKEN is missing. Cannot send reply.');
        }
      } catch (error) {
        console.error('Error processing message:', error);
      }
    }
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
