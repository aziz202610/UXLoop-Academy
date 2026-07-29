import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { week: string } }
) {
  try {
    const weekNumber = parseInt(params.week, 10);

    const courseWeek = await prisma.courseWeek.findUnique({
      where: { week: weekNumber },
      include: {
        days: {
          orderBy: { dayOrder: "asc" },
          include: { sections: true },
        },
        weekQuiz: {
          include: { questions: true },
        },
        assignment: {
          include: { requirements: true },
        },
      },
    });

    if (!courseWeek) {
      return NextResponse.json({ error: "Semaine introuvable" }, { status: 404 });
    }

    const course = {
      week: courseWeek.week,
      title: courseWeek.title,
      subtitle: courseWeek.subtitle,
      duration: courseWeek.duration,
      outcomes: courseWeek.outcomes,
      modules: courseWeek.days.map((day) => ({
        id: day.dayId,
        moduleId: day.dayId,
        day: day.day,
        title: day.title,
        duration: day.duration,
        description: day.description,
        status: day.status,
        order: day.dayOrder,
        introduction: day.introduction,
        sections: day.sections.map((s) => ({ heading: s.heading, body: s.body })),
        keyTakeaways: day.keyTakeaways,
      })),
      quiz: courseWeek.weekQuiz
        ? {
            title: courseWeek.weekQuiz.title,
            description: courseWeek.weekQuiz.description,
            timeLimit: courseWeek.weekQuiz.timeLimit,
            passingScore: courseWeek.weekQuiz.passingScore,
            questions: courseWeek.weekQuiz.questions.map((q) => ({
              id: q.questionId,
              questionId: q.questionId,
              question: q.question,
              options: q.options,
              correctAnswer: q.correctAnswer,
              explanation: q.explanation,
            })),
          }
        : null,
      deliverable: courseWeek.assignment
        ? {
            title: courseWeek.assignment.title,
            description: courseWeek.assignment.description,
            instructions: courseWeek.assignment.instructions,
            format: courseWeek.assignment.format,
            deadline: courseWeek.assignment.deadline,
            requirements: courseWeek.assignment.requirements.map((r) => ({
              heading: r.heading,
              points: r.points,
            })),
            evaluationCriteria: courseWeek.assignment.evaluationCriteria,
          }
        : null,
    };

    return NextResponse.json(course);
  } catch (error) {
    console.error("Erreur récupération semaine:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
