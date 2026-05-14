const axios = require("axios");

const createSampleAnalysis = () => {
  return JSON.stringify({
    evidence: [
      {
        quote: "Supervisor praised the intern for good client handling but asked for clearer next steps.",
        tag: "positive",
        dimension: "Communication",
      },
    ],
    rubricScore: {
      score: 7,
      justification:
        "Feedback was constructive and supportive, but the supervisor should include clearer coaching actions.",
    },
    kpiMapping: [
      "Client satisfaction",
      "Team communication",
      "Follow-up clarity",
    ],
    gapAnalysis: [
      "Action items are not clearly defined.",
      "Follow-up timeline is missing.",
    ],
    followUpQuestions: [
      "What are the next steps for the intern to improve client communication?",
      "How can the supervisor make the coaching more actionable?",
    ],
  });
};

const analyzeWithOllama = async (prompt) => {
  try {
    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "llama3.2",
        prompt,
        stream: false,
      }
    );

    return response.data.response;
  } catch (error) {
    console.warn(
      "Ollama connection failed. Returning fallback sample analysis.",
      error.message
    );
    return createSampleAnalysis();
  }
};

module.exports = analyzeWithOllama;
