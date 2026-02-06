import { pool } from "@/lib/db";
import { sendContactMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { iam, name, email, phone, company, subject, message } =
      await req.json();

    if (!iam || !name || !email || !message || !subject || !phone) {
      return new Response(JSON.stringify({ error: "Invalid data" }), {
        status: 400,
      });
    }

    // 1️⃣ Save to Neon DB
    await pool.query(
      `INSERT INTO contacts 
        (iam, name, email, phone, company, subject, message) 
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [iam, name, email, phone, company, subject, message],
    );

    // 2️⃣ Send email notification (Zoho)
    await sendContactMail({
      iam,
      name,
      email,
      phone,
      company,
      message,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
