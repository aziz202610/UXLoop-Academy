import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") || "demo-user";

    const course = await prisma.course.findUnique({
      where: { slug: "figma-avance" },
      include: {
        modules: {
          orderBy: { order: "asc" },
          include: {
            lessons: {
              orderBy: { order: "asc" },
            },
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json(
        { error: "Cours non trouve. Lancez d'abord le seed via POST /api/admin/seed-figma" },
        { status: 404 }
      );
    }

    const progress = await prisma.progress.findMany({
      where: {
        userId,
        lessonId: { in: course.modules.flatMap((m: any) => m.lessons.map((l: any) => l.id)) },
      },
    });

    const completedLessonIds = new Set(progress.filter((p: any) => p.completed).map((p: any) => p.lessonId));
    const totalLessons = course.modules.reduce((acc: number, m: any) => acc + m.lessons.length, 0);
    const percent = totalLessons > 0 ? Math.round((completedLessonIds.size / totalLessons) * 100) : 0;

    const quiz = await prisma.quiz.findFirst({
      where: { lesson: { module: { courseId: course.id } } },
    });

    const quizResult = quiz
      ? await prisma.quizResult.findFirst({
          where: { userId, quizId: quiz.id },
          orderBy: { createdAt: "desc" },
        })
      : null;

    return NextResponse.json({
      course: {
        id: course.id,
        title: course.title,
        description: course.description,
        modules: course.modules.map((m: any) => ({
          ...m,
          lessons: m.lessons.map((l: any) => ({
            ...l,
            completed: completedLessonIds.has(l.id),
          })),
        })),
        quiz,
      },
      progress: {
        completedLessonIds: Array.from(completedLessonIds),
        totalLessons,
        percent,
      },
      quizResult,
    });
  } catch (error) {
    console.error("Erreur GET course figma:", error);
    return NextResponse.json(
      { error: "Erreur serveur", details: (error as Error).message },
      { status: 500 }
    );
  }
}
