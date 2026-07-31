import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const lessonId = searchParams.get("lessonId");

    if (!userId || !lessonId) {
      return NextResponse.json(
        { error: "userId et lessonId requis" },
        { status: 400 }
      );
    }

    const submission = await prisma.deliverableSubmission.findFirst({
      where: { userId, lessonId },
      orderBy: { submittedAt: "desc" },
    });

    return NextResponse.json({ submission });
  } catch (error) {
    console.error("Erreur GET deliverable:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, lessonId, figmaUrl, pngUrls, gifUrl, notes } = body;

    if (!userId || !lessonId) {
      return NextResponse.json(
        { error: "userId et lessonId requis" },
        { status: 400 }
      );
    }

    const submission = await prisma.deliverableSubmission.create({
      data: {
        userId,
        lessonId,
        figmaUrl: figmaUrl || null,
        pngUrls: pngUrls || [],
        gifUrl: gifUrl || null,
        notes: notes || null,
        status: "submitted",
      },
    });

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error("Erreur POST deliverable:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
