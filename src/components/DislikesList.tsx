"use client";

interface DislikesListProps {
  dislikes: string[];
  title?: string;
}

export default function DislikesList({
  dislikes,
  title = "Things I Don't Like",
}: DislikesListProps) {
  return (
    <div className="retro-card p-6">
      <h3 className="text-2xl font-bold text-red-500 neon-text mb-6 text-center">
        {title}
      </h3>

      <div className="space-y-4">
        {dislikes.map((dislike, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border-l-4 border-red-400 hover:shadow-md transition-shadow"
          >
            <span className="text-red-500 text-lg">•</span>
            <span className="text-gray-800 font-medium">{dislike}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
