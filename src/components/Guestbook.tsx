"use client";

import { useState } from "react";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: "1",
      name: "Mom & Dad",
      message:
        "We love you so much, Dayzee! You&apos;re the best pupper ever! 🥰",
      date: "2024-01-15",
    },
    {
      id: "2",
      name: "Neighbor Dog",
      message: "Woof! You're my best friend! Let's play fetch soon! 🎾",
      date: "2024-01-14",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    setEntries([newEntry, ...entries]);
    setName("");
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-600 neon-text mb-4">
          📝 Dayzee&apos;s Guestbook 📝
        </h1>
        <p className="text-xl text-gray-700">
          Leave a message for the bestest pupper! 🥰
        </p>
      </div>

      {/* Sign Guestbook Form */}
      <div className="retro-card p-8 mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          ✍️ Sign My Guestbook! ✍️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 focus:outline-none text-lg"
              placeholder="Enter your name..."
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:border-pink-500 focus:outline-none text-lg resize-none"
              placeholder="Write something nice about Dayzee..."
              required
            />
          </div>

          <button
            type="submit"
            className="retro-button px-8 py-4 text-xl w-full"
          >
            🐾 Sign Guestbook! 🐾
          </button>
        </form>
      </div>

      {/* Guestbook Entries */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-8">
          💌 Messages from Friends 💌
        </h2>

        {entries.map((entry) => (
          <div key={entry.id} className="retro-card p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-pink-600">{entry.name}</h3>
              <span className="text-sm text-gray-500">
                {new Date(entry.date).toLocaleDateString()}
              </span>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed">
              {entry.message}
            </p>

            <div className="mt-4 text-right">
              <span className="text-2xl">💖</span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 left-8 text-3xl animate-bounce">✨</div>
      <div className="fixed top-32 right-10 text-2xl animate-pulse">📝</div>
      <div className="fixed bottom-20 left-12 text-2xl animate-bounce">💌</div>
      <div className="fixed bottom-32 right-8 text-3xl animate-pulse">🐾</div>
    </div>
  );
}
