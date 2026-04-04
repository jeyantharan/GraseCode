import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Navbar-style bar + white GraseCode wordmark only — no crystal (#3ddbe1) logo tray */
function brandHeaderHtml(): string {
  return `
          <div style="background: #050505; padding: 22px 28px; border-bottom: 1px solid rgba(255,255,255,0.05); text-align: center;">
            <span style="color: #ffffff; font-weight: bold; font-size: 28px; letter-spacing: -1px; font-family: Arial, Helvetica, sans-serif;">GraseCode</span>
          </div>`;
}

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const zohoUser = process.env.ZOHO_USER?.trim();
    const zohoPass = process.env.ZOHO_PASS?.trim();
    const placeholderPass =
      /^your_zoho_password_here$/i.test(zohoPass ?? "") ||
      /^changeme$/i.test(zohoPass ?? "");
    if (!zohoUser || !zohoPass || placeholderPass) {
      console.error("Contact form: ZOHO_USER or ZOHO_PASS missing or still placeholder");
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? "Email is not configured. Set real ZOHO_USER and ZOHO_PASS in .env.local (Next.js only loads .env.local, not env.local)."
              : "Failed to send message. Please try again.",
        },
        { status: 500 }
      );
    }

    const header = brandHeaderHtml();
    const safeName = escapeHtml(String(name));
    const safeCompany = company ? escapeHtml(String(company)) : "";
    const emailRaw = String(email).trim();
    const safeEmail = escapeHtml(emailRaw);
    const mailtoHref = emailRaw.replace(/["<>]/g, "");
    const safePhone = phone ? escapeHtml(String(phone)) : "";
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br/>");

    // Zoho SMTP — default 587 + STARTTLS (works more reliably on many hosts than 465).
    // Custom domain / Zoho Workplace often needs smtppro.zoho.com (or .eu / .in).
    const smtpHost = process.env.ZOHO_SMTP_HOST?.trim() || "smtp.zoho.com";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT) || 587;
    const smtpSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      ...(smtpPort === 587 ? { requireTLS: true } : {}),
      auth: {
        user: zohoUser,
        pass: zohoPass,
      },
    });

    const teamHtml = `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          ${header}
          <div style="padding: 20px 32px 8px;">
            <p style="color: #666; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">New contact form submission</p>
          </div>
          <div style="padding: 0 32px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 140px; font-size: 13px; font-weight: bold;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222; font-size: 14px;">${safeName}</td>
              </tr>
              ${safeCompany ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222; font-size: 14px;">${safeCompany}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222; font-size: 14px;"><a href="mailto:${mailtoHref}" style="color: #3ddbe1;">${safeEmail}</a></td>
              </tr>
              ${safePhone ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; font-weight: bold;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222; font-size: 14px;">${safePhone}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 13px; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #222; font-size: 14px; line-height: 1.6;">${safeMessage}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">Sent from grasecode.com contact form</p>
          </div>
        </div>
      `;

    const acknowledgementHtml = `
        <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
          ${header}
          <div style="padding: 36px 32px;">
            <p style="color: #222; font-size: 16px; line-height: 1.6; margin: 0 0 16px;">Hi ${safeName},</p>
            <p style="color: #444; font-size: 15px; line-height: 1.65; margin: 0 0 16px;">
              Thank you for reaching out to <strong style="color: #050505;">GraseCode</strong>. We&apos;ve received your message and our team will get back to you shortly.
            </p>
            <p style="color: #444; font-size: 15px; line-height: 1.65; margin: 0 0 24px;">
              If your request is urgent, feel free to reply to this email.
            </p>
            <p style="color: #3ddbe1; font-size: 14px; font-weight: bold; margin: 0;">— The GraseCode team</p>
          </div>
          <div style="background: #050505; padding: 18px 32px; text-align: center;">
            <p style="color: rgba(255,255,255,0.45); font-size: 12px; margin: 0;">This is an automated confirmation. Please do not share sensitive information by email unless requested.</p>
          </div>
        </div>
      `;

    await Promise.all([
      transporter.sendMail({
        from: `"GraseCode Contact" <${zohoUser}>`,
        to: zohoUser,
        replyTo: emailRaw,
        subject: `New Contact Form Submission — ${name}`,
        html: teamHtml,
      }),
      transporter.sendMail({
        from: `"GraseCode" <${zohoUser}>`,
        to: email,
        replyTo: zohoUser,
        subject: "We received your message — GraseCode",
        html: acknowledgementHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const hint =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? `Failed to send email (dev): ${hint}`
            : "Failed to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}
