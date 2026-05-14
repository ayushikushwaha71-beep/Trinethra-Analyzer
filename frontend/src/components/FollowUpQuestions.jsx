export default function FollowUpQuestions({ questions }) {
  if (!questions) return null;

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Follow-up Questions
      </h2>

      <ul className="space-y-3">
        {questions.map((question, index) => (
          <li
            key={index}
            className="bg-gray-50 p-4 rounded-xl"
          >
            {question}
          </li>
        ))}
      </ul>
    </div>
  );
}