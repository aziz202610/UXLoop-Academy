import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const existing = await prisma.courseWeek.findUnique({ where: { week: 1 } });
    if (existing) {
      await prisma.courseWeek.delete({ where: { week: 1 } });
    }

    const courseWeek = await prisma.courseWeek.create({
      data: {
        week: 1,
        title: "FOUNDATIONS",
        subtitle: "Understand the Basics",
        duration: "5 days",
        outcomes: [
          "Clear understanding of UI/UX and design mindset",
          "Ability to distinguish UI, UX, and Product Design",
          "Knowledge of the Design Thinking process",
          "Mastery of core design principles (Color, Typography, Spacing, Alignment, Contrast)",
        ],
        days: {
          create: [
            {
              dayId: "w1-d1",
              day: 1,
              title: "The UX Challenge",
              duration: "45 min",
              description: "Understand why UX design matters and the real-world challenges designers face.",
              status: "available",
              dayOrder: 1,
              introduction: "Welcome to UX Loop Academy! Before we dive into tools and techniques, let's understand WHY UX design exists and what challenges you'll solve as a designer.",
              keyTakeaways: [
                "UX design solves real business problems through user-centered thinking.",
                "The biggest challenge is balancing user needs with business constraints.",
                "Empathy and iteration are your superpowers as a UX designer.",
              ],
              sections: {
                create: [
                  { heading: "Why UX Design Matters", body: "Every day, you interact with dozens of digital products — apps, websites, smart devices. Some feel effortless; others frustrate you. The difference? UX Design.\n\nUX (User Experience) design is the process of creating products that provide meaningful and relevant experiences to users.\n\nReal-world impact:\n- A 1-second delay in page load time can reduce conversions by 7% (Amazon).\n- 88% of online consumers are less likely to return to a site after a bad experience.\n- Good UX can increase conversion rates by up to 400%." },
                  { heading: "The 5 Core Challenges of UX Design", body: "As a UX designer, you'll constantly face these challenges:\n\n1. Understanding Diverse Users\n2. Balancing Business Goals & User Needs\n3. Solving Complex Problems Simply\n4. Keeping Up with Evolving Technology\n5. Measuring Intangible Experiences" },
                  { heading: "The UX Designer's Mindset", body: "Great UX designers share these traits: Empathy, Curiosity, Collaboration, Iteration, Advocacy." },
                ],
              },
            },
            {
              dayId: "w1-d2",
              day: 2,
              title: "What is UI/UX?",
              duration: "50 min",
              description: "Demystify the terms UI and UX with clear definitions, analogies, and real examples.",
              status: "locked",
              dayOrder: 2,
              introduction: "UI and UX are often used interchangeably, but they are distinct disciplines.",
              keyTakeaways: [
                "UX is the overall experience; UI is the visual and interactive layer.",
                "UI is a subset of UX, not a separate competing field.",
                "The best products master both UX (function) and UI (form).",
              ],
              sections: {
                create: [
                  { heading: "What is UX (User Experience)?", body: "UX encompasses all aspects of the end-user's interaction with the company, its services, and its products." },
                  { heading: "What is UI (User Interface)?", body: "UI design is the visual and interactive layer that users see and touch. It's a subset of UX." },
                  { heading: "The Relationship: UX vs UI", body: "UX without UI = functional but ugly. UI without UX = beautiful but frustrating." },
                  { heading: "Real-World Examples", body: "Apple = Good UX + Good UI. Craigslist = Good UX + Poor UI. Many startup pages = Poor UX + Good UI." },
                ],
              },
            },
            {
              dayId: "w1-d3",
              day: 3,
              title: "UI vs UX vs Product Design",
              duration: "55 min",
              description: "Understand the distinctions and overlaps between UI Design, UX Design, and Product Design.",
              status: "locked",
              dayOrder: 3,
              introduction: "In job postings, you'll see three titles: UI Designer, UX Designer, and Product Designer.",
              keyTakeaways: [
                "UX Designers focus on research, flows, and problem-solving.",
                "UI Designers focus on visuals, systems, and polish.",
                "Product Designers do both + business strategy.",
                "The industry is trending toward Product Design as the standard title.",
              ],
              sections: {
                create: [
                  { heading: "UX Designer", body: "Focus: The entire user journey and problem-solving process. Tools: Figma, Miro, UserTesting." },
                  { heading: "UI Designer", body: "Focus: The visual and interactive aspects of the product. Tools: Figma, Sketch, Adobe XD." },
                  { heading: "Product Designer", body: "Focus: The intersection of UX, UI, and business strategy." },
                  { heading: "The Venn Diagram", body: "Business Strategy, UX Design, and UI Design overlap in Product Design." },
                ],
              },
            },
            {
              dayId: "w1-d4",
              day: 4,
              title: "Design Thinking Process",
              duration: "60 min",
              description: "Master the 5-phase Design Thinking framework.",
              status: "locked",
              dayOrder: 4,
              introduction: "Design Thinking is a battle-tested framework used by IDEO, Apple, Google, and IBM.",
              keyTakeaways: [
                "Design Thinking is a 5-phase loop: Empathize → Define → Ideate → Prototype → Test.",
                "Always start with empathy.",
                "Prototypes should be quick and cheap.",
                "Testing reveals truth.",
              ],
              sections: {
                create: [
                  { heading: "What is Design Thinking?", body: "A human-centered approach to innovation — Tim Brown, IDEO." },
                  { heading: "Phase 1: Empathize", body: "Understand your users deeply through interviews, empathy maps, and personas." },
                  { heading: "Phase 2: Define", body: "Synthesize research into a clear problem statement using POV and How Might We." },
                  { heading: "Phase 3: Ideate", body: "Generate creative solutions through brainstorming, Crazy 8s, mind mapping." },
                  { heading: "Phase 4: Prototype", body: "Build quick representations: paper prototypes, wireframes, mockups." },
                  { heading: "Phase 5: Test", body: "Validate prototypes with usability testing, A/B testing." },
                ],
              },
            },
            {
              dayId: "w1-d5",
              day: 5,
              title: "Core Design Principles",
              duration: "70 min",
              description: "Master the fundamental visual principles.",
              status: "locked",
              dayOrder: 5,
              introduction: "Great UX starts with great visual foundations.",
              keyTakeaways: [
                "Color communicates emotion and brand.",
                "Typography is the backbone of interface design.",
                "Spacing is an active design tool.",
                "Alignment creates visual order.",
                "Contrast builds hierarchy and ensures accessibility.",
              ],
              sections: {
                create: [
                  { heading: "1. Color", body: "60-30-10 rule: 60% dominant, 30% secondary, 10% accent." },
                  { heading: "2. Typography", body: "Use a harmonious type scale and readable line lengths (45-75 characters)." },
                  { heading: "3. Spacing", body: "Use the 8-point grid system (8, 16, 24, 32, 40...)." },
                  { heading: "4. Alignment", body: "Left-align body text; use a 12-column grid." },
                  { heading: "5. Contrast", body: "WCAG AA requires minimum 4.5:1 contrast ratio for normal text." },
                ],
              },
            },
          ],
        },
        weekQuiz: {
          create: {
            title: "Week 1 — Foundations Quiz",
            description: "Test your understanding of UX basics, design roles, Design Thinking, and core principles.",
            timeLimit: "15 minutes",
            passingScore: 80,
            questions: {
              create: [
                { questionId: "q1", question: "What is the PRIMARY difference between UX and UI design?", options: ["UX is about coding, UI is about graphics", "UX focuses on the overall user experience and problem-solving; UI focuses on the visual and interactive layer", "UX is cheaper than UI", "UI is more important than UX"], correctAnswer: 1, explanation: "UX encompasses the entire experience. UI is the visual surface." },
                { questionId: "q2", question: "Which role includes BOTH UX and UI PLUS business strategy?", options: ["Graphic Designer", "UX Researcher", "Product Designer", "Frontend Developer"], correctAnswer: 2, explanation: "Product Designers are full-stack designers." },
                { questionId: "q3", question: "What is the goal of the 'Empathize' phase?", options: ["To create mockups", "To understand users' needs deeply", "To write code", "To launch the product"], correctAnswer: 1, explanation: "Empathize is about understanding users before defining solutions." },
                { questionId: "q4", question: "What does 'How Might We' help you do?", options: ["Write code faster", "Turn problems into opportunities", "Choose colors", "Measure loading speed"], correctAnswer: 1, explanation: "HMW reframes problems as opportunities." },
                { questionId: "q5", question: "In the 60-30-10 rule, what % is your ACCENT color?", options: ["60%", "30%", "10%", "50%"], correctAnswer: 2, explanation: "10% accent creates emphasis." },
                { questionId: "q6", question: "Minimum contrast ratio for normal text (WCAG AA)?", options: ["2:1", "3:1", "4.5:1", "10:1"], correctAnswer: 2, explanation: "WCAG AA requires 4.5:1." },
                { questionId: "q7", question: "Which spacing system do designers use?", options: ["5-point grid", "8-point grid", "12-point grid", "Random spacing"], correctAnswer: 1, explanation: "The 8-point grid is the standard." },
                { questionId: "q8", question: "What is the purpose of white space?", options: ["Save ink", "Guide attention and hierarchy", "Load faster", "Laziness"], correctAnswer: 1, explanation: "White space is an active design tool." },
                { questionId: "q9", question: "How many users reveal 85% of usability issues?", options: ["1", "5", "50", "100"], correctAnswer: 1, explanation: "Nielsen Norman Group research." },
                { questionId: "q10", question: "Best alignment for body text?", options: ["Center", "Right", "Left", "Justified"], correctAnswer: 2, explanation: "Left-aligned is easiest to read." },
              ],
            },
          },
        },
        assignment: {
          create: {
            title: "App Analysis Assignment",
            description: "Apply what you have learned by analyzing a real app.",
            instructions: "Choose an app you use frequently. Write a short analysis (250-300 words).",
            format: "Submit as a PDF or Google Doc with screenshots.",
            deadline: "End of Week 1",
            evaluationCriteria: [
              "Demonstrates understanding of UX vs UI distinctions",
              "Uses correct design terminology",
              "Provides specific, observed examples",
              "Shows critical thinking",
            ],
            requirements: {
              create: [
                { heading: "UX Analysis", points: ["What problem does this app solve?", "Describe the user journey.", "Identify 2 UX strengths.", "Identify 1 UX weakness."] },
                { heading: "UI Analysis", points: ["Describe the visual style.", "How does the app use color?", "Evaluate the typography.", "Comment on icons and buttons."] },
                { heading: "Design Principles", points: ["Does it follow 60-30-10?", "Is there a clear type scale?", "Does it use the 8-point grid?", "Are elements aligned?", "Is contrast sufficient?"] },
              ],
            },
          },
        },
      },
    });

    return NextResponse.json({ success: true, title: courseWeek.title });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
