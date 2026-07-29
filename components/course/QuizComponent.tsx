"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, XCircle } from "lucide-react";
import { Quiz } from "@/lib/course-data";

interface QuizComponentProps {
  quiz: Quiz;
}

export default function QuizComponent({ quiz }: QuizComponentProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (qId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const score = calculateScore();
  const allAnswered = Object.keys(answers).length === quiz.questions.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl border border-slate-200 p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{quiz.title}</h2>
          <p className="text-slate-500 mt-1">{quiz.description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-500">Time Limit</div>
          <div className="font-semibold text-slate-800">{quiz.timeLimit}</div>
        </div>
      </div>

      <div className="space-y-8">
        {quiz.questions.map((q, idx) => (
          <div key={q.id} className="border-b border-slate-100 pb-6 last:border-0">
            <div className="flex items-start gap-3 mb-4">
              <span className="bg-indigo-100 text-indigo-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">
                {idx + 1}
              </span>
              <h3 className="font-medium text-slate-800 text-lg">{q.question}</h3>
            </div>
            <div className="ml-11 space-y-2">
              {q.options.map((opt, optIdx) => {
                const isSelected = answers[q.id] === optIdx;
                const isCorrect = q.correctAnswer === optIdx;
                let btnClass =
                  "w-full text-left p-4 rounded-lg border transition-all ";
                if (!submitted) {
                  btnClass += isSelected
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
                } else {
                  if (isCorrect) {
                    btnClass +=
                      "border-green-500 bg-green-50 text-green-700";
                  } else if (isSelected && !isCorrect) {
                    btnClass +=
                      "border-red-500 bg-red-50 text-red-700";
                  } else {
                    btnClass += "border-slate-200 text-slate-400";
                  }
                }
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswer(q.id, optIdx)}
                    className={btnClass}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{opt}</span>
                      {submitted && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                      )}
                    </div>
                  </button>
                );
              })}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 p-3 bg-slate-50 rounded-lg text-sm text-slate-600"
                >
                  <strong>Explanation:</strong> {q.explanation}
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Submit Quiz
        </button>
      ) : (
        <div className="mt-8 text-center">
          <div className="text-3xl font-bold text-slate-900 mb-2">{score}%</div>
          <div className="text-slate-500 mb-4">
            {score >= quiz.passingScore
              ? "🎉 Congratulations! You passed!"
              : "Keep studying and try again!"}
          </div>
          <button
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="text-indigo-600 font-medium hover:underline"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </motion.div>
  );
}
