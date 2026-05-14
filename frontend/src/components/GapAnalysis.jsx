export default function GapAnalysis({ gaps }) {
  if (!gaps) return null;

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Gap Analysis</h2>

      <ul className="space-y-3">
        {gaps.map((gap, index) => (
          <li
            key={index}
            className="bg-red-50 border border-red-100 p-4 rounded-xl"
          >
            {gap}
          </li>
        ))}
      </ul>
    </div>
  );
}