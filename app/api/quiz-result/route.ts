import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const quizId = searchParams.get("quizId");

    if (!userId) {
      return NextResponse.json({ error: "userId requis" }, { status: 400 });
    }

    const where: any = { userId };
    if (quizId) where.quizId = quizId;

    const results = await prisma.quizResult.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Erreur GET quiz-result:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, quizId, score, maxScore, answers, passed } = body;

    if (!userId || !quizId || score === undefined || !maxScore) {
      return NextResponse.json(
        { error: "userId, quizId, score et maxScore requis" },
        { status: 400 }
      );
    }

    const result = await prisma.quizResult.create({
      data: {
        userId,
        quizId,
        score,
        maxScore,
        answers: answers || {},
        passed: passed || false,
      },
    });

    if (passed) {
      try {
        await prisma.badge.upsert({
          where: { userId_type: { userId, type: "FIGMA_EXPERT" } },
          update: {},
          create: { userId, type: "FIGMA_EXPERT" },
        });
      } catch (e) {
        // Badge peut deja exister
      }
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Erreur POST quiz-result:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
