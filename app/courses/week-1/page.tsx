"use client";

import { useState } from "react";

const week1Data = {
  week: 1,
  title: "FOUNDATIONS",
  subtitle: "Understand the Basics",
  duration: "5 days",
  outcomes: [
    "Clear understanding of UI/UX and design mindset",
    "Ability to distinguish UI, UX, and Product Design",
    "Knowledge of the Design Thinking process",
    "Mastery of core design principles",
  ],
  modules: [
    {
      id: "w1-d1",
      day: 1,
      title: "The UX Challenge",
      duration: "45 min",
      description: "Understand why UX design matters and the real-world challenges designers face.",
      status: "available",
      introduction: "Welcome to UX Loop Academy! Before we dive into tools and techniques, let's understand WHY UX design exists and what challenges you'll solve as a designer.",
      sections: [
        {
          heading: "Why UX Design Matters",
          body: "Every day, you interact with dozens of digital products. Some feel effortless; others frustrate you. The difference? UX Design.\n\nUX design is the process of creating products that provide meaningful experiences to users.\n\nReal-world impact:\n- A 1-second delay reduces conversions by 7% (Amazon)\n- 88% of users won't return after a bad experience\n- Good UX increases conversions by up to 400%",
        },
        {
          heading: "The 5 Core Challenges",
          body: "1. Understanding Diverse Users — different backgrounds, abilities, cultures\n2. Balancing Business Goals & User Needs — sign-ups vs. user satisfaction\n3. Solving Complex Problems Simply — like Uber hiding logistics behind one button\n4. Keeping Up with Technology — desktop, mobile, AI, voice\n5. Measuring Intangible Experiences — delight, frustration, NPS scores",
        },
        {
          heading: "The UX Designer's Mindset",
          body: "- Empathy: design for humans, not yourself\n- Curiosity: always ask 'Why?' and 'What if?'\n- Collaboration: team sport with devs, PMs, stakeholders\n- Iteration: first idea is rarely the best\n- Advocacy: you are the voice of the user",
        },
      ],
      keyTakeaways: [
        "UX design solves real business problems through user-centered thinking.",
        "The biggest challenge is balancing user needs with business constraints.",
        "Empathy and iteration are your superpowers.",
      ],
    },
    {
      id: "w1-d2",
      day: 2,
      title: "What is UI/UX?",
      duration: "50 min",
      description: "Demystify the terms UI and UX with clear definitions and analogies.",
      status: "locked",
      introduction: "UI and UX are often used interchangeably, but they are distinct disciplines.",
      sections: [
        {
          heading: "What is UX?",
          body: "User Experience encompasses ALL aspects of the end-user's interaction with the company, its services, and its products.\n\nLike an iceberg: what users see is just the tip. Below: User Research, Information Architecture, Interaction Design, Usability Testing, Content Strategy, Accessibility.\n\nAnalogy: UX is the engine of a car.",
        },
        {
          heading: "What is UI?",
          body: "User Interface is the visual and interactive layer users see and touch. It's a SUBSET of UX.\n\nFocuses on: Visual Design, Layout, Interactivity, Brand Consistency.\n\nAnalogy: UI is the car's dashboard and paint job.",
        },
        {
          heading: "UX vs UI",
          body: "UX without UI = functional but ugly\nUI without UX = beautiful but frustrating\n\nRestaurant analogy:\n- UX = location, parking, wait time, food quality, payment\n- UI = menu design, decor, lighting, uniforms",
        },
      ],
      keyTakeaways: [
        "UX is the overall experience; UI is the visual layer.",
        "UI is a subset of UX.",
        "Best products master both.",
      ],
    },
    {
      id: "w1-d3",
      day: 3,
      title: "UI vs UX vs Product Design",
      duration: "55 min",
      description: "Understand the distinctions between UI Design, UX Design, and Product Design.",
      status: "locked",
      introduction: "In job postings, you'll see three titles. Let's understand what each actually does.",
      sections: [
        {
          heading: "UX Designer",
          body: "Focus: user journey and problem-solving\n\nResponsibilities: user research, personas, journey maps, wireframing, usability testing\nTools: Figma, Miro, UserTesting, Hotjar, Maze\nMindset: 'Does this solve the user's problem?'",
        },
        {
          heading: "UI Designer",
          body: "Focus: visual and interactive aspects\n\nResponsibilities: high-fidelity mockups, design systems, visual consistency, micro-interactions\nTools: Figma, Sketch, Adobe XD\nMindset: 'Does this look beautiful and on-brand?'",
        },
        {
          heading: "Product Designer",
          body: "Focus: intersection of UX, UI, and business strategy\n\nThe 'full-stack' designer. Owns entire process from discovery to delivery + business impact.\n\nSalary context (2025-2026):\n- Junior: $60k–$80k\n- Mid-level: $90k–$130k\n- Senior: $130k–$180k+",
        },
      ],
      keyTakeaways: [
        "UX = research, flows, problem-solving",
        "UI = visuals, systems, polish",
        "Product Designer = both + business strategy",
      ],
    },
    {
      id: "w1-d4",
      day: 4,
      title: "Design Thinking Process",
      duration: "60 min",
      description: "Master the 5-phase Design Thinking framework.",
      status: "locked",
      introduction: "Design Thinking is a battle-tested framework used by IDEO, Apple, Google, and IBM.",
      sections: [
        {
          heading: "Phase 1: Empathize",
          body: "Goal: understand users deeply\n\nMethods: user interviews, contextual inquiry, empathy maps, personas\n\nKey question: 'What are users really trying to achieve?'\nTip: Ask 'Tell me about the last time you...' not 'Would you use this?'",
        },
        {
          heading: "Phase 2: Define",
          body: "Goal: synthesize research into a clear problem statement\n\nMethods: POV statements, How Might We questions, prioritization matrix\n\nExample HMW: 'How might we make grocery ordering possible in under 5 minutes?'",
        },
        {
          heading: "Phase 3: Ideate",
          body: "Goal: generate creative solutions without judgment\n\nMethods: brainstorming, Crazy 8s, mind mapping, SCAMPER\n\nRules: defer judgment, encourage wild ideas, build on others' ideas, be visual",
        },
        {
          heading: "Phase 4: Prototype",
          body: "Goal: build quick, cheap representations\n\nTypes: paper prototypes, low-fi wireframes, high-fi mockups, interactive prototypes\n\nPrinciples: start low-fi, use real content, build to learn",
        },
        {
          heading: "Phase 5: Test",
          body: "Goal: validate with real users\n\nMethods: usability testing, A/B testing, guerrilla testing, remote testing\n\nMindset: you're testing the DESIGN, not the USER. 5 users reveal 85% of issues.",
        },
      ],
      keyTakeaways: [
        "5-phase loop: Empathize → Define → Ideate → Prototype → Test",
        "Always start with empathy",
        "Prototypes should be quick and cheap",
        "Testing reveals truth",
      ],
    },
    {
      id: "w1-d5",
      day: 5,
      title: "Core Design Principles",
      duration: "70 min",
      description: "Master Color, Typography, Spacing, Alignment, and Contrast.",
      status: "locked",
      introduction: "These five principles are the building blocks of every interface you'll ever design.",
      sections: [
        {
          heading: "1. Color",
          body: "Psychology: Blue = trust, Red = urgency, Green = success, Yellow = energy, Black = luxury\n\nSystems: Primary (CTAs), Secondary, Neutrals, Semantic (error/success/warning/info)\n\n60-30-10 Rule: 60% dominant, 30% secondary, 10% accent\n\nAccessibility: never rely on color alone",
        },
        {
          heading: "2. Typography",
          body: "90% of web design. Categories: Serif (editorial), Sans-Serif (digital), Display (headlines only)\n\nType scale (base 16px): H1=48px Bold, H2=36px SemiBold, H3=28px Medium, Body=16px\n\nReadability: 45-75 chars/line, line-height 1.5x body, max 2 fonts",
        },
        {
          heading: "3. Spacing (8-Point Grid)",
          body: "White space is active design, not emptiness.\n\n8-point grid: 8, 16, 24, 32, 40, 48, 64px...\n\nMacro = between sections, Micro = between elements\n\nLaw of Proximity: close elements = related",
        },
        {
          heading: "4. Alignment",
          body: "Left-aligned = best for body text (Western languages)\nCenter = headlines only\nJustified = avoid on web\n\nUse 12-column grid. Align to common edges. Baseline alignment for text.",
        },
        {
          heading: "5. Contrast",
          body: "Creates hierarchy and accessibility.\n\nTypes: Size, Color, Weight, Shape\n\nWCAG ratios: normal text 4.5:1 (AA), large text 3:1\n\nMost important element = HIGHEST contrast",
        },
      ],
      keyTakeaways: [
        "Color communicates emotion — use intentionally",
        "Typography is the backbone",
        "Spacing is an active design tool",
        "Alignment creates order",
        "Contrast builds hierarchy",
      ],
    },
  ],
  quiz: {
    title: "Week 1 Quiz",
    description: "Test your understanding",
    timeLimit: "15 min",
    passingScore: 80,
    questions: [
      { id: "q1", question: "What is the PRIMARY difference between UX and UI?", options: ["UX is coding, UI is graphics", "UX = overall experience; UI = visual layer", "UX is cheaper", "UI is more important"], correctAnswer: 1, explanation: "UX encompasses research, architecture, testing. UI is the visual surface." },
      { id: "q2", question: "Which role includes UX + UI + business strategy?", options: ["Graphic Designer", "UX Researcher", "Product Designer", "Frontend Dev"], correctAnswer: 2, explanation: "Product Designers are 'full-stack' designers with business focus." },
      { id: "q3", question: "Goal of the 'Empathize' phase?", options: ["Create mockups", "Understand users deeply", "Write code", "Launch product"], correctAnswer: 1, explanation: "Empathize is about understanding users through research." },
      { id: "q4", question: "What does HMW technique do?", options: ["Write code faster", "Turn problems into opportunities", "Choose colors", "Measure speed"], correctAnswer: 1, explanation: "How Might We reframes problems as ideation opportunities." },
      { id: "q5", question: "60-30-10 rule: accent color is?", options: ["60%", "30%", "10%", "50%"], correctAnswer: 2, explanation: "60% dominant, 30% secondary, 10% accent." },
      { id: "q6", question: "Minimum contrast ratio for normal text (WCAG AA)?", options: ["2:1", "3:1", "4.5:1", "10:1"], correctAnswer: 2, explanation: "WCAG AA requires 4.5:1 for normal text." },
      { id: "q7", question: "Which spacing system do pros use?", options: ["5-point", "8-point", "12-point", "Random"], correctAnswer: 1, explanation: "8-point grid is the industry standard." },
      { id: "q8", question: "Primary purpose of white space?", options: ["Save ink", "Guide attention and hierarchy", "Load faster", "Laziness"], correctAnswer: 1, explanation: "White space is an active design tool for focus and readability." },
      { id: "q9", question: "Users needed to find 85% of issues?", options: ["1", "5", "50", "100"], correctAnswer: 1, explanation: "Nielsen Norman Group: 5 users reveal ~85% of problems." },
      { id: "q10", question: "Best alignment for body text?", options: ["Center", "Right", "Left", "Justified"], correctAnswer: 2, explanation: "Left-aligned creates consistent starting point for the eye." },
    ],
  },
  deliverable: {
    title: "App Analysis Assignment",
    description: "Analyze an app you use frequently.",
    instructions: "Choose an app (Instagram, Spotify, Uber, etc.). Write ~250-300 words analyzing UX, UI, and Design Principles.",
    format: "PDF or Google Doc with screenshots",
    deadline: "End of Week 1",
    requirements: [
      { heading: "UX Analysis", points: ["What problem does the app solve?", "Describe the user journey — what works well?", "2 UX strengths", "1 UX weakness"] },
      { heading: "UI Analysis", points: ["Visual style description", "Color usage and emotions", "Typography readability", "Icons and consistency"] },
      { heading: "Design Principles", points: ["Color: 60-30-10 rule? Semantic colors?", "Typography: type scale? alignment?", "Spacing: 8-point grid visible?", "Alignment: grid consistency?", "Contrast: sufficient ratios?"] },
    ],
    evaluationCriteria: ["UX vs UI distinctions", "Correct terminology", "Specific examples", "Critical thinking"],
  },
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

export default function Week1Page() {
  const [activeModule, setActiveModule] = useState(0);
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDeliverable, setShowDeliverable] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const course = week1Data;
  const currentModule = course.modules[activeModule];
  const progress = ((activeModule + 1) / course.modules.length) * 100;

  const handleQuizAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const calculateScore = () => {
    let correct = 0;
    course.quiz.questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / course.quiz.questions.length) * 100);
  };

  const score = calculateScore();
  const allAnswered = Object.keys(quizAnswers).length === course.quiz.questions.length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <BookIcon />
                <span>Week {course.week}</span>
                <span className="text-slate-300">|</span>
                <ClockIcon />
                <span>{course.duration}</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">{course.title}</h1>
              <p className="text-slate-500">{course.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500 mb-1">Progress</div>
              <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              <div className="text-xs text-slate-400 mt-1">{Math.round(progress)}% complete</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
        <div className="w-80 shrink-0">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden sticky top-24">
            <div className="p-4 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">Course Modules</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {course.modules.map((module, index) => (
                <button
                  key={module.id}
                  onClick={() => {
                    if (module.status !== "locked") {
                      setActiveModule(index);
                      setExpandedSection(0);
                      setShowQuiz(false);
                      setShowDeliverable(false);
                    }
                  }}
                  className={`w-full text-left p-4 transition-colors ${
                    activeModule === index && !showQuiz && !showDeliverable
                      ? "bg-indigo-50 border-l-4 border-indigo-600"
                      : "hover:bg-slate-50 border-l-4 border-transparent"
                  } ${module.status === "locked" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {module.status === "completed" ? <CheckIcon /> : module.status === "locked" ? <LockIcon /> : <CircleIcon />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-slate-500 mb-0.5">Day {module.day}</div>
                      <div className="font-medium text-slate-800 text-sm">{module.title}</div>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                        <ClockIcon /> {module.duration}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => { setShowQuiz(true); setShowDeliverable(false); }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${showQuiz ? "bg-indigo-50 text-indigo-700" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
              >
                <AwardIcon /> <span className="font-medium text-sm">Take Quiz</span>
              </button>
              <button
                onClick={() => { setShowDeliverable(true); setShowQuiz(false); }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${showDeliverable ? "bg-indigo-50 text-indigo-700" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
              >
                <FileIcon /> <span className="font-medium text-sm">Assignment</span>
              </button>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl border border-slate-200 p-4">
            <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <LightbulbIcon /> Learning Outcomes
            </h3>
            <ul className="space-y-2">
              {course.outcomes.map((outcome, i) => (
                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                  <CheckIcon /> {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {showQuiz ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{course.quiz.title}</h2>
                  <p className="text-slate-500 mt-1">{course.quiz.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Time Limit</div>
                  <div className="font-semibold text-slate-800">{course.quiz.timeLimit}</div>
                </div>
              </div>
              <div className="space-y-8">
                {course.quiz.questions.map((q, idx) => (
                  <div key={q.id} className="border-b border-slate-100 pb-6 last:border-0">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="bg-indigo-100 text-indigo-700 font-semibold rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">{idx + 1}</span>
                      <h3 className="font-medium text-slate-800 text-lg">{q.question}</h3>
                    </div>
                    <div className="ml-11 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = quizAnswers[q.id] === optIdx;
                        const isCorrect = q.correctAnswer === optIdx;
                        let btnClass = "w-full text-left p-4 rounded-lg border transition-all ";
                        if (!quizSubmitted) {
                          btnClass += isSelected ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50";
                        } else {
                          if (isCorrect) btnClass += "border-green-500 bg-green-50 text-green-700";
                          else if (isSelected && !isCorrect) btnClass += "border-red-500 bg-red-50 text-red-700";
                          else btnClass += "border-slate-200 text-slate-400";
                        }
                        return (
                          <button key={optIdx} onClick={() => handleQuizAnswer(q.id, optIdx)} className={btnClass}>
                            <div className="flex items-center gap-3">
                              <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium shrink-0">{String.fromCharCode(65 + optIdx)}</span>
                              <span>{opt}</span>
                            </div>
                          </button>
                        );
                      })}
                      {quizSubmitted && (
                        <div className="mt-3 p-3 bg-slate-50 rounded-lg text-sm text-slate-600">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {!quizSubmitted ? (
                <button onClick={() => setQuizSubmitted(true)} disabled={!allAnswered} className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                  Submit Quiz
                </button>
              ) : (
                <div className="mt-8 text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{score}%</div>
                  <div className="text-slate-500 mb-4">{score >= course.quiz.passingScore ? "🎉 Congratulations! You passed!" : "Keep studying and try again!"}</div>
                  <button onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); }} className="text-indigo-600 font-medium hover:underline">Retake Quiz</button>
                </div>
              )}
            </div>
          ) : showDeliverable ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <FileIcon />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{course.deliverable.title}</h2>
                  <p className="text-slate-500">{course.deliverable.description}</p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-2">
                  <ClockIcon />
                  <div>
                    <div className="font-medium text-amber-800">Deadline: {course.deliverable.deadline}</div>
                    <div className="text-sm text-amber-700">Format: {course.deliverable.format}</div>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 mb-6">{course.deliverable.instructions}</p>
              {course.deliverable.requirements.map((req, i) => (
                <div key={i} className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">{req.heading}</h3>
                  <ul className="space-y-2">
                    {req.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-700">
                        <ArrowRightIcon /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-8 bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-800 mb-3">Evaluation Criteria</h3>
                <ul className="space-y-2">
                  {course.deliverable.evaluationCriteria.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckIcon /> {criterion}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Submit Assignment</button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 rounded-full text-sm">Day {currentModule.day}</span>
                  <span className="text-slate-400 text-sm flex items-center gap-1"><ClockIcon /> {currentModule.duration}</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">{currentModule.title}</h2>
                <p className="text-slate-600 text-lg">{currentModule.description}</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="font-semibold text-slate-800 mb-2">Introduction</h3>
                <p className="text-slate-600 leading-relaxed">{currentModule.introduction}</p>
              </div>

              <div className="space-y-4">
                {currentModule.sections.map((section, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-600">{idx + 1}</span>
                        <h3 className="font-semibold text-slate-800 text-left">{section.heading}</h3>
                      </div>
                      {expandedSection === idx ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </button>
                    {expandedSection === idx && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                        <div className="ml-12 text-slate-700 leading-relaxed whitespace-pre-line">{section.body}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-8">
                <h3 className="font-semibold text-indigo-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-3">
                  {currentModule.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-3 text-indigo-800">
                      <CheckIcon /> {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={() => { if (activeModule > 0) { setActiveModule(activeModule - 1); setExpandedSection(0); } }}
                  disabled={activeModule === 0}
                  className="px-6 py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (activeModule < course.modules.length - 1) {
                      setActiveModule(activeModule + 1);
                      setExpandedSection(0);
                    } else {
                      setShowQuiz(true);
                    }
                  }}
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  {activeModule < course.modules.length - 1 ? "Next Module" : "Take Quiz"}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
