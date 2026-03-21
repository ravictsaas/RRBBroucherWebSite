import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is the Renters' Rights Act (RRA)?",
    answer: "The Renters' Rights Act is a major piece of UK legislation designed to reform the private rented sector. Its primary goals are to provide tenants with greater security by ending 'no-fault' evictions, improving housing standards, and creating a fairer system for resolving disputes."
  },
  {
    question: "When do these changes actually take effect?",
    answer: "The Act officially comes into force on May 1, 2026, for all new tenancies. For existing tenancies, there is a transition period, with full implementation for all rental agreements by December 1, 2026."
  },
  {
    question: "Can my landlord still evict me after May 2026?",
    answer: "Yes, but they can no longer use Section 21 'no-fault' evictions. They must provide a valid legal reason (ground) for possession, such as significant rent arrears, antisocial behavior, or if they genuinely intend to sell the property or move back into it themselves."
  },
  {
    question: "How often can my landlord increase the rent?",
    answer: "Under the new Act, rent increases are limited to once per year. Landlords must follow a specific process, and tenants have the right to challenge increases that they believe are above market rates through an independent tribunal."
  },
  {
    question: "Do I have a legal right to keep a pet?",
    answer: "Tenants have the right to *request* a pet, and landlords cannot 'unreasonably' refuse. However, landlords can require tenants to have insurance to cover potential damage caused by the pet. If a landlord refuses, they must provide a good reason, which can be challenged by the tenant."
  },
  {
    question: "What is the 'Decent Homes Standard'?",
    answer: "This is a technical standard that ensures homes are safe, warm, and in a reasonable state of repair. For the first time, this standard will be legally binding for private landlords, giving local councils more power to force improvements in sub-standard housing."
  },
  {
    question: "What is the new Digital Property Portal?",
    answer: "The Property Portal is a new online database where all private landlords must register themselves and their properties. It helps tenants check if their landlord is compliant with safety and legal requirements and helps councils target enforcement efforts."
  },
  {
    question: "What happens if I have a dispute with my landlord?",
    answer: "A new Private Rented Sector Ombudsman will be established. This service will be free for tenants and will provide a way to resolve disputes without the need for expensive and lengthy court proceedings. Landlords will be legally required to join the scheme."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors group"
      >
        <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Quick answers to the most common queries about the Renters' Rights Act 2026.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-4 md:p-8 border border-slate-100 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="#ask-ai"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Ask our AI Assistant for more specific help
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
