import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';

export default function NoticeCalculator() {
  const [startDate, setStartDate] = useState('');
  const [noticeType, setNoticeType] = useState('sell');
  const [result, setResult] = useState<{ date: string, noticePeriod: string, explanation: string } | null>(null);

  const calculateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate) return;

    const start = new Date(startDate);
    let noticeMonths = 0;
    let explanation = '';

    if (noticeType === 'sell' || noticeType === 'move-in') {
      noticeMonths = 4;
      explanation = "Landlords must give 4 months' notice to sell or move in. This cannot be served within the first 6 months of the tenancy.";
    } else if (noticeType === 'rent-arrears') {
      noticeMonths = 1; // 4 weeks usually, simplifying to 1 month for UI
      explanation = "If the tenant is in serious rent arrears (at least 2 months), the notice period is 4 weeks.";
    } else if (noticeType === 'anti-social') {
      noticeMonths = 0; // Immediate
      explanation = "For severe anti-social behavior, notice can be immediate, but court proceedings are required.";
    }

    const noticeDate = new Date(start);
    noticeDate.setMonth(noticeDate.getMonth() + noticeMonths);

    setResult({
      date: noticeDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      noticePeriod: noticeMonths === 0 ? 'Immediate' : `${noticeMonths} Months`,
      explanation
    });
  };

  return (
    <section id="calculator" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Notice Period Calculator
          </h2>
          <p className="text-lg text-slate-600">
            Calculate the legal notice periods required under the new RRA grounds for possession.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:w-1/2 bg-white">
            <form onSubmit={calculateNotice} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  When do you want to serve notice?
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Reason for eviction (Ground)
                </label>
                <select
                  value={noticeType}
                  onChange={(e) => setNoticeType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                >
                  <option value="sell">Selling the property</option>
                  <option value="move-in">Landlord/Family moving in</option>
                  <option value="rent-arrears">Serious rent arrears</option>
                  <option value="anti-social">Anti-social behavior</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate Notice
              </button>
            </form>
          </div>

          <div className="p-8 md:w-1/2 bg-slate-900 text-white flex flex-col justify-center">
            {result ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3 className="text-lg text-slate-400 mb-2">Earliest Move-Out Date:</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-6">
                  {result.date}
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/10">
                    <span className="block text-sm text-slate-400 mb-1">Required Notice Period:</span>
                    <span className="font-medium">{result.noticePeriod}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {result.explanation}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="text-center text-slate-400">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Enter a date and reason to calculate the legal notice period.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
