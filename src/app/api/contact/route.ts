export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Payload = {
    name: string;
    email: string;
    message: string;
};

function isPayload(v: unknown): v is Payload {
    if (!v || typeof v !== 'object') return false;
    const r = v as Record<string, unknown>;
    return typeof r.name === 'string' && typeof r.email === 'string' && typeof r.message === 'string';
}

function escapeHtml(value: string): string {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();
        if (!isPayload(body)) return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });

        const name = body.name.trim();
        const email = body.email.trim();
        const message = body.message.trim();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const host = process.env.SMTP_HOST ?? 'smtp-mail.outlook.com';
        const port = Number(process.env.SMTP_PORT ?? '587');
        const user = process.env.SMTP_USER ?? '';
        const pass = process.env.SMTP_PASS ?? '';
        const to = process.env.MAIL_TO ?? 'lukas.zen.pabst@outlook.de';

        if (!user || !pass) {
            return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: false,
            requireTLS: true,
            auth: { user, pass }
        });

        await transporter.sendMail({
            from: user,
            to,
            replyTo: email,
            subject: `New Contact Request from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `<h3>New Contact Request</h3>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>`
        });

        await transporter.sendMail({
            from: user,
            to: email,
            subject: 'Confirmation: I received your message',
            text: `Hi ${name},\n\nThanks for reaching out! I received your message and will get back to you.\n\nBest regards,\nLukas Pabst`,
            html: `<p>Hi ${escapeHtml(name)},</p>
<p>Thanks for reaching out! I received your message and will get back to you.</p>
<p>Best regards,<br><strong>Lukas Pabst</strong></p>`
        });

        return NextResponse.json({ success: true });
    } catch (e) {
        console.error('Error sending email:', e);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
