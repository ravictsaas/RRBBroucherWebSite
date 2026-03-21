export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-serif font-bold text-xl mb-2">Renters' Rights Act Guide</h3>
            <p className="text-sm">Providing clarity on the May 2026 UK rental reforms.</p>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} RRA Guide. All rights reserved.</p>
            <p className="mt-1">Not affiliated with the UK Government.</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 text-center max-w-4xl mx-auto leading-relaxed">
          <strong>Legal Disclaimer:</strong> The information provided on this website is for general guidance and informational purposes only. It does not constitute formal legal advice, and should not be relied upon as a substitute for professional legal advice. The Renters' Rights Act involves complex legal changes, and you should always consult with a qualified solicitor or legal professional regarding your specific situation and obligations.
        </div>
      </div>
    </footer>
  );
}
