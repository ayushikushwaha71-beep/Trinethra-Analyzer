const express = require("express");
const router = express.Router();

const createPrompt = require("../prompts/analysisPrompt");
const analyzeWithOllama = require("../services/ollamaService");

router.post("/", async (req, res) => {
  try {
    const { transcript } = req.body;

    const prompt = createPrompt(transcript);

    const aiResponse = await analyzeWithOllama(prompt);

    const parsed = JSON.parse(aiResponse);

    res.json(parsed);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Analysis failed",
      message: error.message,
    });
  }
});

module.exports = router;
