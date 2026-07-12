const nodemailer = require("nodemailer");

const sendEmail = async (inquiry) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAILS,
        replyTo: inquiry.email,
        subject: "New Inquiry Received - RKTC Portfolio",

        text: `
A new inquiry has been submitted.

Name: ${inquiry.name}

Phone: ${inquiry.phone}

Email: ${inquiry.email}

Products:
${inquiry.products.join(", ")}

Message:
${inquiry.message}
`,
    });
};

module.exports = sendEmail;