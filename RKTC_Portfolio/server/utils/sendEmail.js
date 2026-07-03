const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (inquiry) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,

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