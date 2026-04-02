import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma";

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const deckId = context.params.id; // ✅ use as string

  if (!deckId || typeof deckId !== "string") {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.deck.delete({
      where: { id: deckId },
    });

    return NextResponse.json({ message: "Deck deleted successfully" });
  } catch (error) {
    console.error("Error deleting deck:", error);
    return NextResponse.json(
      { error: "Failed to delete deck" },
      { status: 500 }
    );
  }
}
