import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const whatsappNumber = "1234567890"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hi, I have a question about the Renters' Rights Act.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Submit a Query
          </h2>
          <p className="text-lg text-slate-600">
            Whether you're a landlord or a tenant, send us your questions about the Renters' Rights Act and we'll get back to you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <form 
            action="mailto:sagarsinh.rathod@gmail.com" 
            method="POST" 
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="Name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-white" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">I am a...</label>
                <select 
                  id="role" 
                  name="Role" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors bg-white"
                >
                  <option value="Tenant">Tenant</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Letting Agent">Letting Agent</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Query</label>
              <textarea 
                id="message" 
                name="Message" 
                rows={5} 
                required 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none bg-white" 
                placeholder="How does the new legislation affect my current tenancy?"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                type="submit" 
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send via Email
              </button>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
            
            <p className="text-xs text-slate-500 text-center mt-4">
              Email will open your default email client. WhatsApp will open the app or web version.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
