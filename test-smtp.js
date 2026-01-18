const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Load .env.local manually
try {
    const envPath = path.resolve(process.cwd(), ".env.local");
    const envFile = fs.readFileSync(envPath, "utf8");
    envFile.split("\n").forEach((line) => {
        const [key, value] = line.split("=");
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
} catch (e) {
    console.error("Could not load .env.local", e.message);
}

console.log("Testing SMTP Connection...");
console.log(`Host: ${process.env.SMTP_HOST || 'smtp.office365.com'}`);
console.log(`User: ${process.env.SMTP_USER}`);
// Don't log password

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.error("❌ Connection failed!");
        console.error(error);
    } else {
        console.log("✅ Server is ready to take our messages");
    }
});
