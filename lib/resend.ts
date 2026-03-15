import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendQuoteConfirmationToBuyer(email: string, name: string) {
  const resend = getResend();
  if (!resend) {
    console.warn("RESEND_API_KEY not set, skipping buyer email");
    return;
  }
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Hydra <onboarding@resend.dev>",
    to: email,
    subject: "Quote request received — Hydra",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for your quote request. We've received your project details and will respond within 24–48 hours with pricing and availability.</p>
      <p>If you have any urgent questions, please reply to this email or contact us directly.</p>
      <p>Best regards,<br/>The Hydra Team</p>
    `,
  });
}

export async function sendQuoteNotificationToHydra(lead: {
  name: string;
  email: string;
  company: string;
  country: string;
  project_type: string;
  pipe_type: string;
  diameter_range?: string;
  quantity_m?: string;
  deadline?: string;
  project_description?: string;
}) {
  const resend = getResend();
  if (!resend) {
    console.warn("RESEND_API_KEY not set, skipping Hydra notification");
    return;
  }
  const hydraEmail = process.env.HYDRA_NOTIFICATION_EMAIL || process.env.RESEND_FROM_EMAIL;
  if (!hydraEmail) {
    console.warn("No HYDRA_NOTIFICATION_EMAIL for internal notifications");
    return;
  }
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Hydra <onboarding@resend.dev>",
    to: hydraEmail,
    subject: `New lead: ${lead.company} — ${lead.pipe_type}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Company:</strong> ${lead.company}</p>
      <p><strong>Country:</strong> ${lead.country}</p>
      <p><strong>Project type:</strong> ${lead.project_type}</p>
      <p><strong>Product needed:</strong> ${lead.pipe_type}</p>
      <p><strong>Diameter range:</strong> ${lead.diameter_range || "—"}</p>
      <p><strong>Quantity (m):</strong> ${lead.quantity_m || "—"}</p>
      <p><strong>Deadline:</strong> ${lead.deadline || "—"}</p>
      <p><strong>Description:</strong></p>
      <p>${lead.project_description || "—"}</p>
      <p><em>Respond within 24 hours for best conversion.</em></p>
    `,
  });
}

export async function sendContactFormToHydra(name: string, email: string, message: string) {
  const resend = getResend();
  if (!resend) return;
  const hydraEmail = process.env.HYDRA_NOTIFICATION_EMAIL || process.env.RESEND_FROM_EMAIL;
  if (!hydraEmail) return;
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Hydra <onboarding@resend.dev>",
    to: hydraEmail,
    replyTo: email,
    subject: `Contact form: ${name} (${email})`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
