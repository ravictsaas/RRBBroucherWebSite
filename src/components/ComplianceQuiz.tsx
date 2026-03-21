import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export default function ComplianceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Are your properties registered on the new Private Rented Sector Database?",
      options: ["Yes", "No", "Not sure"],
      correct: 0,
      explanation: "Registration is mandatory. Failure to register can result in fines and the inability to evict tenants."
    },
    {
      question: "Do your tenancy agreements still include 'no pets' clauses?",
      options: ["Yes", "No", "Sometimes"],
      correct: 1,
      explanation: "Blanket bans on pets are illegal under the RRA. You must consider requests reasonably."
    },
    {
      question: "How often do you plan to increase rent?",
      options: ["Every 6 months", "Once a year", "Whenever the market changes"],
      correct: 1,
      explanation: "Rent can only be increased once every 12 months using the Section 13 procedure."
    },
    {
      question: "Are you a member of the new PRS Ombudsman?",
      options: ["Yes", "No", "I use a letting agent"],
      correct: 0,
      explanation: "All private landlords must join the Ombudsman, even if they use a letting agent."
    },
    {
      question: "Do your properties meet the Decent Homes Standard?",
      options: ["Yes, fully", "Mostly", "No / Not sure"],
      correct: 0,
      explanation: "Properties must be free from serious hazards, in a reasonable state of repair, and have reasonably modern facilities."
    }
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section id="quiz" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Landlord Compliance Checker
          </h2>
          <p className="text-lg text-slate-600">
            Take this 5-question quiz to see if your properties are ready for the Renters' Rights Act.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          {!showResults ? (
            <div>
              <div className="mb-6 flex justify-between items-center text-sm font-medium text-slate-500">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-colors font-medium text-slate-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                {score === questions.length ? (
                  <CheckCircle className="w-16 h-16 text-emerald-500" />
                ) : score >= 3 ? (
                  <AlertTriangle className="w-16 h-16 text-amber-500" />
                ) : (
                  <XCircle className="w-16 h-16 text-red-500" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                You scored {score} out of {questions.length}
              </h3>
              <p className="text-slate-600 mb-8">
                {score === questions.length 
                  ? "Excellent! You appear to be fully prepared for the new legislation." 
                  : score >= 3 
                  ? "You're on the right track, but there are a few areas you need to address before May 2026." 
                  : "Warning: You are currently non-compliant with several major provisions of the RRA. Immediate action is required."}
              </p>
              
              <div className="bg-slate-50 rounded-xl p-6 text-left mb-8">
                <h4 className="font-bold text-slate-900 mb-4">Key Takeaways:</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  {questions.map((q, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-0.5 text-blue-600 font-bold">{i + 1}.</div>
                      <div>{q.explanation}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={restartQuiz}
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
