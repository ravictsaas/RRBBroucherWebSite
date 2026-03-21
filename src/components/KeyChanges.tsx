import { motion } from 'motion/react';
import { Home, Shield, PoundSterling, Dog, FileText, AlertTriangle } from 'lucide-react';
import Tooltip from './Tooltip';

const changes = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: <>Abolition of <Tooltip text="Section 21" explanation="The legal mechanism allowing landlords to evict tenants without a specific reason (no-fault eviction)." /></>,
    description: 'The end of "no-fault" evictions. Landlords will need a valid, legally defined reason to regain possession of their property, providing tenants with greater security.',
  },
  {
    icon: <PoundSterling className="w-6 h-6 text-emerald-600" />,
    title: 'Rent Increase Controls',
    description: 'Rent increases will be limited to once per year, and tenants will have stronger avenues to challenge unjustified or excessive rent hikes through a tribunal.',
  },
  {
    icon: <Dog className="w-6 h-6 text-amber-600" />,
    title: 'Right to Request a Pet',
    description: 'Tenants will have the legal right to request a pet in their home, which landlords cannot unreasonably refuse. Landlords can require pet insurance.',
  },
  {
    icon: <Home className="w-6 h-6 text-indigo-600" />,
    title: <Tooltip text="Decent Homes Standard" explanation="A minimum standard for housing conditions, ensuring properties are safe, warm, and in a reasonable state of repair." />,
    description: 'The Decent Homes Standard will be applied to the private rented sector for the first time, ensuring homes are safe, warm, and free from serious hazards.',
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-600" />,
    title: <>New <Tooltip text="Ombudsman" explanation="An independent official appointed to investigate and resolve complaints and disputes outside of court." /></>,
    description: 'A new Private Rented Sector Ombudsman will be introduced to provide fair, impartial, and binding resolution to many disputes without going to court.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-rose-600" />,
    title: 'Stricter Enforcement',
    description: <>Local councils will receive stronger enforcement powers and a new digital <Tooltip text="Property Portal" explanation="A planned digital database where landlords must register themselves and their properties to ensure compliance." /> will help landlords understand their obligations and tenants check compliance.</>,
  },
];

export default function KeyChanges() {
  return (
    <section id="changes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            What Changes on May 1, 2026?
          </h2>
          <p className="text-lg text-slate-600">
            The Renters' Rights Act introduces sweeping reforms designed to balance the rights of tenants with the legitimate needs of landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {changes.map((change, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
                {change.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{change.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {change.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Implementation Timeline Progress Bar */}
        <div className="mt-24 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Implementation Timeline</h3>
            <p className="text-slate-600">We are currently in the final preparation phase before the new rules take effect.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Progress Bar Background */}
            <div className="absolute top-3 left-12 right-12 sm:left-16 sm:right-16 h-2 bg-slate-200 rounded-full"></div>
            
            {/* Progress Bar Fill */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '66.66%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="absolute top-3 left-12 sm:left-16 h-2 bg-blue-600 rounded-full"
            ></motion.div>

            {/* Timeline Points */}
            <div className="relative flex justify-between">
              {/* Point 1 */}
              <div className="flex flex-col items-center w-24 sm:w-32">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-50 shadow-sm z-10"></div>
                <div className="mt-4 text-center">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">Bill Introduced</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">Late 2024</div>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex flex-col items-center w-24 sm:w-32">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-slate-50 shadow-sm z-10"></div>
                <div className="mt-4 text-center">
                  <div className="text-xs sm:text-sm font-bold text-slate-900"><Tooltip text="Royal Assent" explanation="The formal approval by the Monarch, making a Bill into an Act of Parliament (law)." /></div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1">Mid 2025</div>
                </div>
              </div>

              {/* Point 3 (Current) */}
              <div className="flex flex-col items-center w-24 sm:w-32">
                <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-50 shadow-md z-10 flex items-center justify-center -mt-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs sm:text-sm font-bold text-blue-600">Preparation</div>
                  <div className="text-[10px] sm:text-xs text-blue-500 font-medium mt-1">Current</div>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex flex-col items-center w-24 sm:w-32">
                <div className="w-6 h-6 rounded-full bg-slate-200 border-4 border-slate-50 shadow-sm z-10"></div>
                <div className="mt-4 text-center">
                  <div className="text-xs sm:text-sm font-bold text-slate-400">Implementation</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 mt-1">May 1, 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
