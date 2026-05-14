export default function KPISection({ kpis }) {
  if (!kpis) return null;

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">KPI Mapping</h2>

      <div className="flex flex-wrap gap-3">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full"
          >
            {kpi}
          </div>
        ))}
      </div>
    </div>
  );
}