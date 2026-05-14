import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TranscriptInput from "../components/TranscriptInput";
import ScoreCard from "../components/ScoreCard";
import KPISection from "../components/KPISection";
import EvidenceCard from "../components/EvidenceCard";
import GapAnalysis from "../components/GapAnalysis";
import FollowUpQuestions from "../components/FollowUpQuestions";
import { analyzeTranscript } from "../services/api";

export default function Dashboard() {
  const [transcript, setTranscript] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const result = await analyzeTranscript(transcript);

      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="ml-[260px] w-full p-8">
        <h1 className="text-4xl font-bold mb-2">
          Trinethra Feedback Analyzer
        </h1>

        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl mb-8 border border-yellow-200">
          <p className="font-medium">
            AI-generated recommendations.
          </p>

          <p className="text-sm mt-1">
            Please validate findings before finalizing the assessment.
          </p>
        </div>

        <TranscriptInput
          transcript={transcript}
          setTranscript={setTranscript}
          handleAnalyze={handleAnalyze}
          loading={loading}
        />

        {analysis && (
          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <ScoreCard score={analysis.rubricScore} />

              <KPISection kpis={analysis.kpiMapping} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Extracted Evidence
              </h2>

              {analysis.evidence.map((item, index) => (
                <EvidenceCard
                  key={index}
                  evidence={item}
                />
              ))}
            </div>

            <GapAnalysis gaps={analysis.gapAnalysis} />

            <FollowUpQuestions
              questions={analysis.followUpQuestions}
            />
          </div>
        )}
      </div>
    </div>
  );
}