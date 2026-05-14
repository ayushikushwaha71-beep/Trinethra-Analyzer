export default function TranscriptInput({
  transcript,
  setTranscript,
  handleAnalyze,
  loading,
}) {
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        Supervisor Transcript
      </h2>

      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Paste transcript here..."
        className="w-full h-[250px] border rounded-xl p-4 outline-none"
      />

      <button
        onClick={handleAnalyze}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Analyzing..." : "Run Analysis"}
      </button>
    </div>
  );
}