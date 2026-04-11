const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const app = express();
const multer = require("multer");
const { exec } = require("child_process");
const fs = require("fs");
const os = require("os");

const PORT = process.env.PORT || 5000;

// ─── DIRECTORIES ───
const uploadDir = path.join(__dirname, "uploads");
const downloadDir = path.join(os.tmpdir(), "aibunt_bom_temp");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });

// ─── MIDDLEWARE ───
app.use(cors());
app.use(express.json());

// Logger for debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// ─── API ROUTES (DEFINED FIRST) ───

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", time: new Date().toISOString() });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// BOM Extraction
app.post("/api/extract-bom", upload.single("file"), (req, res) => {
  console.log("BOM Extraction Request Received:", req.file ? req.file.originalname : "No file");
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const inputPath = req.file.path;
  const scriptPath = path.join(__dirname, "scripts", "bom_extractor_lite.py");
  // Try 'python3' then fallback to 'python' for production compatibility
  const command = `python3 "${scriptPath}" --input "${inputPath}" --out-dir "${downloadDir}" || python "${scriptPath}" --input "${inputPath}" --out-dir "${downloadDir}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`BOM Error: ${stderr}`);
      return res.status(500).json({ error: "Failed to extract BOM data" });
    }
    try {
      const data = JSON.parse(stdout);
      res.status(200).json(data);
    } catch (e) {
      console.error("JSON Parse Error:", stdout);
      res.status(500).json({ error: "Invalid response from extractor" });
    }
  });
});

// Download API
app.get("/api/download/:filename", (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(downloadDir, fileName);
  console.log(`Download requested for: ${fileName}`);

  if (fs.existsSync(filePath)) {
    res.download(filePath, fileName, (err) => {
      if (err) console.error("Download Error:", err);
    });
  } else {
    res.status(404).json({ error: "File not found" });
  }
});

// Contact API
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

app.post("/api/contact", async (req, res) => {
  console.log("Contact Request Received from:", req.body.email);
  const { name, email, subject, message } = req.body;

  try {
    const mailOptions = {
      from: `"AI BUNT Website" <${process.env.SMTP_USER}>`,
      to: "info@aibunt.com",
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ─── STATIC & CATCH-ALL (DEFINED LAST) ───
app.use("/downloads", express.static(downloadDir));
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  // Only serve index.html for non-API routes
  if (req.url.startsWith("/api")) {
    return res.status(404).json({ error: "API Route Not Found" });
  }
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
