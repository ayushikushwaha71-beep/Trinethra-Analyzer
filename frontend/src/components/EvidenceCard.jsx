export default function EvidenceCard({ evidence }) {
  return (
    <div className="bg-white rounded-2xl border p-4 shadow-sm mb-4">
      <p className="text-gray-800 italic mb-3">
        "{evidence.quote}"
      </p>

      <div className="flex gap-3">
        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          {evidence.tag}
        </span>

        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {evidence.dimension}
        </span>
      </div>
    </div>
  );
}