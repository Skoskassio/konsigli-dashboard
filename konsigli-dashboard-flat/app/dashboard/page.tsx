export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Konsigli Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total AI Pings</h2>
          <p className="text-3xl">12,308</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Unique Pages</h2>
          <p className="text-3xl">487</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Top Bot</h2>
          <p className="text-3xl">GPTBot</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Revenue Estimate</h2>
          <p className="text-3xl">$1,230</p>
        </div>
      </div>
    </main>
  );
}