// app/api/ratings/route.ts
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function POST(req: Request) {
  const { name, company, comment, rating } = await req.json();

  const parsedRating = Number(rating);

  if (!name || !comment || !company || Number.isNaN(parsedRating)) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  await pool.query(
    `INSERT INTO ratings (name, company, message, rating) VALUES ($1, $2, $3, $4)`,
    [name, company, comment, rating],
  );

  return NextResponse.json({ success: true });
}
