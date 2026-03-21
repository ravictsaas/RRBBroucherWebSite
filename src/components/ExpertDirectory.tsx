import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ExternalLink, Search, Star } from 'lucide-react';
import { useState } from 'react';

export default function ExpertDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const experts = [
    {
      name: "Shelter UK",
      type: "tenant",
      description: "Free housing advice and legal support for tenants facing eviction or poor conditions.",
      phone: "0808 800 4444",
      website: "https://england.shelter.org.uk",
      rating: 5
    },
    {
      name: "National Residential Landlords Association (NRLA)",
      type: "landlord",
      description: "Expert advice, resources, and legal support specifically for private landlords.",
      phone: "0300 131 6400",
      website: "https://www.nrla.org.uk",
      rating: 4.8
    },
    {
      name: "Citizens Advice",
      type: "all",
      description: "Confidential advice online, over the phone, and in person, for free.",
      phone: "0800 144 8848",
      website: "https://www.citizensadvice.org.uk",
      rating: 4.9
    },
    {
      name: "Property Redress Scheme",
      type: "all",
      description: "Consumer redress scheme for property agents and professionals.",
      phone: "0333 321 9418",
      website: "https://www.theprs.co.uk",
      rating: 4.5
    }
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          expert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || expert.type === filter || expert.type === 'all';
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="expert-directory" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Expert Directory
          </h2>
          <p className="text-lg text-slate-600">
            Find specialized solicitors, property managers, and free advice services to help you navigate the Renters' Rights Act.
          </p>
        </div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search experts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div className="flex bg-white rounded-xl border border-slate-200 p-1 w-full md:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('landlord')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'landlord' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              For Landlords
            </button>
            <button
              onClick={() => setFilter('tenant')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'tenant' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              For Tenants
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExperts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900">{expert.name}</h3>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded text-sm font-medium">
                  <Star className="w-4 h-4 fill-current" />
                  {expert.rating}
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 flex-grow">
                {expert.description}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <a href={`tel:${expert.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-slate-400" />
                  {expert.phone}
                </a>
                <a href={expert.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors">
                  <ExternalLink className="w-5 h-5 text-slate-400" />
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
