import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(request, { params }) {
  return NextResponse.json();
}

export async function POST(request) {
  const { name, slug } = await request.json();
  try {
    const category = await prisma.category.create({
      data: {
        name,
        slug,
      },
    });
    return NextResponse.json({ data: category }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: error.status }
    );
  }
}
