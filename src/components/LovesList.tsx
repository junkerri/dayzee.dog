"use client";

interface LovesListProps {
  loves: string[];
  title?: string;
}

export default function LovesList({
  loves,
  title = "Things I Love",
}: LovesListProps) {
  return (
    <div className="retro-card p-6">
      <h3 className="text-2xl font-bold text-purple-600 neon-text mb-6 text-center">
        {title}
      </h3>

      <div className="space-y-4">
        {loves.map((love, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-shadow"
          >
            <span className="text-purple-500 text-lg">•</span>
            <span className="text-gray-800 font-medium">{love}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
