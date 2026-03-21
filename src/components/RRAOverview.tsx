import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Home, TrendingUp, BookOpen, ChevronDown } from 'lucide-react';
import Tooltip from './Tooltip';
import ShareButtons from './ShareButtons';

export default function RRAOverview() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      color: "blue",
      title: "Tenant Protections",
      content: (
        <>
          <p className="mb-4">
            The RRA fundamentally redefines the balance of power by abolishing <Tooltip text="Section 21" explanation="The legal mechanism allowing landlords to evict tenants without a specific reason (no-fault eviction)." /> "no-fault" evictions. Renters can no longer be asked to leave without a valid, legally defined reason.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Rolling Contracts:</strong> All tenancies transition to a single system of rolling periodic agreements. Fixed-term contracts are eliminated.</li>
            <li><strong>Pet Rights:</strong> New rights to request keeping a pet, which landlords cannot unreasonably refuse.</li>
            <li><strong>Anti-Discrimination:</strong> Stronger protections against blanket bans on renting to families with children or those receiving benefits.</li>
          </ul>
          <ShareButtons 
            title="Tenant Protections under the Renters' Rights Act" 
            text="The Renters' Rights Act abolishes Section 21 'no-fault' evictions and introduces rolling periodic tenancies, giving renters more security and flexibility."
          />
        </>
      )
    },
    {
      icon: <Home className="w-6 h-6" />,
      color: "emerald",
      title: "Landlord Responsibilities",
      content: (
        <>
          <p className="mb-4">
            While <Tooltip text="Section 21" explanation="The legal mechanism allowing landlords to evict tenants without a specific reason (no-fault eviction)." /> is abolished, the RRA introduces strengthened Section 8 grounds for possession. Landlords can still reclaim properties to sell, move in, or for severe rent arrears/anti-social behavior.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Rent Increases:</strong> Rent can only be increased once per year using a prescribed Section 13 form with two months' notice.</li>
            <li><strong>Property Standards:</strong> Properties must meet the new <Tooltip text="Decent Homes Standard" explanation="A minimum standard for housing conditions, ensuring properties are safe, warm, and in a reasonable state of repair." />, guaranteeing safe and hazard-free living conditions.</li>
            <li><strong>Ombudsman:</strong> Mandatory membership in the new Private Rented Sector Ombudsman.</li>
          </ul>
          <ShareButtons 
            title="Landlord Responsibilities under the Renters' Rights Act" 
            text="Landlords must adapt to new regulations, including strengthened Section 8 grounds for possession, strict rent increase processes, and meeting the Decent Homes Standard."
          />
        </>
      )
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      color: "purple",
      title: "Impact on Housing Market",
      content: (
        <>
          <p className="mb-4">
            The immediate effect will likely be a stabilization of communities, as tenants enjoy longer, more secure tenancies. This reduction in turnover can benefit landlords by minimizing void periods.
          </p>
          <p className="mb-6">
            However, the market may experience a period of adjustment. Some landlords reliant on the flexibility of short-term fixed contracts may choose to exit the market. Over the long term, the legislation aims to drive up the overall quality of housing stock and push out rogue operators.
          </p>
          <ShareButtons 
            title="Impact of the Renters' Rights Act on the Housing Market" 
            text="The Renters' Rights Act is expected to stabilize communities with longer tenancies, though the market may see a period of adjustment as landlords adapt to the new rules."
          />
        </>
      )
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      color: "amber",
      title: "Compliance Guidance",
      content: (
        <>
          <p className="mb-4">
            Landlords and letting agents must immediately review their current tenancy agreements and operational procedures to ensure they align with the new periodic tenancy structure.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Audit Properties:</strong> Check properties against the <Tooltip text="Decent Homes Standard" explanation="A minimum standard for housing conditions, ensuring properties are safe, warm, and in a reasonable state of repair." /> and address maintenance issues promptly.</li>
            <li><strong>Record Keeping:</strong> Keep meticulous records of all communications, rent payments, and property repairs.</li>
            <li><strong>Update Templates:</strong> Utilize updated, legally compliant templates for tenancy agreements and notices.</li>
          </ul>
          <ShareButtons 
            title="Compliance Guidance for the Renters' Rights Act" 
            text="Property professionals must proactively prepare for the Renters' Rights Act by reviewing tenancy agreements, auditing properties against the Decent Homes Standard, and keeping meticulous records."
          />
        </>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const classes: Record<string, string> = {
      blue: "bg-blue-100 text-blue-600",
      emerald: "bg-emerald-100 text-emerald-600",
      purple: "bg-purple-100 text-purple-600",
      amber: "bg-amber-100 text-amber-600",
    };
    return classes[color] || classes.blue;
  };

  return (
    <section id="overview" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Understanding the Renters' Rights Act
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive look at how the upcoming legislation reshapes the private rented sector.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getColorClasses(section.color)}`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${openSection === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 ml-16 text-slate-600 leading-relaxed border-t border-slate-100 mt-4">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
