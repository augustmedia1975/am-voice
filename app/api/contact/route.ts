import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, projectType, budget, message } = await request.json();

    await resend.emails.send({
      from: 'AM Studio Contact <adam@augustmediastudio.com>',
      to: 'adam@augustmediastudio.com',
      replyTo: email,
      subject: `New enquiry from ${name} — ${projectType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #F5C800; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; color: #0D0D0D; font-size: 24px;">New Project Enquiry</h1>
          </div>
          <div style="background: #1A1611; padding: 24px; border-radius: 0 0 8px 8px; color: #F9F4E8;">
            <p><strong style="color: #F5C800;">Name:</strong> ${name}</p>
            <p><strong style="color: #F5C800;">Email:</strong> ${email}</p>
            <p><strong style="color: #F5C800;">Project Type:</strong> ${projectType}</p>
            <p><strong style="color: #F5C800;">Budget:</strong> ${budget || 'Not specified'}</p>
            <hr style="border-color: #F5C800; opacity: 0.2; margin: 16px 0;" />
            <p><strong style="color: #F5C800;">Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
