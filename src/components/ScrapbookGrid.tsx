"use client";

import { useState } from "react";
import { Photo } from "@/data/dayzee";

interface ScrapbookGridProps {
  photos: Photo[];
}

export default function ScrapbookGrid({ photos }: ScrapbookGridProps) {
  const [photoOrder, setPhotoOrder] = useState(photos);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));

    if (dragIndex !== dropIndex) {
      const newOrder = [...photoOrder];
      const [draggedItem] = newOrder.splice(dragIndex, 1);
      newOrder.splice(dropIndex, 0, draggedItem);
      setPhotoOrder(newOrder);
    }
  };

  return (
    <div className="glitter-bg min-h-screen p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 neon-text mb-4">
          📸 Dayzee&apos;s Photo Scrapbook 📸
        </h1>
        <p className="text-lg text-gray-700">
          Drag the photos around to rearrange them! ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photoOrder.map((photo, index) => (
          <div
            key={photo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="cursor-grab active:cursor-grabbing"
          >
            <div className="polaroid">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="mt-4 text-center">
                <p className="font-bold text-gray-800 mb-1">{photo.caption}</p>
                {photo.date && (
                  <p className="text-sm text-gray-500 italic">{photo.date}</p>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 text-2xl">✨</div>
              <div className="absolute -bottom-2 -left-2 text-xl">🐾</div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative scrapbook elements */}
      <div className="fixed top-4 left-4 text-4xl animate-bounce">📷</div>
      <div className="fixed top-8 right-8 text-3xl animate-pulse">✨</div>
      <div className="fixed bottom-8 left-8 text-2xl animate-bounce">🎀</div>
      <div className="fixed bottom-4 right-4 text-3xl animate-pulse">🌟</div>
    </div>
  );
}
