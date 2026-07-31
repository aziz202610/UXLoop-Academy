import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const courseId = searchParams.get("courseId");

    if (!userId || !courseId) {
      return NextResponse.json(
        { error: "userId et courseId requis" },
        { status: 400 }
      );
    }

    const progress = await prisma.progress.findMany({
      where: { userId, lesson: { module: { courseId } } },
      include: { lesson: true },
    });

    const completed = progress.filter((p: any) => p.completed);
    const totalLessons = await prisma.lesson.count({
      where: { module: { courseId } },
    });

    return NextResponse.json({
      progress,
      completedCount: completed.length,
      totalLessons,
      percent: totalLessons > 0 ? Math.round((completed.length / totalLessons) * 100) : 0,
    });
  } catch (error) {
    console.error("Erreur GET progress:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, lessonId, completed = true } = body;

    if (!userId || !lessonId) {
      return NextResponse.json(
        { error: "userId et lessonId requis" },
        { status: 400 }
      );
    }

    const existing = await prisma.progress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });

    const progress = await prisma.progress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      update: {
        completed,
        completedAt: completed ? new Date() : null,
      },
      create: {
        userId,
        lessonId,
        completed,
        completedAt: completed ? new Date() : null,
      },
    });

    return NextResponse.json({ success: true, progress });
  } catch (error) {
    console.error("Erreur POST progress:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
