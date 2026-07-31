"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Clock, CheckCircle, Lock, ChevronRight, ChevronDown,
  Lightbulb, FileText, Award, ArrowLeft, Zap, Layers,
  Monitor, Shapes, Palette, Component, MousePointerClick,
  Sparkles, Check, X, RotateCcw, Send, Download,
  ExternalLink, Loader2, Save, Star,
} from "lucide-react";
import Link from "next/link";
import VideoPlayer from "@/components/course/VideoPlayer";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-5 h-5" />,
  Shapes: <Shapes className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Component: <Component className="w-5 h-5" />,
  MousePointerClick: <MousePointerClick className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const colorMap: Record<string, string> = {
  "brand-blue": "bg-brand-blue/10 text-brand-blue",
  "brand-purple": "bg-brand-purple/10 text-brand-purple",
  "brand-yellow": "bg-brand-yellow/10 text-brand-yellow",
  "brand-turquoise": "bg-brand-turquoise/10 text-brand-turquoise",
  "brand-easter": "bg-brand-easter/10 text-brand-easter",
  "brand-soft": "bg-brand-soft/10 text-brand-soft",
};

export default function FigmaCoursePage() {
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(0);
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDeliverable, setShowDeliverable] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [savingProgress, setSavingProgress] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [quizResult, setQuizResult] = useState<any>(null);
  const [deliverableForm, setDeliverableForm] = useState({ figmaUrl: "", notes: "" });
  const [submittingDeliverable, setSubmittingDeliverable] = useState(false);

  const userId = "demo-user";

  const fetchCourse = useCallback(async () => {
    try {
      const res = await fetch(`/api/courses/figma-avance?userId=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setCourse(data.course);
      setProgressPercent(data.progress?.percent || 0);
      setCompletedLessons(new Set(data.progress?.completedLessonIds || []));
      setQuizResult(data.quizResult);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  const currentModule = course?.modules?.[activeModule];
  const currentLesson = currentModule?.lessons?.[0];

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleQuizAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const score = course?.quiz
    ? Object.entries(quizAnswers).reduce((acc, [qId, ans]) => {
        const q = course.quiz.questions.find((qq: any) => qq.questionId === qId);
        return acc + (q && q.correctAnswer === ans ? 1 : 0);
      }, 0)
    : 0;
  const maxScore = course?.quiz?.questions?.length || 0;
  const scorePercent = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  const submitQuiz = async () => {
    if (!course?.quiz) return;
    setQuizSubmitted(true);
    const passed = scorePercent >= course.quiz.passingScore;
    try {
      await fetch("/api/quiz-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId, quizId: course.quiz.id, score, maxScore,
          answers: quizAnswers, passed,
        }),
      });
    } catch (e) { console.error(e); }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const markLessonComplete = async () => {
    if (!course || !currentLesson) return;
    setSavingProgress(true);
    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, lessonId: currentLesson.id, completed: true }),
      });
      setCompletedLessons((prev) => new Set(Array.from(prev).concat(currentLesson.id)));
      setProgressPercent((prev) => Math.min(prev + Math.ceil(100 / (course.modules?.length || 1)), 100));
    } catch (e) { console.error(e); }
    finally { setSavingProgress(false); }
  };

  const submitDeliverable = async () => {
    if (!currentLesson) return;
    setSubmittingDeliverable(true);
    try {
      await fetch("/api/deliverable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId, lessonId: currentLesson.id,
          figmaUrl: deliverableForm.figmaUrl,
          notes: deliverableForm.notes,
        }),
      });
      alert("Livrable soumis avec succes !");
    } catch (e) { console.error(e); }
    finally { setSubmittingDeliverable(false); }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-purple animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Cours non trouve. Lancez le seed d'abord.</p>
          <Link href="/courses" className="btn-primary">Retour au catalogue</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-purple-light via-brand-blue-light to-brand-turquoise-light">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-purple transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Retour au catalogue
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-md flex items-center justify-center">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-brand-blue text-white text-xs font-semibold rounded-full">Nouveau</span>
                <span className="flex items-center gap-1 text-xs text-text-secondary"><Clock className="w-3 h-3" /> {course.modules?.length} modules</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">FIGMA FUNDAMENTALS</h1>
              <p className="text-text-secondary text-lg">{course.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-4 space-y-4">
              <div className="bg-surface-card border border-surface-border rounded-xl p-5">
                <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-yellow" /> Progression
                </h3>
                <div className="w-full h-2 bg-surface-muted rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-brand-purple to-brand-blue rounded-full" initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }} transition={{ duration: 0.5 }} />
                </div>
                <p className="text-xs text-text-secondary mt-2">{progressPercent}% complete — {completedLessons.size}/{course.modules?.length || 0} modules</p>
              </div>

              <div className="bg-surface-card border border-surface-border rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-surface-border">
                  <h3 className="font-semibold text-text-primary flex items-center gap-2"><Layers className="w-4 h-4 text-brand-purple" /> Modules</h3>
                </div>
                <div className="divide-y divide-surface-border">
                  {course.modules?.map((mod: any, idx: number) => {
                    const isActive = idx === activeModule && !showQuiz && !showDeliverable;
                    const isCompleted = completedLessons.has(mod.lessons?.[0]?.id);
                    const isLocked = idx > activeModule && !isCompleted;
                    return (
                      <button key={mod.id} onClick={() => { if (!isLocked) { setActiveModule(idx); setShowQuiz(false); setShowDeliverable(false); setExpandedSections([0]); }}}
                        className={`w-full flex items-start gap-3 px-5 py-4 text-left transition-all ${isActive ? "bg-brand-purple-light/50 border-l-4 border-brand-purple" : "border-l-4 border-transparent hover:bg-surface-muted/50"} ${isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isCompleted ? "bg-brand-turquoise text-white" : isActive ? colorMap[mod.icon] || "bg-brand-purple/10 text-brand-purple" : "bg-surface-muted text-text-secondary"}`}>
                          {isCompleted ? <Check className="w-4 h-4" /> : isLocked ? <Lock className="w-4 h-4" /> : iconMap[mod.icon] || <Play className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${isActive ? "text-brand-purple" : "text-text-primary"}`}>{mod.title}</p>
                          <p className="text-xs text-text-secondary mt-0.5">{mod.duration}</p>
                        </div>
                        {isActive && <ChevronRight className="w-4 h-4 text-brand-purple shrink-0" />}
                      </button>
                    );
                  })}
                </div>
                <button onClick={() => { setShowQuiz(true); setShowDeliverable(false); }}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all border-t border-surface-border ${showQuiz ? "bg-brand-purple-light/50 border-l-4 border-brand-purple" : "border-l-4 border-transparent hover:bg-surface-muted/50"}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${showQuiz ? "bg-brand-easter/10 text-brand-easter" : "bg-surface-muted text-text-secondary"}`}><Award className="w-4 h-4" /></div>
                  <div className="flex-1"><p className={`text-sm font-medium ${showQuiz ? "text-brand-easter" : "text-text-primary"}`}>Quiz Final</p><p className="text-xs text-text-secondary">{course.quiz?.questions?.length || 0} questions</p></div>
                </button>
                <button onClick={() => { setShowDeliverable(true); setShowQuiz(false); }}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all border-t border-surface-border ${showDeliverable ? "bg-brand-purple-light/50 border-l-4 border-brand-purple" : "border-l-4 border-transparent hover:bg-surface-muted/50"}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${showDeliverable ? "bg-brand-yellow/10 text-brand-yellow" : "bg-surface-muted text-text-secondary"}`}><FileText className="w-4 h-4" /></div>
                  <div className="flex-1"><p className={`text-sm font-medium ${showDeliverable ? "text-brand-yellow" : "text-text-primary"}`}>Livrable</p><p className="text-xs text-text-secondary">Projet pratique</p></div>
                </button>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {showQuiz ? (
                <motion.div key="quiz" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="bg-surface-card border border-surface-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-easter/10 rounded-xl flex items-center justify-center"><Award className="w-6 h-6 text-brand-easter" /></div>
                    <div><h2 className="text-2xl font-bold text-text-primary">{course.quiz?.title || "Quiz"}</h2><p className="text-text-secondary">{course.quiz?.description}</p></div>
                  </div>
                  {quizResult && (
                    <div className="mb-6 p-4 bg-brand-blue-light rounded-xl">
                      <p className="text-sm text-brand-blue font-medium">Resultat precedent : {quizResult.score}/{quizResult.maxScore} ({Math.round((quizResult.score/quizResult.maxScore)*100)}%) {quizResult.passed ? "— Reussi" : "— A refaire"}</p>
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-8 text-sm">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue-light text-brand-blue rounded-full font-medium"><Clock className="w-3.5 h-3.5" />{course.quiz?.timeLimit}</span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-yellow-light text-brand-yellow rounded-full font-medium"><Award className="w-3.5 h-3.5" />Min : {course.quiz?.passingScore}%</span>
                  </div>
                  <div className="space-y-6">
                    {course.quiz?.questions?.map((q: any, idx: number) => (
                      <div key={q.id} className="border border-surface-border rounded-xl p-5">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="w-8 h-8 bg-brand-purple text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">{idx + 1}</span>
                          <h3 className="font-semibold text-text-primary pt-1">{q.question}</h3>
                        </div>
                        <div className="space-y-2 ml-11">
                          {q.options.map((opt: string, optIdx: number) => {
                            const isSelected = quizAnswers[q.questionId] === optIdx;
                            const isCorrect = q.correctAnswer === optIdx;
                            let btnClass = "w-full text-left px-4 py-3 rounded-lg border transition-all text-sm ";
                            if (!quizSubmitted) {
                              btnClass += isSelected ? "border-brand-purple bg-brand-purple-light text-brand-purple font-medium" : "border-surface-border hover:border-brand-purple/50 hover:bg-surface-muted";
                            } else {
                              if (isCorrect) btnClass += "border-state-success bg-state-success/10 text-state-success font-medium";
                              else if (isSelected && !isCorrect) btnClass += "border-state-error bg-state-error/10 text-state-error font-medium";
                              else btnClass += "border-surface-border text-text-secondary";
                            }
                            return (
                              <button key={optIdx} onClick={() => handleQuizAnswer(q.questionId, optIdx)} className={btnClass}>
                                <div className="flex items-center gap-3">
                                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] ${isSelected && !quizSubmitted ? "border-brand-purple bg-brand-purple text-white" : quizSubmitted && isCorrect ? "border-state-success bg-state-success text-white" : quizSubmitted && isSelected && !isCorrect ? "border-state-error bg-state-error text-white" : "border-surface-border"}`}>
                                    {quizSubmitted && isCorrect && <Check className="w-3 h-3" />}
                                    {quizSubmitted && isSelected && !isCorrect && <X className="w-3 h-3" />}
                                  </span>
                                  {opt}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        {quizSubmitted && (
                          <div className="mt-4 ml-11 p-4 bg-brand-blue-light rounded-lg text-sm">
                            <p className="font-semibold text-brand-blue mb-1">Explication :</p>
                            <p className="text-text-secondary">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {!quizSubmitted ? (
                      <button onClick={submitQuiz} disabled={Object.keys(quizAnswers).length < (course.quiz?.questions?.length || 0)} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                        <Send className="w-4 h-4" />Soumettre le quiz
                      </button>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl font-bold ${scorePercent >= (course.quiz?.passingScore || 80) ? "text-state-success" : "text-state-error"}`}>{scorePercent}%</div>
                        <div>
                          <p className="font-semibold text-text-primary">{scorePercent >= (course.quiz?.passingScore || 80) ? "Felicitations ! Tu as reussi !" : "Continue a etudier et reessaie !"}</p>
                          <p className="text-sm text-text-secondary">{score} / {maxScore} bonnes reponses</p>
                        </div>
                      </div>
                    )}
                    {quizSubmitted && <button onClick={resetQuiz} className="btn-ghost"><RotateCcw className="w-4 h-4" />Recommencer</button>}
                  </div>
                </motion.div>
              ) : showDeliverable ? (
                <motion.div key="deliverable" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="bg-surface-card border border-surface-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-xl flex items-center justify-center"><FileText className="w-6 h-6 text-brand-yellow" /></div>
                    <div><h2 className="text-2xl font-bold text-text-primary">{course.deliverable?.title || "Livrable"}</h2><p className="text-text-secondary">{course.deliverable?.description}</p></div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue-light text-brand-blue rounded-full text-sm font-medium"><Clock className="w-3.5 h-3.5" />{course.deliverable?.deadline}</span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-purple-light text-brand-purple rounded-full text-sm font-medium"><Download className="w-3.5 h-3.5" />{course.deliverable?.format}</span>
                  </div>
                  <p className="text-text-secondary mb-8">{course.deliverable?.instructions}</p>
                  <div className="space-y-6">
                    {course.deliverable?.requirements?.map((req: any, i: number) => (
                      <div key={i} className="border border-surface-border rounded-xl p-5">
                        <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-turquoise" />{req.heading}</h3>
                        <ul className="space-y-2">
                          {req.points?.map((point: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-text-secondary"><ChevronRight className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-5 bg-brand-yellow-light/50 border border-brand-yellow/20 rounded-xl">
                    <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2"><Star className="w-4 h-4 text-brand-yellow" />Criteres d&apos;evaluation</h3>
                    <ul className="space-y-2">
                      {course.deliverable?.evaluationCriteria?.map((c: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary"><Star className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 border border-surface-border rounded-xl p-5">
                    <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2"><Send className="w-4 h-4 text-brand-purple" />Soumettre ton livrable</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Lien Figma</label>
                        <input type="url" placeholder="https://www.figma.com/file/..." value={deliverableForm.figmaUrl} onChange={(e) => setDeliverableForm(p => ({ ...p, figmaUrl: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-sm outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple-light" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Notes (optionnel)</label>
                        <textarea placeholder="Decris ton travail..." rows={4} value={deliverableForm.notes} onChange={(e) => setDeliverableForm(p => ({ ...p, notes: e.target.value }))} className="w-full px-4 py-2.5 rounded-lg border border-surface-border text-sm outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple-light resize-none" />
                      </div>
                      <div className="flex gap-3">
                        <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="btn-primary"><ExternalLink className="w-4 h-4" />Ouvrir Figma</a>
                        <button onClick={submitDeliverable} disabled={submittingDeliverable || !deliverableForm.figmaUrl} className="btn-purple disabled:opacity-50">
                          {submittingDeliverable ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}Soumettre
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : currentModule ? (
                <motion.div key={currentModule.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                  <div className="bg-surface-card border border-surface-border rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colorMap[currentModule.icon] || "bg-brand-purple/10 text-brand-purple"}`}>
                        {iconMap[currentModule.icon] || <Play className="w-3 h-3" />}Module {currentModule.order}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-text-secondary"><Clock className="w-3 h-3" />{currentModule.duration}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">{currentModule.title}</h2>
                    <p className="text-text-secondary">{currentModule.description}</p>
                    {currentModule.videoUrl && <VideoPlayer videoUrl={currentModule.videoUrl} title={`${currentModule.title} — Video`} />}
                  </div>

                  <div className="flex justify-end">
                    <button onClick={markLessonComplete} disabled={savingProgress || completedLessons.has(currentLesson?.id)} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${completedLessons.has(currentLesson?.id) ? "bg-brand-turquoise/10 text-brand-turquoise cursor-default" : "bg-brand-purple text-white hover:bg-brand-purple/90"}`}>
                      {savingProgress ? <Loader2 className="w-4 h-4 animate-spin" /> : completedLessons.has(currentLesson?.id) ? <><Check className="w-4 h-4" />Module termine</> : <><Save className="w-4 h-4" />Marquer comme termine</>}
                    </button>
                  </div>

                  <div className="bg-gradient-to-r from-brand-purple-light to-brand-blue-light border border-brand-purple/10 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                      <div><h3 className="font-semibold text-text-primary mb-1">Introduction</h3><p className="text-text-secondary text-sm leading-relaxed">Bienvenue dans ce module ! Tu vas apprendre les fondamentaux de {currentModule.title.toLowerCase()}.</p></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {currentModule.sections?.map((section: any, idx: number) => (
                      <div key={section.id} className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden">
                        <button onClick={() => toggleSection(idx)} className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-muted/30 transition-colors">
                          <h3 className="font-semibold text-text-primary flex items-center gap-2"><span className="w-6 h-6 bg-brand-purple/10 text-brand-purple rounded-md flex items-center justify-center text-xs font-bold">{idx + 1}</span>{section.heading}</h3>
                          <ChevronDown className={`w-5 h-5 text-text-secondary transition-transform ${expandedSections.includes(idx) ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {expandedSections.includes(idx) && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                              <div className="px-5 pb-5 pt-0">
                                <div className="pl-8 border-l-2 border-surface-border">
                                  <div className="prose prose-sm max-w-none text-text-secondary whitespace-pre-line leading-relaxed">
                                    {renderBody(section.body)}
                                  </div>
                                  {section.videoUrl && <VideoPlayer videoUrl={section.videoUrl} title={section.heading} />}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  <div className="bg-brand-turquoise-light border border-brand-turquoise/20 rounded-2xl p-6">
                    <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-brand-turquoise" />Points cles a retenir</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentModule.keyTakeaways?.map((takeaway: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 bg-white/60 rounded-lg px-4 py-3">
                          <CheckCircle className="w-4 h-4 text-brand-turquoise shrink-0 mt-0.5" />
                          <span className="text-sm text-text-primary">{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button onClick={() => { if (activeModule > 0) { setActiveModule(activeModule - 1); setExpandedSections([0]); } }} disabled={activeModule === 0} className="btn-ghost disabled:opacity-40 disabled:cursor-not-allowed"><ArrowLeft className="w-4 h-4" />Precedent</button>
                    <button onClick={() => { if (activeModule < course.modules.length - 1) { setActiveModule(activeModule + 1); setExpandedSections([0]); } else { setShowQuiz(true); } }} className="btn-primary">{activeModule < course.modules.length - 1 ? "Module suivant" : "Passer au quiz"}<ChevronRight className="w-4 h-4" /></button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 my-2">
          {currentList.map((line, i) => (
            <li key={i} className="text-sm">{renderInline(line.replace(/^- /, ""))}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    if (trimmed.startsWith("- ")) {
      currentList.push(trimmed);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      flushList();
      elements.push(<p key={idx} className="font-semibold text-text-primary mt-4 mb-2">{renderInline(trimmed)}</p>);
    } else if (trimmed.startsWith("| ")) {
      flushList();
      elements.push(<div key={idx} className="my-3 p-3 bg-surface-muted rounded-lg text-xs font-mono overflow-x-auto">{trimmed}</div>);
    } else {
      flushList();
      elements.push(<p key={idx} className="mb-3">{renderInline(trimmed)}</p>);
    }
  });
  flushList();
  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-text-primary">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}
