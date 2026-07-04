const nodemailer = require("nodemailer");

const sendEmail = async (inquiry) => {
    // Transporter function ke andar banta hai, taaki env vars
    // guaranteed load ho chuke hon jab bhi ye call ho
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // ADMIN_EMAILS .env me comma-separated hoga:
    // ADMIN_EMAILS=admin1@gmail.com,admin2@gmail.com
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAILS,

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