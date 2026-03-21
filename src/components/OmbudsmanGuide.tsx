import { motion } from 'motion/react';
import { Scale, MessageSquare, Gavel, CheckCircle2 } from 'lucide-react';

export default function OmbudsmanGuide() {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
      title: "1. Raise with Landlord",
      description: "First, you must try to resolve the issue directly with your landlord or letting agent in writing."
    },
    {
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      title: "2. Escalate to Ombudsman",
      description: "If unresolved after a set period, submit your complaint and evidence to the new Private Rented Sector Ombudsman."
    },
    {
      icon: <Gavel className="w-6 h-6 text-blue-600" />,
      title: "3. Investigation",
      description: "The Ombudsman acts impartially, reviewing evidence from both sides without the need for court appearances."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
      title: "4. Binding Decision",
      description: "The Ombudsman can compel landlords to apologize, provide information, take remedial action, or pay compensation up to £25,000."
    }
  ];

  return (
    <section id="ombudsman" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            The New PRS Ombudsman
          </h2>
          <p className="text-lg text-slate-600">
            A faster, fairer, and cheaper way to resolve disputes without going to court. Mandatory for all private landlords.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0 border-4 border-white shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center md:text-left">{step.title}</h3>
                <p className="text-sm text-slate-600 text-center md:text-left">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
