import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-950 text-white p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Konsigli</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          The intelligence layer between content creators and AI consumers.
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-gray-200 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}