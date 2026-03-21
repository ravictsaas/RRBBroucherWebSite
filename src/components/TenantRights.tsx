import { motion } from 'motion/react';
import { Shield, Home, Dog, Scale, AlertCircle } from 'lucide-react';

export default function TenantRights() {
  const rights = [
    {
      icon: <Home className="w-6 h-6 text-emerald-600" />,
      title: "End of 'No-Fault' Evictions",
      description: "Section 21 is abolished. You can no longer be evicted without a valid reason provided by the landlord, giving you greater long-term security."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Challenging Rent Increases",
      description: "Rent can only be increased once a year. If you believe an increase is unreasonable or above market rates, you can challenge it at the First-tier Tribunal."
    },
    {
      icon: <Dog className="w-6 h-6 text-emerald-600" />,
      title: "Right to Request a Pet",
      description: "Landlords cannot unreasonably refuse a request to keep a pet. They can, however, require you to have pet insurance to cover potential damage."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-emerald-600" />,
      title: "Decent Homes Standard",
      description: "For the first time, private rentals must meet the Decent Homes Standard. Your landlord is legally obligated to fix major hazards and keep the property in a good state of repair."
    }
  ];

  return (
    <section id="tenant-rights" className="py-20 bg-emerald-50/50 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Tenant Rights & Action Plan
          </h2>
          <p className="text-lg text-slate-600">
            The Renters' Rights Act significantly strengthens your position as a tenant. Here is what you need to know to protect your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rights.map((right, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                {right.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{right.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {right.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-emerald-600 rounded-2xl p-8 text-white text-center"
        >
          <Scale className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Facing an unfair eviction or rent hike?</h3>
          <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
            Don't panic. Under the new rules, you have the right to challenge these actions. Document everything, continue paying your current rent, and contact the new Private Rented Sector Ombudsman.
          </p>
          <a href="#ombudsman" className="inline-block bg-white text-emerald-700 font-medium px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
            Learn about the Ombudsman
          </a>
        </motion.div>
      </div>
    </section>
  );
}
