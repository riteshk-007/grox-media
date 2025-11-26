import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ALLOWED_ORIGINS = [
  "https://groxmedia.in",
  "https://www.groxmedia.in",
  "http://localhost:3000",
];

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

// 🌟 ADMIN TEMPLATE
function buildAdminTemplate({
  name,
  email,
  mobileNumber,
  message,
  age,
}: {
  name: string;
  email: string;
  mobileNumber: string;
  message: string;
  age?: string;
}) {
  return `
  <html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { background:#f4f4f4; font-family:'Segoe UI',Arial,sans-serif; margin:0; padding:0; }
      .container { max-width:600px; margin:20px auto; background:#ffffff; border:1px solid #eee; }
      .header { background:#002D91; color:#ffffff; text-align:center; padding:20px; }
      .header h2 { margin:0; font-size:22px; }
      .content { padding:30px; color:#333333; line-height:1.6; }
      .field { margin-bottom:15px; border-bottom:1px solid #f0f0f0; padding-bottom:10px; }
      .field:last-child { border-bottom:none; }
      .label { font-weight:700; color:#002D91; font-size:14px; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:5px; }
      .value { background:#f9f9f9; padding:10px; border-left:4px solid #FE6A00; color:#333; }
      .footer { background:#f8f9fa; padding:15px; font-size:12px; color:#777; text-align:center; border-top:1px solid #eee; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>📩 New Contact Form Submission</h2>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Name</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Email</div>
          <div class="value">${email}</div>
        </div>
        <div class="field">
          <div class="label">Mobile</div>
          <div class="value">${mobileNumber}</div>
        </div>
        ${age ? `<div class="field"><div class="label">Age</div><div class="value">${age}</div></div>` : ""}
        <div class="field">
          <div class="label">Message</div>
          <div class="value">${message.replace(/\n/g, "<br>")}</div>
        </div>
        <p style="font-size:12px;color:#999;text-align:right;margin-top:20px;">
          Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
        </p>
      </div>
      <div class="footer">
        <strong>GroxMedia Admin Notification</strong><br/>
        This is an automated message from your website contact form.
      </div>
    </div>
  </body>
  </html>`;
}

// 🌟 CLIENT TEMPLATE
function buildUserTemplate({ name, message }: { name: string; message?: string }) {
  return `
  <html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { background:#f4f4f4; font-family:'Segoe UI',Arial,sans-serif; margin:0; padding:0; }
      .container { max-width:600px; margin:20px auto; background:#ffffff; border:1px solid #eee; }
      .header { background:#002D91; color:#ffffff; text-align:center; padding:30px 20px; }
      .header h2 { margin:0; font-size:24px; font-weight:700; letter-spacing:0.5px; }
      .body { padding:30px; color:#333333; line-height:1.6; font-size:16px; }
      .message-box { background:#f8f9fa; border-left:4px solid #FE6A00; padding:20px; margin:20px 0; color:#555555; font-style:italic; }
      .footer { background:#f8f9fa; padding:20px; font-size:14px; color:#666666; text-align:center; border-top:1px solid #eeeeee; }
      .footer strong { color:#002D91; }
      .btn { display:inline-block; background:#FE6A00; color:#ffffff; padding:12px 24px; text-decoration:none; font-weight:600; margin-top:20px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Thank You for Contacting GroxMedia</h2>
      </div>
      <div class="body">
        <p>Hi <strong>${name}</strong>,</p>
        <p>We have received your message and our team will get back to you shortly.</p>
        <p>Here is a copy of your message:</p>
        <div class="message-box">${(message || "").replace(/\n/g, "<br>")}</div>
        <p>If this is urgent, please call us directly at <strong>+91 92668 06477</strong>.</p>
        <p>Best Regards,<br/><strong>The GroxMedia Team</strong></p>
      </div>
      <div class="footer">
        <strong>GroxMedia</strong><br/>
        Your Trusted IT Service Partner<br/>
        Web Development | Digital Marketing | Graphic Design | MVP Development<br/><br/>
        📞 +91 92668 06477 • ✉️ hello@groxmedia.in<br/>
        🌐 www.groxmedia.in
      </div>
    </div>
  </body>
  </html>`;
}

// 🔧 CORS Headers Helper
function setCorsHeaders(response: NextResponse, origin: string | null): NextResponse {
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400"); // 24 hours
  }
  return response;
}

// ✅ Handle OPTIONS (Preflight Request)
export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  const response = NextResponse.json({}, { status: 200 });
  return setCorsHeaders(response, origin);
}

// ✅ Handle POST
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  // Check if origin is allowed
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    const response = NextResponse.json(
      { error: "CORS policy: Origin not allowed" },
      { status: 403 }
    );
    return response;
  }

  try {
    const { name, email, mobileNumber, message, age } = await request.json();

    if (!name || !email || !mobileNumber || !message) {
      const response = NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
      return setCorsHeaders(response, origin);
    }

    const adminRecipients = process.env.NEXT_PUBLIC_TO_EMAIL?.split(",") || [];

    // 📨 Send both mails in parallel
    await Promise.all([
      transporter.sendMail({
        from: `"GroxMedia" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
        to: adminRecipients,
        subject: `New Contact: ${name} | ${mobileNumber}`,
        html: buildAdminTemplate({ name, email, mobileNumber, message, age }),
        replyTo: email,
      }),
      transporter.sendMail({
        from: `"GroxMedia" <${process.env.NEXT_PUBLIC_FROM_EMAIL}>`,
        to: email,
        subject: `Thanks for contacting GroxMedia`,
        html: buildUserTemplate({ name, message }),
      }),
    ]);

    const response = NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error("Mail error:", error);
    const response = NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
    return setCorsHeaders(response, origin);
  }
}