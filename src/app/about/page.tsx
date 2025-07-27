import { Metadata } from "next";
import { dayzeeData } from "@/data/dayzee";
import AudioIntro from "@/components/AudioIntro";
import LikesList from "@/components/LikesList";
import DislikesList from "@/components/DislikesList";
import LovesList from "@/components/LovesList";

export const metadata: Metadata = {
  title: "About Dayzee | Austin's Favorite Producer Pup - Full Profile",
  description:
    "Learn all about Dayzee, the 9-year-old Shih-tzu producer pup from Austin. Discover her likes, dislikes, loves, personality, and memorable moments. Hear her voice and explore her unique quirks!",
  keywords:
    "Dayzee profile, Shih-tzu personality, Austin dog, producer pup, Moo Moo toy, studio sessions, hiking, likes dislikes, pet bio",
  openGraph: {
    title: "About Dayzee | Austin's Favorite Producer Pup",
    description:
      "Learn all about Dayzee's personality, likes, dislikes, and memorable moments!",
    images: [
      {
        url: "/photos/Playful in Bed chilling.JPEG",
        width: 1200,
        height: 630,
        alt: "Dayzee chilling in bed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dayzee | Austin's Favorite Producer Pup",
    description: "Learn all about Dayzee's personality and adventures!",
    images: ["/photos/Playful in Bed chilling.JPEG"],
  },
};

export default function About() {
  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-600 neon-text mb-4">
          🐾 All About Dayzee 🐾
        </h1>

        <p className="text-xl text-gray-700">
          Get to know the bestest producer pup in Austin! ✨
        </p>
      </div>

      {/* Audio Intro Section */}
      <div className="mb-12">
        <AudioIntro
          audioUrl={dayzeeData.audioIntro}
          title="Hear Dayzee's Voice!"
        />
      </div>

      {/* Detailed Bio Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="retro-card p-8">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">🐕</div>

            <h2 className="text-4xl font-bold text-pink-600 mb-4">
              Meet {dayzeeData.name}!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                <h3 className="font-bold text-pink-600 mb-2">🐾 Basic Info</h3>
                <p>
                  <strong>Name:</strong> {dayzeeData.name}
                </p>
                <p>
                  <strong>Age:</strong> {dayzeeData.age} years old
                </p>
                <p>
                  <strong>Breed:</strong> {dayzeeData.breed}
                </p>
                <p>
                  <strong>Pronouns:</strong> {dayzeeData.pronouns}
                </p>
                <p>
                  <strong>Location:</strong> Austin, Texas
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">🎯 Personality</h3>
                <p className="text-gray-700">{dayzeeData.bio}</p>
                <p className="text-gray-700 mt-2">
                  Shy with strangers but loving once she gets to know you!
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-600 mb-2">
                  🌟 Special Talents
                </h3>
                <ul className="space-y-2">
                  <li>🎵 Studio producer at Rief Productions</li>
                  <li>😛 Permanent tongue-out pose master</li>
                  <li>🧸 Moo Moo toy expert</li>
                  <li>🏞️ Longview Park hiking enthusiast</li>
                  <li>🍗 Chicken & eggs connoisseur</li>
                  <li>🌊 Fear conqueror (Galveston beach hero)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <h3 className="font-bold text-purple-600 mb-2">🏷️ Nicknames</h3>
                <ul className="space-y-1">
                  <li>Doo Doo</li>
                  <li>Doo Doo Head</li>
                  <li>Cutey McDoo</li>
                  <li>Doo Doo Von Lickenstein</li>
                  <li>Princy Poo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lists Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <LikesList likes={dayzeeData.likes} />
        <DislikesList dislikes={dayzeeData.dislikes} />
        <LovesList loves={dayzeeData.loves} />
      </div>

      {/* Fun Facts Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="retro-card p-8">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
            🎉 Fun Facts About Dayzee! 🎉
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">😛</span>
                <span>Always has her tongue out when resting</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎵</span>
                <span>Works as a producer at Rief Productions</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧸</span>
                <span>Plays with Moo Moo toy after dinner</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🍺</span>
                <span>Hangs with BYOB group in Austin</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌊</span>
                <span>Conquered fear by running to parents in ocean</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⏰</span>
                <span>Eats dinner at exactly 6 PM every day</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">😰</span>
                <span>Doesn&apos;t like faces near her face</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💨</span>
                <span>Hates fart noises and CO2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Memorable Moments Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="retro-card p-8">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
            🌟 Memorable Moments 🌟
          </h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">
                🏆 Galveston Beach Hero
              </h3>
              <p className="text-gray-700">
                Dayzee doesn&apos;t usually like water, but when her parents
                were in the ocean at Galveston beach, she bravely ran to them,
                conquering her fears! A true hero moment! 🌊
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-600 mb-2">
                🎵 Studio Sessions
              </h3>
              <p className="text-gray-700">
                As a producer at Rief Productions, Dayzee loves hanging in the
                studio while others play music. She&apos;s sensitive to loud
                noises but loves the instruments! 🎼
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-red-50 p-4 rounded-lg">
              <h3 className="font-bold text-pink-600 mb-2">
                🧸 Moo Moo Ritual
              </h3>
              <p className="text-gray-700">
                Every day after her 6 PM dinner, Dayzee plays with her favorite
                Moo Moo toy and then cleans her face. It&apos;s her special
                evening ritual! 🧸
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600">
        <p className="mb-2">Thanks for learning about me! 🥰</p>
        <p className="text-sm">
          I hope you enjoyed getting to know the real Dayzee! 💖
        </p>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-24 left-8 text-3xl animate-bounce">🐾</div>
      <div className="fixed top-36 right-10 text-2xl animate-pulse">✨</div>
      <div className="fixed bottom-24 left-12 text-2xl animate-bounce">🎀</div>
      <div className="fixed bottom-36 right-6 text-3xl animate-pulse">🌟</div>
    </div>
  );
}
