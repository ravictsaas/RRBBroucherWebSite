import { motion } from 'motion/react';
import { ShieldCheck, FileText, Home, Scale, Ban, Cat } from 'lucide-react';
import Tooltip from './Tooltip';

const obligations = [
  {
    title: 'Digital Property Portal Registration',
    description: <>All landlords must register themselves and their properties on the new national database. This ensures local councils can monitor compliance and tenants can verify their landlord's credentials.</>,
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
  },
  {
    title: 'Mandatory Ombudsman Membership',
    description: <>It is legally required to join the new Private Rented Sector (PRS) <Tooltip text="Ombudsman" explanation="An independent official appointed to investigate and resolve complaints and disputes outside of court." />. This provides a fair, impartial, and binding dispute resolution service without needing to go to court.</>,
    icon: <Scale className="w-6 h-6 text-indigo-600" />,
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
  },
  {
    title: 'Decent Homes Standard Compliance',
    description: <>Properties must meet the <Tooltip text="Decent Homes Standard" explanation="A minimum standard for housing conditions, ensuring properties are safe, warm, and in a reasonable state of repair." />. Landlords are legally obligated to address severe hazards (like damp and mould) within strict timeframes under "Awaab's Law".</>,
    icon: <Home className="w-6 h-6 text-emerald-600" />,
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
  {
    title: 'Evidence-Based Evictions',
    description: <>With <Tooltip text="Section 21" explanation="The legal mechanism allowing landlords to evict tenants without a specific reason (no-fault eviction)." /> abolished, landlords must use specific Section 8 grounds to regain possession (e.g., selling the property, moving in, or tenant fault) and provide sufficient evidence to the courts.</>,
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
  },
  {
    title: 'Fair Rent Increases',
    description: 'Rent can only be increased once a year using the statutory Section 13 process. "Rent bidding" wars are banned, and landlords must publish an asking rent upfront.',
    icon: <Ban className="w-6 h-6 text-red-600" />,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
  },
  {
    title: 'Reasonable Pet Requests',
    description: 'Landlords cannot unreasonably refuse a tenant\'s request to keep a pet. You can, however, require the tenant to obtain pet insurance to cover any potential damage to the property.',
    icon: <Cat className="w-6 h-6 text-purple-600" />,
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
  },
];

export default function LandlordObligations() {
  return (
    <section id="landlord-obligations" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" />
            For Property Owners
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Landlord Responsibilities & Obligations
          </h2>
          <p className="text-lg text-slate-600">
            The Renters' Rights Act introduces strict new compliance measures. Here is what is legally expected of landlords to operate in the private rented sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {obligations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${item.bgColor} ${item.borderColor} hover:shadow-md transition-shadow`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-center text-white max-w-4xl mx-auto">
          <h4 className="text-xl font-bold mb-2">Anti-Discrimination Rules</h4>
          <p className="text-slate-300">
            It is now illegal to have blanket bans on renting to families with children or individuals receiving housing benefits. All prospective tenants must be considered fairly on a case-by-case basis.
          </p>
        </div>
      </div>
    </section>
  );
}
