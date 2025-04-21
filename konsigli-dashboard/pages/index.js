import { useState, useEffect } from 'react';
import KonsigliChart from '../components/KonsigliChart';

export default function Home() {
  const [email, setEmail] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([
      { provider: 'OpenAI (GPTBot)', hits: 324 },
      { provider: 'Anthropic (ClaudeBot)', hits: 91 },
      { provider: 'Google AI', hits: 52 },
      { provider: 'Unknown', hits: 33 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8 font-sans">
      <h1 className="text-3xl font-bold mb-2">Bienvenue sur Konsigli</h1>
      <p className="mb-6 text-lg text-gray-600">Le conseiller invisible entre vos contenus et l’IA</p>

      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Visites IA par provider</h2>
        <KonsigliChart data={logs} />
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recevoir un rapport PDF mensuel</h2>
        <input
          type="email"
          placeholder="Votre adresse e-mail"
          className="border px-4 py-2 mr-4 rounded w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
      </div>
    </div>
  );
}