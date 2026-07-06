/* eslint-env node */

import nodemailer from "nodemailer";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const response = (statusCode, body) => ({
  statusCode,
  headers,
  body: JSON.stringify(body),
});

const getEnv = (...names) => {
  for (const name of names) {
    const value = process.env[name];
    if (value) {
      return value;
    }
  }

  return "";
};

const asBoolean = (value) => {
  if (!value) {
    return undefined;
  }

  return ["1", "true", "yes"].includes(String(value).toLowerCase());
};

const clean = (value, maxLength = 1000) => {
  return Array.from(String(value ?? ""))
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code === 9 || code === 10 || code === 13 || code >= 32;
    })
    .join("")
    .trim()
    .slice(0, maxLength);
};

const escapeHtml = (value) => {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return response(204, {});
  }

  if (event.httpMethod !== "POST") {
    return response(405, { message: "Method not allowed." });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return response(400, { message: "Invalid request body." });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 180);
  const subject = clean(payload.subject, 180);
  const message = clean(payload.message, 4000);

  if (!name || !email || !subject) {
    return response(400, { message: "Name, email and subject are required." });
  }

  if (!isEmail(email)) {
    return response(400, { message: "Please enter a valid email address." });
  }

  const smtpUser = getEnv("SMTP_USER", "EMAIL_USER", "MAIL_USER", "GMAIL_USER");
  const smtpPass = getEnv("SMTP_PASS", "EMAIL_PASS", "MAIL_PASS", "GMAIL_APP_PASSWORD");
  const smtpService = getEnv("SMTP_SERVICE", "EMAIL_SERVICE", "MAIL_SERVICE");
  const smtpHost = smtpService ? "" : getEnv("SMTP_HOST", "EMAIL_HOST", "MAIL_HOST");
  const smtpPortValue = smtpService ? "" : getEnv("SMTP_PORT", "EMAIL_PORT", "MAIL_PORT");
  const smtpPort = smtpPortValue ? Number(smtpPortValue) : smtpService ? undefined : 465;
  const smtpSecure = smtpService
    ? undefined
    : asBoolean(getEnv("SMTP_SECURE", "EMAIL_SECURE", "MAIL_SECURE"));
  const from = getEnv("MAIL_FROM", "EMAIL_FROM") || smtpUser;
  const to = getEnv("MAIL_TO", "EMAIL_TO") || "daniel@korous.design";

  if (!smtpUser || !smtpPass || (!smtpHost && !smtpService)) {
    console.error("Email service is missing SMTP configuration.");
    return response(500, { message: "Email service is not configured." });
  }

  if (smtpPortValue && Number.isNaN(smtpPort)) {
    console.error("SMTP port is not a valid number.");
    return response(500, { message: "Email service is not configured correctly." });
  }

  const transporter = nodemailer.createTransport({
    service: smtpService || undefined,
    host: smtpHost || undefined,
    port: smtpPort,
    secure: smtpSecure ?? smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const fromHeader = from.includes("<") ? from : `"Korous Design" <${from}>`;

  try {
    await transporter.sendMail({
      from: fromHeader,
      to,
      replyTo: `"${name.replace(/"/g, "'")}" <${email}>`,
      subject: `Contact form: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message || "No message was provided.",
      ].join("\n"),
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message was provided.").replace(/\n/g, "<br>")}</p>
      `,
    });

    return response(200, { message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending contact email:", {
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      message: error.message,
    });

    if (error.code === "EAUTH" || error.responseCode === 535) {
      return response(500, { message: "Email service rejected the configured credentials." });
    }

    return response(500, { message: "Email could not be sent." });
  }
};
