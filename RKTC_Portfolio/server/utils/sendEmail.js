const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (inquiry) => {
    await resend.emails.send({
        from: "RKTC <onboarding@resend.dev>",
        to: process.env.ADMIN_EMAILS.split(","),
        replyTo: inquiry.email,
        subject: "New Inquiry Received - RKTC Portfolio",
        text: `
A new inquiry has been submitted.

Name: ${inquiry.name}
Phone: ${inquiry.phone}
Email: ${inquiry.email}

Products:
${inquiry.products?.join(", ") || "N/A"}

Message:
${inquiry.message}
        `,
    });
};

module.exports = sendEmail;