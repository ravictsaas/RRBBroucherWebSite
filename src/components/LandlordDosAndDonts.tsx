import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function LandlordDosAndDonts() {
  const dos = [
    {
      title: "Register with the New Systems",
      description: "Do ensure you are registered with the new Private Rented Sector Ombudsman and the digital Property Portal once they launch."
    },
    {
      title: "Use Section 8 Correctly",
      description: "Do familiarize yourself with the expanded Section 8 grounds for possession and gather robust evidence before serving notice."
    },
    {
      title: "Maintain Property Standards",
      description: "Do proactively audit and maintain your properties to ensure they meet the new Decent Homes Standard and Awaab's Law requirements."
    },
    {
      title: "Handle Pet Requests Fairly",
      description: "Do respond to tenant requests for pets within 28 days. You can require the tenant to hold pet insurance to cover potential damages."
    },
    {
      title: "Follow Rent Increase Rules",
      description: "Do use the prescribed Section 13 statutory process to increase rent, limiting increases to once per year at market rates."
    }
  ];

  const donts = [
    {
      title: "Serve Section 21 Notices",
      description: "Don't attempt to use Section 21 'no-fault' evictions. They are completely abolished under the new legislation."
    },
    {
      title: "Enforce Blanket Bans",
      description: "Don't advertise or enforce blanket bans on renting to families with children or individuals receiving benefits."
    },
    {
      title: "Encourage Bidding Wars",
      description: "Don't accept or encourage rental bids above the advertised asking price. Properties must be let at the advertised rate."
    },
    {
      title: "Unreasonably Refuse Pets",
      description: "Don't unreasonably refuse a tenant's request to keep a pet. Any refusal can be challenged through the Ombudsman."
    },
    {
      title: "Use Rent Review Clauses",
      description: "Don't include in-tenancy rent review clauses in your contracts. These are no longer permitted under the rolling periodic tenancy system."
    }
  ];

  return (
    <section id="dos-and-donts" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Landlord Best Practices
          </h2>
          <p className="text-lg text-slate-600">
            A quick reference guide to the essential "Dos and Don'ts" for landlords to remain compliant with the Renters' Rights Act.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* The Dos */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">What You Should Do</h3>
            </div>
            <div className="space-y-6">
              {dos.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl"
                >
                  <h4 className="text-lg font-bold text-emerald-900 mb-2">{item.title}</h4>
                  <p className="text-emerald-800/80 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Don'ts */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                <XCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">What You Must Avoid</h3>
            </div>
            <div className="space-y-6">
              {donts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-red-50/50 border border-red-100 p-6 rounded-2xl"
                >
                  <h4 className="text-lg font-bold text-red-900 mb-2">{item.title}</h4>
                  <p className="text-red-800/80 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
