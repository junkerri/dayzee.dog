"use client";

interface LikesListProps {
  likes: string[];
  title?: string;
}

export default function LikesList({
  likes,
  title = "Things I Like",
}: LikesListProps) {
  return (
    <div className="retro-card p-6">
      <h3 className="text-2xl font-bold text-pink-600 neon-text mb-6 text-center">
        {title}
      </h3>

      <div className="space-y-4">
        {likes.map((like, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-l-4 border-pink-400 hover:shadow-md transition-shadow"
          >
            <span className="text-pink-500 text-lg">•</span>
            <span className="text-gray-800 font-medium">{like}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
