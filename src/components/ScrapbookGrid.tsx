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
    <div className="min-h-screen p-8 paper-texture">
      <div className="text-center mb-12">
        <div className="sticker inline-block mb-4">
          <span className="text-4xl">📸</span>
        </div>
        <h1 className="girly-title text-5xl mb-4 sparkle">
          Dayzee&apos;s Photo Scrapbook 📸
        </h1>
        <p className="girly-subtitle text-xl">
          Drag the photos around to rearrange them! ✨
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <span className="text-2xl">🌸</span>
          <span className="text-2xl">💕</span>
          <span className="text-2xl">🎀</span>
          <span className="text-2xl">✨</span>
          <span className="text-2xl">💖</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {photoOrder.map((photo, index) => (
          <div
            key={photo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="cursor-grab active:cursor-grabbing group"
          >
            <div className="retro-card p-4 heart-decoration">
              <div className="photo-frame relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-72 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 text-2xl opacity-70">
                  ✨
                </div>
                <div className="absolute bottom-2 left-2 text-xl opacity-70">
                  🐾
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="handwritten text-lg font-bold text-gray-800 mb-2">
                  {photo.caption}
                </p>
                {photo.date && (
                  <p className="handwritten text-sm text-gray-500 italic">
                    {photo.date}
                  </p>
                )}
              </div>

              {/* Sticker decorations */}
              <div className="absolute -top-3 -left-3 text-2xl animate-float">
                🌸
              </div>
              <div
                className="absolute -bottom-3 -right-3 text-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                💖
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating decorative scrapbook elements */}
      <div className="fixed top-8 left-8 text-4xl animate-bounce">📷</div>
      <div className="fixed top-12 right-12 text-3xl animate-pulse">✨</div>
      <div className="fixed bottom-12 left-12 text-2xl animate-bounce">🎀</div>
      <div className="fixed bottom-8 right-8 text-3xl animate-pulse">🌟</div>
      <div className="fixed top-1/2 left-6 text-2xl animate-float">💕</div>
      <div
        className="fixed top-1/3 right-6 text-2xl animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        🐾
      </div>
      <div
        className="fixed bottom-1/3 left-6 text-2xl animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        🌸
      </div>
    </div>
  );
}
