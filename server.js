import cors from "cors";
import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const submissionsDir = path.join(__dirname, "submissions");

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        message: "Name, email, and message are required.",
      });
    }

    await fs.mkdir(submissionsDir, { recursive: true });

    const now = new Date();
    const timestamp = now.toISOString();
    const safeTimestamp = timestamp.replace(/[:.]/g, "-");
    const safeName = String(name)
      .trim()
      .replace(/[^a-zA-Z0-9_-]+/g, "_");
    const fileName = `${safeTimestamp}_${safeName || "submission"}.txt`;
    const filePath = path.join(submissionsDir, fileName);

    const content = [
      `Submitted At: ${timestamp}`,
      `Name: ${name}`,
      `Email: ${email}`,
      "Message:",
      message,
      "",
      "----------------------------------------",
      "",
    ].join("\n");

    await fs.writeFile(filePath, content, "utf-8");

    return res.json({
      ok: true,
      message: "Message saved successfully.",
      fileName,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Failed to save message.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});
