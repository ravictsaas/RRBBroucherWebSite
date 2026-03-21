import { motion } from 'motion/react';
import { FileDown, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const templates = [
  {
    title: 'RRA-Compliant Tenancy Agreement',
    description: 'Updated agreement reflecting the shift to rolling periodic tenancies and the abolition of fixed terms.',
    format: 'TXT',
    date: 'Effective May 1, 2026',
    fileUrl: '/templates/rra-tenancy-agreement.txt',
    fileName: 'RRA_Tenancy_Agreement_Draft.txt'
  },
  {
    title: 'Revised Section 8 Notice',
    description: 'The new mandatory form for seeking possession under the updated grounds (e.g., selling, moving in, severe arrears).',
    format: 'TXT',
    date: 'Effective May 1, 2026',
    fileUrl: '/templates/section-8-notice.txt',
    fileName: 'Section_8_Notice_Draft.txt'
  },
  {
    title: 'Section 13 Rent Increase Notice',
    description: 'Statutory form required for proposing the new strictly regulated once-a-year rent increase to tenants.',
    format: 'TXT',
    date: 'Effective May 1, 2026',
    fileUrl: '/templates/section-13-notice.txt',
    fileName: 'Section_13_Notice_Draft.txt'
  },
  {
    title: 'Pet Request Decision Form',
    description: 'Formal template to approve or reasonably refuse a tenant\'s request to keep a pet within the statutory 42-day limit.',
    format: 'TXT',
    date: 'Effective May 1, 2026',
    fileUrl: '/templates/pet-request-decision.txt',
    fileName: 'Pet_Request_Decision_Draft.txt'
  }
];

export default function DocumentTemplates() {
  return (
    <section id="templates" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Compliance Ready
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Landlord Compliance Templates
          </h2>
          <p className="text-lg text-slate-600">
            Ensure you are fully compliant with the Renters' Rights Act from day one. Download our free, up-to-date legal templates designed for the new regulations taking effect on May 1, 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7" />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {template.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-200 text-slate-700">
                    {template.format}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  {template.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium text-amber-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {template.date}
                  </span>
                  <a 
                    href={template.fileUrl}
                    download={template.fileName}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            * Disclaimer: These templates are provided for informational purposes. Always consult with a legal professional to ensure your documents meet all specific local and national requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
