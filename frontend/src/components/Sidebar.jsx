export default function Sidebar() {
  return (
    <aside className="w-[260px] h-screen bg-white border-r fixed left-0 top-0 p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-10">
        Trinethra
      </h1>

      <div className="space-y-4 text-gray-700">
        <div className="p-3 rounded-xl bg-indigo-100 font-semibold">
          Dashboard
        </div>

        <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          New Analysis
        </div>

        <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          Sample Transcripts
        </div>

        <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          KPI Guide
        </div>

        <div className="p-3 hover:bg-gray-100 rounded-xl cursor-pointer">
          Rubric
        </div>
      </div>
    </aside>
  );
}