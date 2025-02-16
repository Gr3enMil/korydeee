import nodemailer from "nodemailer";
import dotenv from "dotenv";

// ✅ Explicitně načteme proměnné z .env.local při lokálním spuštění
dotenv.config();

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { name, email, subject, message } = JSON.parse(event.body);

        // ✅ Ověříme, zda se proměnné načetly správně
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("❌ Chybí EMAIL_USER nebo EMAIL_PASS v .env.local nebo v Netlify environment variables!");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Server error: Chybí SMTP konfigurace." })
            };
        }

        // ✅ SMTP Konfigurace
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        // ✅ Odeslání emailu
        await transporter.sendMail({
            from: "gr3en@seznam.cz",
            to: "daniel@korous.design",
            subject: subject,
            text: message,
            html: `<p><strong>Od:</strong> ${name} (${email})</p><p>${message}</p>`
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email byl úspěšně odeslán!" }),
        };
    } catch (error) {
        console.error("❌ Chyba při odesílání emailu:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Nepodařilo se odeslat email." }),
        };
    }
}
