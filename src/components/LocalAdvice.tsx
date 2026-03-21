import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, ExternalLink, Loader2, Info, Building2, Phone, Globe } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type AdviceService = {
  name: string;
  type: string;
  description: string;
  website?: string;
  phone?: string;
  address?: string;
};

export default function LocalAdvice() {
  const [postcode, setPostcode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AdviceService[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const prompt = `Find real local tenant advice services, legal aid organizations, or Citizens Advice bureaus near the UK postcode "${postcode}". 
      Return a list of at least 3-5 specific organizations. 
      Include their name, type (e.g., Citizens Advice, Law Centre, Charity), a brief description of what they offer, their website URL if available, and a phone number if available.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                type: { type: Type.STRING },
                description: { type: Type.STRING },
                website: { type: Type.STRING },
                phone: { type: Type.STRING },
                address: { type: Type.STRING },
              },
              required: ['name', 'type', 'description'],
            },
          },
        },
      });

      const text = response.text;
      if (text) {
        const parsedResults = JSON.parse(text);
        setResults(parsedResults);
      } else {
        setError('Could not find specific local results. Please try a different postcode or check national services like Shelter.');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('An error occurred while searching. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="local-help" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Find Local Support
          </h2>
          <p className="text-lg text-slate-600">
            Enter your postcode to find tenant advice services and legal aid organizations in your area.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="Enter Postcode (e.g. SW1A 1AA)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow uppercase"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              Search
            </button>
          </form>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center gap-3 text-slate-600 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
                <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                <span>Searching local databases and web resources...</span>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center text-red-800"
            >
              <p>{error}</p>
            </motion.div>
          ) : results ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {results.map((service, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider bg-slate-200 text-slate-600 px-2 py-1 rounded-md font-bold">
                      {service.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 border-t border-slate-200 pt-4">
                    {service.phone && (
                      <div className="flex items-center gap-3 text-sm text-slate-700">
                        <Phone className="w-4 h-4 text-slate-400" />
                        <a href={`tel:${service.phone}`} className="hover:text-blue-600 transition-colors">{service.phone}</a>
                      </div>
                    )}
                    {service.website && (
                      <div className="flex items-center gap-3 text-sm text-slate-700">
                        <Globe className="w-4 h-4 text-slate-400" />
                        <a href={service.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    {service.address && (
                      <div className="flex items-start gap-3 text-sm text-slate-700">
                        <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                        <span>{service.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">National Support Resources</h3>
              <p className="text-blue-800/80 mb-6 max-w-lg mx-auto">
                If you can't find a local service, these national organizations provide expert advice across the UK:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.shelter.org.uk/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium">
                  Shelter UK <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://www.citizensadvice.org.uk/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium">
                  Citizens Advice <ExternalLink className="w-4 h-4" />
                </a>
                <a href="https://www.lawcentres.org.uk/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-700 hover:bg-blue-50 transition-colors flex items-center gap-2 font-medium">
                  Law Centres Network <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
