import nodemailer from "nodemailer";

type ContactMailData = {
  name: string;
  email: string;
  message: string;
  iam: string;
  phone: string;
  company?: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER, // hello@manuvance.in
    pass: process.env.EMAIL_PASS, // Zoho App Password
  },
});

/**
 * Send contact form notification to admin (Zoho Mail)
 */
export async function sendContactMail(data: ContactMailData) {
  const { iam, name, email, phone, company, message } = data;

  await transporter.sendMail({
    from: `"Manuvance Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
    replyTo: email, // user email
    subject: "New Contact Form Submission",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>📩 New Contact Message</h2>
        <p><strong>IAM:</strong> ${iam}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f4f4f4;padding:10px;border-radius:6px;">
          ${message}
        </p>
        <hr />
        <small>This message was sent from Manuvance website contact form.</small>
      </div>
    `,
  });
}
