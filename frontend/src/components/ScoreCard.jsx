export default function ScoreCard({ score }) {
  if (!score) return null;

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Rubric Score</h2>

      <div className="text-5xl font-bold text-indigo-600 mb-4">
        {score.score}/10
      </div>

      <p className="text-gray-600">
        {score.justification}
      </p>
    </div>
  );
}