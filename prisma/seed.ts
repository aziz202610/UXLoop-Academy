// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Week 1: FOUNDATIONS...');

  // Supprimer les données existantes de la semaine 1 (idempotence)
  const existing = await prisma.course.findUnique({
    where: { week: 1 },
  });
  if (existing) {
    await prisma.course.delete({ where: { week: 1 } });
  }

  const course = await prisma.course.create({
    data: {
      week: 1,
      title: 'FOUNDATIONS',
      subtitle: 'Understand the Basics',
      duration: '5 days',
      outcomes: [
        'Clear understanding of UI/UX and design mindset',
        'Ability to distinguish UI, UX, and Product Design',
        'Knowledge of the Design Thinking process',
        'Mastery of core design principles (Color, Typography, Spacing, Alignment, Contrast)',
      ],
      modules: {
        create: [
          {
            moduleId: 'w1-d1',
            day: 1,
            title: 'The UX Challenge',
            duration: '45 min',
            description: 'Understand why UX design matters and the real-world challenges designers face.',
            status: 'available',
            order: 1,
            introduction: "Welcome to UX Loop Academy! Before we dive into tools and techniques, let's understand WHY UX design exists and what challenges you'll solve as a designer.",
            keyTakeaways: [
              'UX design solves real business problems through user-centered thinking.',
              'The biggest challenge is balancing user needs with business constraints.',
              'Empathy and iteration are your superpowers as a UX designer.',
            ],
            sections: {
              create: [
                {
                  heading: 'Why UX Design Matters',
                  body: `Every day, you interact with dozens of digital products — apps, websites, smart devices. Some feel effortless; others frustrate you. The difference? UX Design.

UX (User Experience) design is the process of creating products that provide meaningful and relevant experiences to users. It involves the entire process of acquiring and integrating the product, including branding, design, usability, and function.

**Real-world impact:**
- A 1-second delay in page load time can reduce conversions by 7% (Amazon).
- 88% of online consumers are less likely to return to a site after a bad experience.
- Good UX can increase conversion rates by up to 400%.`,
                },
                {
                  heading: 'The 5 Core Challenges of UX Design',
                  body: `As a UX designer, you'll constantly face these challenges:

**1. Understanding Diverse Users**
Users come from different backgrounds, cultures, abilities, and tech-savviness levels. Designing for 'everyone' is impossible — designing inclusively is essential.

**2. Balancing Business Goals & User Needs**
Your client wants more sign-ups; users hate pop-ups. Your job is to find the intersection where business success meets user satisfaction.

**3. Solving Complex Problems Simply**
The best UX makes complex systems feel simple. Think of how Uber hides the complexity of logistics behind a single 'Request Ride' button.

**4. Keeping Up with Evolving Technology**
From desktop to mobile to voice interfaces to AI — the canvas keeps changing. UX designers must adapt continuously.

**5. Measuring Intangible Experiences**
How do you measure 'delight' or 'frustration'? You'll learn to use metrics like task success rate, time-on-task, NPS, and user satisfaction scores.`,
                },
                {
                  heading: "The UX Designer's Mindset",
                  body: `Great UX designers share these traits:

- **Empathy**: You design for humans, not for yourself.
- **Curiosity**: You constantly ask 'Why?' and 'What if?'
- **Collaboration**: UX is a team sport involving developers, product managers, stakeholders, and users.
- **Iteration**: Your first idea is rarely the best. You test, learn, and improve.
- **Advocacy**: You are the voice of the user in business meetings.`,
                },
              ],
            },
          },
          {
            moduleId: 'w1-d2',
            day: 2,
            title: 'What is UI/UX?',
            duration: '50 min',
            description: 'Demystify the terms UI and UX with clear definitions, analogies, and real examples.',
            status: 'locked',
            order: 2,
            introduction: "UI and UX are often used interchangeably, but they are distinct disciplines. Let's clarify once and for all.",
            keyTakeaways: [
              'UX is the overall experience; UI is the visual and interactive layer.',
              'UI is a subset of UX, not a separate competing field.',
              'The best products master both UX (function) and UI (form).',
            ],
            sections: {
              create: [
                {
                  heading: 'What is UX (User Experience)?',
                  body: `User Experience encompasses all aspects of the end-user's interaction with the company, its services, and its products.

**Don Norman, who coined the term, defines it as:**
'User experience' encompasses all aspects of the end-user's interaction with the company, its services, and its products.

**The UX Iceberg:**
Like an iceberg, what users see (the interface) is just the tip. Below the surface lies:
- User Research
- Information Architecture
- Interaction Design
- Usability Testing
- Content Strategy
- Accessibility

**Analogy**: UX is like the engine, transmission, and suspension of a car. You don't see them, but they determine how the car drives.`,
                },
                {
                  heading: 'What is UI (User Interface)?',
                  body: `User Interface design is the visual and interactive layer that users see and touch. It's a subset of UX.

UI design focuses on:
- **Visual Design**: Colors, typography, imagery, icons
- **Layout**: How elements are arranged on screen
- **Interactivity**: Buttons, animations, transitions, micro-interactions
- **Brand Consistency**: Ensuring the visual language matches the brand

**Analogy**: UI is the car's dashboard, steering wheel, and paint job. It's what you see and touch, but it works because of the engine (UX) beneath.`,
                },
                {
                  heading: 'The Relationship: UX vs UI',
                  body: `**UX without UI** = A great product that looks terrible (functional but ugly).
**UI without UX** = A beautiful product that's impossible to use (aesthetic but frustrating).

**Example — Restaurant Analogy:**
- **UX**: The restaurant's location, parking, reservation system, wait time, food quality, service speed, payment process.
- **UI**: The menu design, plate presentation, interior decor, lighting, staff uniforms.

Both matter. A restaurant with amazing decor but terrible service will fail. A restaurant with amazing food but no ambiance won't attract customers.`,
                },
                {
                  heading: 'Real-World Examples',
                  body: `**Good UX + Good UI = Apple**
Seamless experience from unboxing to daily use, with beautiful, consistent interfaces.

**Good UX + Poor UI = Craigslist**
Incredibly functional and efficient for its users, but visually stuck in 1995. It works because the UX (finding what you need quickly) is excellent.

**Poor UX + Good UI = Many startup landing pages**
Beautiful animations and gradients, but you can't figure out what the product actually does or how to sign up.`,
                },
              ],
            },
          },
          {
            moduleId: 'w1-d3',
            day: 3,
            title: 'UI vs UX vs Product Design',
            duration: '55 min',
            description: 'Understand the distinctions and overlaps between UI Design, UX Design, and Product Design.',
            status: 'locked',
            order: 3,
            introduction: "In job postings, you'll see three titles: UI Designer, UX Designer, and Product Designer. Let's understand what each actually does.",
            keyTakeaways: [
              'UX Designers focus on research, flows, and problem-solving.',
              'UI Designers focus on visuals, systems, and polish.',
              'Product Designers do both + business strategy.',
              'The industry is trending toward Product Design as the standard title.',
            ],
            sections: {
              create: [
                {
                  heading: 'UX Designer (User Experience Designer)',
                  body: `**Focus**: The entire user journey and problem-solving process.

**Key Responsibilities:**
- User research and interviews
- Creating user personas and journey maps
- Information architecture and wireframing
- Usability testing and iteration
- Collaborating with stakeholders to define requirements

**Tools**: Figma, Miro, UserTesting, Hotjar, Maze

**Deliverables**: Research reports, user flows, wireframes, prototypes, test results

**Mindset**: 'Does this solve the user's problem effectively?'`,
                },
                {
                  heading: 'UI Designer (User Interface Designer)',
                  body: `**Focus**: The visual and interactive aspects of the product.

**Key Responsibilities:**
- Designing high-fidelity mockups
- Creating and maintaining design systems
- Ensuring visual consistency across platforms
- Micro-interactions and animation
- Handoff to developers with detailed specs

**Tools**: Figma, Sketch, Adobe XD, Principle, After Effects

**Deliverables**: Mockups, style guides, component libraries, design specs

**Mindset**: 'Does this look beautiful, on-brand, and feel responsive?'`,
                },
                {
                  heading: 'Product Designer',
                  body: `**Focus**: The intersection of UX, UI, and business strategy.

Product Designers are the 'full-stack' designers of the digital world. They own the entire design process from discovery to delivery AND consider business impact.

**Key Responsibilities:**
- Everything a UX Designer does
- Everything a UI Designer does
- PLUS: Business strategy, metrics, and cross-functional leadership
- Defining product roadmap with PMs
- A/B testing and data analysis
- Ensuring design decisions drive business outcomes

**Tools**: All of the above + analytics tools (Mixpanel, Amplitude), project management tools

**Mindset**: 'Does this solve user problems AND drive business value?'`,
                },
                {
                  heading: 'The Venn Diagram',
                  body: `Imagine three overlapping circles:

- **Business Strategy** sits at the top
- **Product Design** is the intersection of all three
- **UX Design** focuses on user research, flows, and problem-solving
- **UI Design** focuses on visuals, systems, and polish

**In startups**: You'll likely be a Product Designer (wearing all hats).
**In enterprises**: Roles are more specialized (dedicated UX Researcher, UI Designer, etc.).

**Salary Context (2025-2026):**
- Junior UX/UI: $60k–$80k
- Mid-level Product Designer: $90k–$130k
- Senior Product Designer: $130k–$180k+
(Varies by location and company size)`,
                },
              ],
            },
          },
          {
            moduleId: 'w1-d4',
            day: 4,
            title: 'Design Thinking Process',
            duration: '60 min',
            description: 'Master the 5-phase Design Thinking framework and learn when to apply each method.',
            status: 'locked',
            order: 4,
            introduction: "Design Thinking is not just a buzzword — it's a battle-tested framework used by IDEO, Apple, Google, and IBM to solve complex problems creatively. Let's break it down.",
            keyTakeaways: [
              'Design Thinking is a 5-phase loop: Empathize → Define → Ideate → Prototype → Test.',
              'Always start with empathy — understand users before designing solutions.',
              'Prototypes should be quick and cheap; perfection is the enemy of learning.',
              'Testing reveals truth — assumptions are dangerous.',
            ],
            sections: {
              create: [
                {
                  heading: 'What is Design Thinking?',
                  body: `Design Thinking is a human-centered approach to innovation that draws from the designer's toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success.

— **Tim Brown, IDEO**

**Core Principles:**
1. **Human-centered**: Start with people, not technology
2. **Collaborative**: Diverse teams generate better ideas
3. **Optimistic**: Every problem has a solution
4. **Experimental**: Prototype early, fail fast, learn faster
5. **Iterative**: It's never 'done' — keep improving`,
                },
                {
                  heading: 'Phase 1: Empathize',
                  body: `**Goal**: Understand your users deeply — their needs, pain points, behaviors, and motivations.

**Methods:**
- **User Interviews**: 1-on-1 conversations (5-8 users minimum)
- **Contextual Inquiry**: Observe users in their natural environment
- **Empathy Maps**: Capture what users Say, Think, Do, and Feel
- **User Personas**: Fictional characters representing user types

**Key Question**: 'What are users really trying to achieve, and what's stopping them?'

**Tip**: Don't ask 'Would you use this?' (hypothetical). Ask 'Tell me about the last time you...' (behavioral).`,
                },
                {
                  heading: 'Phase 2: Define',
                  body: `**Goal**: Synthesize research into a clear, actionable problem statement.

**Methods:**
- **Point of View (POV) Statement**:
  Format: '[User] needs [need] because [insight]'
  Example: 'A busy parent needs to order groceries in under 5 minutes because they have limited time between work and childcare.'

- **How Might We (HMW) Questions**:
  Transform problems into opportunities.
  Example: 'How might we make grocery ordering possible in under 5 minutes?'

- **Problem Prioritization Matrix**:
  Map problems by user impact vs. feasibility.

**Key Question**: 'What is the MOST important problem to solve right now?'`,
                },
                {
                  heading: 'Phase 3: Ideate',
                  body: `**Goal**: Generate a wide range of creative solutions without judgment.

**Methods:**
- **Brainstorming**: Classic group idea generation (aim for quantity over quality)
- **Crazy 8s**: Sketch 8 ideas in 8 minutes — forces rapid ideation
- **Mind Mapping**: Start with a central concept and branch out freely
- **SCAMPER**: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse
- **Worst Possible Idea**: Intentionally design the worst solution — then invert it

**Rules for Ideation:**
1. Defer judgment — no idea is stupid
2. Encourage wild ideas
3. Build on others' ideas ('Yes, and...')
4. Stay focused on the topic
5. One conversation at a time
6. Be visual — sketch, don't just talk

**Key Question**: 'How many different ways could we solve this?'`,
                },
                {
                  heading: 'Phase 4: Prototype',
                  body: `**Goal**: Build quick, cheap representations of your ideas to test with users.

**Types of Prototypes:**
- **Paper Prototypes**: Hand-drawn sketches (cost: $0, time: 5 min)
- **Low-Fi Wireframes**: Basic grayscale layouts in Figma
- **High-Fi Mockups**: Detailed, colored designs
- **Interactive Prototypes**: Clickable prototypes that simulate real usage

**Prototyping Principles:**
- Start low-fidelity — don't fall in love with pixels early
- Prototype only what you need to test
- Use realistic content, not 'lorem ipsum'
- Build to learn, not to impress

**Key Question**: 'What is the fastest way to test this idea?'`,
                },
                {
                  heading: 'Phase 5: Test',
                  body: `**Goal**: Validate your prototypes with real users and gather feedback.

**Testing Methods:**
- **Usability Testing**: Watch users complete tasks with your prototype
- **A/B Testing**: Compare two versions to see which performs better
- **Guerrilla Testing**: Quick tests in public spaces (cafes, parks)
- **Remote Testing**: Tools like Maze or UserTesting for unmoderated tests

**The Testing Mindset:**
- You're testing the DESIGN, not the USER
- If users struggle, the design is flawed — not the user
- 5 users will reveal 85% of usability issues (Nielsen Norman Group)

**After Testing:**
Iterate! Go back to any previous phase based on what you learned. Design Thinking is a loop, not a line.

**Key Question**: 'Does this actually work for real people?'`,
                },
              ],
            },
          },
          {
            moduleId: 'w1-d5',
            day: 5,
            title: 'Core Design Principles',
            duration: '70 min',
            description: 'Master the fundamental visual principles that make interfaces intuitive and beautiful.',
            status: 'locked',
            order: 5,
            introduction: "Great UX starts with great visual foundations. These five principles — Color, Typography, Spacing, Alignment, and Contrast — are the building blocks of every interface you'll ever design.",
            keyTakeaways: [
              'Color communicates emotion and brand — use it intentionally.',
              'Typography is the backbone of interface design — master the scale and readability.',
              'Spacing (white space) is an active design tool, not emptiness.',
              'Alignment creates visual order — always design on a grid.',
              'Contrast builds hierarchy and ensures accessibility — check your ratios.',
            ],
            sections: {
              create: [
                {
                  heading: '1. Color',
                  body: `Color is not just decoration — it's communication.

**The Psychology of Color:**
- **Blue**: Trust, stability, professionalism (Facebook, LinkedIn, PayPal)
- **Red**: Urgency, passion, danger (YouTube, Netflix, error states)
- **Green**: Growth, success, nature (Spotify, WhatsApp, confirmation states)
- **Yellow**: Optimism, caution, energy (Snapchat, McDonald's)
- **Black**: Luxury, sophistication, power (Apple, Nike)

**Color Systems:**
- **Primary**: Your brand's main color (used for CTAs, key actions)
- **Secondary**: Complementary color for variety
- **Neutrals**: Grays for text, borders, backgrounds
- **Semantic**: Red (error), Green (success), Yellow (warning), Blue (info)

**Accessibility Rule**: Never rely on color alone to convey information. Always pair with icons or text.

**Tool**: Use coolors.co or Adobe Color to generate accessible palettes.

**The 60-30-10 Rule**: 60% dominant color, 30% secondary, 10% accent. This creates visual harmony.`,
                },
                {
                  heading: '2. Typography',
                  body: `Typography is 90% of web design. If your type is wrong, nothing else matters.

**Type Categories:**
- **Serif**: Traditional, trustworthy, editorial (Times New Roman, Georgia)
- **Sans-Serif**: Modern, clean, digital-friendly (Inter, Roboto, Helvetica)
- **Display/Decorative**: Use sparingly for headlines only

**The Type Scale:**
A harmonious scale ensures consistency. Common ratio: 1.25 (Major Third) or 1.414 (Augmented Fourth).

Example scale (base 16px):
- H1: 48px / Bold
- H2: 36px / SemiBold
- H3: 28px / Medium
- Body: 16px / Regular
- Caption: 14px / Regular
- Small: 12px / Medium

**Readability Rules:**
- Line length: 45–75 characters per line (ideal: 66)
- Line height: 1.5× for body text, 1.2× for headlines
- Paragraph spacing: 1× the line height
- Avoid ALL CAPS for long text (harder to read)

**Font Pairing**: Use max 2 fonts — one for headlines, one for body.`,
                },
                {
                  heading: '3. Spacing (White Space)',
                  body: `White space is not empty space — it's active design. It guides attention, improves comprehension, and creates elegance.

**The 8-Point Grid System:**
Designers use multiples of 8 for all spacing (8, 16, 24, 32, 40, 48, 64...). Why?
- Scalable across devices
- Creates visual rhythm
- Easy for developers to implement

**Types of Spacing:**
- **Macro**: Space between major sections (64px–128px)
- **Micro**: Space between related elements (8px–24px)
- **Padding**: Internal space inside a component
- **Margin**: External space around a component

**Law of Proximity**: Elements close together are perceived as related. Use spacing to create visual groups.

**Example**:
\`\`\`
[Button with 16px padding]    24px gap    [Another button]
\`\`\`
Not: random 13px or 17px values.`,
                },
                {
                  heading: '4. Alignment',
                  body: `Alignment creates order, reduces cognitive load, and makes designs feel intentional.

**Types of Alignment:**
- **Left-aligned**: Best for readability (Western languages)
- **Center-aligned**: Good for short headlines, NOT long text
- **Right-aligned**: Rarely used for text; good for numbers in tables
- **Justified**: Avoid on web — creates 'rivers' of white space

**Alignment Principles:**
- **Edge Alignment**: Align elements to a common edge (left, right, or center)
- **Center Alignment**: Use for symmetrical, balanced compositions
- **Baseline Alignment**: Text elements should share a common baseline

**The Power of the Grid:**
Use a 12-column grid for web design. It provides structure while allowing flexibility.

**Common Mistake**: Center-aligning everything. It looks messy and is hard to read. Left-align body text always.`,
                },
                {
                  heading: '5. Contrast',
                  body: `Contrast creates hierarchy, draws attention, and ensures accessibility.

**Types of Contrast:**
- **Size**: Big vs. small elements (headlines vs. body text)
- **Color**: Light vs. dark, complementary colors
- **Weight**: Bold vs. regular text
- **Shape**: Rounded vs. angular, organic vs. geometric
- **Texture**: Smooth vs. rough (subtle in digital design)

**Accessibility — Contrast Ratios (WCAG):**
- **Normal text**: Minimum 4.5:1 (AA), Preferred 7:1 (AAA)
- **Large text** (18px+ bold or 24px+): Minimum 3:1 (AA)

**Tool**: Use WebAIM Contrast Checker or Stark plugin for Figma.

**Hierarchy with Contrast:**
The most important element should have the HIGHEST contrast. Users should instantly know where to look first.

**Example**:
\`\`\`
[Hero headline — 48px, bold, dark]  <- High contrast = First read
[Subheadline — 20px, regular, gray]  <- Medium contrast = Second read
[CTA Button — High contrast color]   <- High contrast = Action
[Body text — 16px, regular, gray]    <- Low contrast = Detail
\`\`\``,
                },
              ],
            },
          },
        ],
      },
      quiz: {
        create: {
          title: 'Week 1 — Foundations Quiz',
          description: 'Test your understanding of UX basics, design roles, Design Thinking, and core principles.',
          timeLimit: '15 minutes',
          passingScore: 80,
          questions: {
            create: [
              {
                questionId: 'q1',
                question: 'What is the PRIMARY difference between UX and UI design?',
                options: [
                  'UX is about coding, UI is about graphics',
                  'UX focuses on the overall user experience and problem-solving; UI focuses on the visual and interactive layer',
                  'UX is cheaper than UI',
                  'UI is more important than UX',
                ],
                correctAnswer: 1,
                explanation: 'UX encompasses the entire experience including research, architecture, and testing. UI is specifically the visual and interactive surface that users see and touch.',
              },
              {
                questionId: 'q2',
                question: 'Which role typically includes BOTH UX and UI responsibilities PLUS business strategy?',
                options: [
                  'Graphic Designer',
                  'UX Researcher',
                  'Product Designer',
                  'Frontend Developer',
                ],
                correctAnswer: 2,
                explanation: "Product Designers are 'full-stack' designers who handle research, visual design, and business strategy, often leading cross-functional teams.",
              },
              {
                questionId: 'q3',
                question: "In the Design Thinking process, what is the goal of the 'Empathize' phase?",
                options: [
                  'To create high-fidelity mockups',
                  "To understand users' needs, pain points, and behaviors deeply",
                  'To write code for the prototype',
                  'To launch the product to market',
                ],
                correctAnswer: 1,
                explanation: 'Empathize is about understanding your users through interviews, observation, and research before defining any solutions.',
              },
              {
                questionId: 'q4',
                question: "What does the 'How Might We' (HMW) technique help you do?",
                options: [
                  'Write code faster',
                  'Turn problems into opportunities for ideation',
                  'Choose color palettes',
                  'Measure website loading speed',
                ],
                correctAnswer: 1,
                explanation: 'HMW questions reframe problems as opportunities, making them perfect springboards for the Ideation phase.',
              },
              {
                questionId: 'q5',
                question: 'According to the 60-30-10 color rule, what percentage should be your ACCENT color?',
                options: ['60%', '30%', '10%', '50%'],
                correctAnswer: 2,
                explanation: '60% dominant color, 30% secondary color, 10% accent color. This creates visual harmony while allowing emphasis where needed.',
              },
              {
                questionId: 'q6',
                question: 'What is the recommended minimum contrast ratio for normal text (WCAG AA standard)?',
                options: ['2:1', '3:1', '4.5:1', '10:1'],
                correctAnswer: 2,
                explanation: 'WCAG AA requires a minimum contrast ratio of 4.5:1 for normal text to ensure readability for users with visual impairments.',
              },
              {
                questionId: 'q7',
                question: 'Which spacing system do most professional designers use?',
                options: [
                  '5-point grid',
                  '8-point grid',
                  '12-point grid',
                  'Random spacing',
                ],
                correctAnswer: 1,
                explanation: "The 8-point grid (multiples of 8: 8, 16, 24, 32...) is the industry standard because it's scalable and easy for developers to implement.",
              },
              {
                questionId: 'q8',
                question: 'What is the PRIMARY purpose of white space (negative space) in design?',
                options: [
                  'To save ink or reduce file size',
                  'To guide attention, improve comprehension, and create visual hierarchy',
                  'To make designs load faster',
                  'Because designers are lazy',
                ],
                correctAnswer: 1,
                explanation: 'White space is an active design tool that creates focus, improves readability, and gives interfaces a clean, professional feel.',
              },
              {
                questionId: 'q9',
                question: 'In Design Thinking, how many users are typically needed to reveal 85% of usability issues?',
                options: ['1 user', '5 users', '50 users', '100 users'],
                correctAnswer: 1,
                explanation: 'Research by Nielsen Norman Group shows that testing with just 5 users reveals approximately 85% of usability problems.',
              },
              {
                questionId: 'q10',
                question: 'Which alignment is BEST for body text readability in Western languages?',
                options: [
                  'Center-aligned',
                  'Right-aligned',
                  'Left-aligned',
                  'Justified',
                ],
                correctAnswer: 2,
                explanation: "Left-aligned text creates a consistent starting point for the eye, making it easier to read. Center-aligned text should be reserved for short headlines only.",
              },
            ],
          },
        },
      },
      deliverable: {
        create: {
          title: 'App Analysis Assignment',
          description: 'Apply what you have learned by analyzing a real app.',
          instructions: 'Choose an app you use frequently (e.g., Instagram, Spotify, Uber, WhatsApp, or your banking app). Write a short analysis (½ page, approximately 250-300 words) addressing the following points:',
          format: 'Submit as a PDF or Google Doc with screenshots of the app to support your analysis.',
          deadline: 'End of Week 1',
          evaluationCriteria: [
            'Demonstrates understanding of UX vs UI distinctions',
            'Uses correct design terminology (color, typography, spacing, alignment, contrast)',
            'Provides specific, observed examples rather than generic opinions',
            'Shows critical thinking — not just praise, but constructive critique',
          ],
          requirements: {
            create: [
              {
                heading: 'UX Analysis',
                points: [
                  'What problem does this app solve for you?',
                  'Describe the user journey from opening the app to completing your main task. What flows work well? What feels confusing or frustrating?',
                  'Identify at least 2 UX strengths (e.g., fast onboarding, clear navigation, smart defaults).',
                  'Identify at least 1 UX weakness (e.g., too many steps, unclear error messages, hidden features).',
                ],
              },
              {
                heading: 'UI Analysis',
                points: [
                  'Describe the visual style (modern, playful, corporate, minimalist?).',
                  'How does the app use color? Is the palette consistent? What emotions does it evoke?',
                  'Evaluate the typography: Is it readable? Is there a clear hierarchy between headlines and body text?',
                  'Comment on the use of icons, buttons, and imagery. Are they consistent and intuitive?',
                ],
              },
              {
                heading: 'Design Principles',
                points: [
                  'Color: Does the app follow the 60-30-10 rule? Are semantic colors used correctly (green for success, red for errors)?',
                  'Typography: Is there a clear type scale? Is body text left-aligned and readable?',
                  'Spacing: Does the interface feel cramped or breathable? Can you identify the 8-point grid?',
                  'Alignment: Are elements aligned to a clear grid? Is the layout consistent across screens?',
                  'Contrast: Is there sufficient contrast between text and background? Can you easily identify the most important elements on each screen?',
                ],
              },
            ],
          },
        },
      },
    },
  });

  console.log('✅ Week 1 seeded successfully!');
  console.log(`📊 Created course: ${course.title}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
