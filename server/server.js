const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const app = express();

app.use(cors());
app.use(express.json());

// ─── EMAIL CONFIGURATION ───
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── CONTACT API ENDPOINT ───
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const mailOptions = {
      from: `"AI BUNT Website" <${process.env.SMTP_USER}>`,
      to: "info@aibunt.com",
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #85B53D; border-bottom: 2px solid #85B53D; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 15px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #999; margin-top: 20px; border-top: 1px solid #eee; pt-10;">
            This email was sent from the AI BUNT contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// The "catchall" handler
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
