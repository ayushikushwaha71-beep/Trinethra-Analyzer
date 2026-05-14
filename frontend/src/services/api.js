import axios from "axios";

export const analyzeTranscript = async (transcript) => {
  const response = await axios.post(
    "http://localhost:5000/api/analyze",
    {
      transcript,
    }
  );

  return response.data;
};