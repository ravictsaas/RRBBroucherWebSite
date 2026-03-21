import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Scale, Calendar, MapPin, HelpCircle, FileText, User, Home } from 'lucide-react';
import Countdown from './Countdown';
import type { UserType } from '../App';

interface HeroProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export default function Hero({ userType, setUserType }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 -z-10">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/london/1920/1080?blur=4')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 border border-blue-500/30">
              <Scale className="w-4 h-4" />
              Effective May 1, 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Understanding the UK Renters' Rights Act
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              The biggest shake-up of the private rented sector in decades. Discover how the new RRA bill affects landlords and tenants starting May 2026.
            </p>

            {/* User Type Toggle */}
            <div className="flex justify-center mb-10">
              <div className="bg-white/10 p-1 rounded-xl backdrop-blur-sm border border-white/20 inline-flex">
                <button
                  onClick={() => setUserType('all')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    userType === 'all' 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  View All
                </button>
                <button
                  onClick={() => setUserType('landlord')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    userType === 'landlord' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  I'm a Landlord
                </button>
                <button
                  onClick={() => setUserType('tenant')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    userType === 'tenant' 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  <User className="w-4 h-4" />
                  I'm a Tenant
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
              <a href="#changes" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto">
                Explore Key Changes
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#timeline" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto border border-white/10">
                <Calendar className="w-4 h-4" />
                Timeline
              </a>
              <a href="#templates" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto border border-white/10">
                <FileText className="w-4 h-4" />
                Templates
              </a>
              <a href="#local-help" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto border border-white/10">
                <MapPin className="w-4 h-4" />
                Local Help
              </a>
              <a href="#faq" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto border border-white/10">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </a>
              <a href="#ask-ai" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm w-full sm:w-auto border border-white/10">
                <BookOpen className="w-4 h-4" />
                Ask AI
              </a>
            </div>

            <Countdown />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
