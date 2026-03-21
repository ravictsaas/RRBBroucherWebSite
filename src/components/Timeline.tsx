import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const timelineEvents = [
  {
    date: 'May 1, 2026',
    title: 'New Tenancies Commencement',
    description: 'The Renters\' Rights Act officially comes into force for all new tenancies created on or after this date. Section 21 "no-fault" evictions are abolished for these new agreements.',
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    status: 'major',
  },
  {
    date: 'Summer 2026',
    title: 'Ombudsman & Property Portal Launch',
    description: 'The new Private Rented Sector Ombudsman service is expected to launch, providing a platform for dispute resolution. The Digital Property Portal will also begin registrations.',
    icon: <Calendar className="w-6 h-6 text-blue-500" />,
    status: 'upcoming',
  },
  {
    date: 'September 2026',
    title: 'Decent Homes Standard Enforcement',
    description: 'Local authorities begin active enforcement of the Decent Homes Standard across the private rented sector, with new powers to issue fines for non-compliance.',
    icon: <AlertCircle className="w-6 h-6 text-amber-500" />,
    status: 'upcoming',
  },
  {
    date: 'December 1, 2026',
    title: 'Full Implementation for All Tenancies',
    description: 'The Act applies to all existing "periodic" and "fixed-term" tenancies. All remaining Section 21 notices become invalid, and all tenants transition to the new system.',
    icon: <Clock className="w-6 h-6 text-indigo-500" />,
    status: 'major',
  },
  {
    date: 'Early 2027',
    title: 'Mandatory Portal Compliance',
    description: 'All landlords must have registered their properties on the Digital Property Portal. Failure to register may result in significant civil penalties.',
    icon: <Calendar className="w-6 h-6 text-slate-500" />,
    status: 'future',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Implementation Timeline
          </h2>
          <p className="text-lg text-slate-400">
            Key dates and deadlines for the rollout of the Renters' Rights Act across the UK.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-800 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } md:mb-16 last:mb-0`}
              >
                {/* Date Label (Desktop) */}
                <div className="hidden md:block w-1/2 px-8 text-right">
                  <div className={`text-2xl font-serif font-bold ${index % 2 === 0 ? 'text-left' : 'text-right'} text-blue-400`}>
                    {event.date}
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center z-10 hidden md:flex">
                  {event.icon}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 px-0 md:px-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-slate-600 transition-colors">
                    <div className="md:hidden text-blue-400 font-bold mb-2">{event.date}</div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      {event.title}
                      {event.status === 'major' && (
                        <span className="text-[10px] uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">
                          Critical
                        </span>
                      )}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
