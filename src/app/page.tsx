import { Metadata } from "next";
import { dayzeeData } from "@/data/dayzee";

export const metadata: Metadata = {
  title: "Dayzee | Austin's Favorite Producer Pup - Home",
  description:
    "Welcome to Dayzee's profile! Meet the adorable 9-year-old Shih-tzu producer pup from Austin, Texas. Discover her personality, likes, dislikes, and photo gallery.",
  keywords:
    "Dayzee, Austin dog, Shih-tzu, producer pup, pet profile, Austin Texas, cute dog, studio dog",
  openGraph: {
    title: "Dayzee | Austin's Favorite Producer Pup",
    description: "Meet Dayzee, the adorable Shih-tzu producer pup from Austin!",
    images: [
      {
        url: "https://dayzee-mg7eu8xcg-junkerris-projects.vercel.app/photos/Playful%20in%20Bed%20chilling.JPEG",
        width: 1200,
        height: 630,
        alt: "Dayzee chilling in bed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayzee | Austin's Favorite Producer Pup",
    description: "Meet Dayzee, the adorable Shih-tzu producer pup from Austin!",
    images: [
      "https://dayzee-mg7eu8xcg-junkerris-projects.vercel.app/photos/Playful%20in%20Bed%20chilling.JPEG",
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen p-6 paper-texture">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="sticker inline-block mb-4">
            <span className="text-4xl">🐾</span>
          </div>
          <h1 className="girly-title text-6xl mb-4 sparkle">
            {dayzeeData.name}
          </h1>
          <p className="girly-subtitle text-2xl">
            Austin's favorite producer pup ✨
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <span className="text-2xl">🌸</span>
            <span className="text-2xl">💕</span>
            <span className="text-2xl">🎀</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">💖</span>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="retro-card p-8 mb-8 heart-decoration">
          {/* Profile Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h2 className="girly-title text-4xl mb-6">About Me 💝</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold text-lg">
                    🎂 Age:
                  </span>
                  <span className="handwritten text-lg">
                    {dayzeeData.age} years old
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold text-lg">
                    🐕 Breed:
                  </span>
                  <span className="handwritten text-lg">
                    {dayzeeData.breed}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold text-lg">
                    📍 Location:
                  </span>
                  <span className="handwritten text-lg">Austin, Texas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold text-lg">
                    🎵 Occupation:
                  </span>
                  <span className="handwritten text-lg">
                    Producer at Rief Productions
                  </span>
                </div>
              </div>
              <div className="scrapbook-card p-6">
                <p className="handwritten text-xl text-gray-700 italic leading-relaxed">
                  &ldquo;{dayzeeData.bio}&rdquo;
                </p>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="photo-frame w-56 h-56 mx-auto mb-4">
                  <img
                    src="/photos/Playful%20in%20Bed%20chilling.JPEG"
                    alt="Dayzee chilling in bed"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="handwritten text-lg text-gray-600 font-medium mb-4">
                  Bed chilling time - my favorite! 😴
                </p>

                {/* Audio Player */}
                {dayzeeData.audioIntro && (
                  <div className="scrapbook-card p-4">
                    <h3 className="girly-subtitle text-xl mb-3">
                      Listen to my intro! 🎧
                    </h3>
                    <audio controls className="w-full">
                      <source src={dayzeeData.audioIntro} type="audio/mp4" />
                      <source src={dayzeeData.audioIntro} type="audio/m4a" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Personality Lists */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Likes */}
            <div className="scrapbook-card p-6">
              <h3 className="girly-title text-2xl mb-4 flex items-center">
                <span className="mr-2">❤️</span>
                Things I Like
              </h3>
              <div className="space-y-3">
                {dayzeeData.likes.map((like, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-pink-400 text-xl">🌸</span>
                    <span className="handwritten text-gray-700">{like}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dislikes */}
            <div className="scrapbook-card p-6">
              <h3 className="girly-title text-2xl mb-4 flex items-center">
                <span className="mr-2">😤</span>
                Things I Don&apos;t Like
              </h3>
              <div className="space-y-3">
                {dayzeeData.dislikes.map((dislike, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-red-400 text-xl">💔</span>
                    <span className="handwritten text-gray-700">{dislike}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loves */}
            <div className="scrapbook-card p-6">
              <h3 className="girly-title text-2xl mb-4 flex items-center">
                <span className="mr-2">💜</span>
                Things I Love
              </h3>
              <div className="space-y-3">
                {dayzeeData.loves.map((love, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-purple-400 text-xl">💖</span>
                    <span className="handwritten text-gray-700">{love}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="girly-title text-3xl mb-6 text-center">
              My Photo Gallery 📸
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {dayzeeData.photos.map((photo) => (
                <div key={photo.id} className="group">
                  <div className="photo-frame hover:scale-105 transition-transform duration-300">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                      <p className="handwritten text-white text-sm font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 mb-8">
          <div className="flex justify-center space-x-4 mb-4">
            <span className="text-2xl">💕</span>
            <span className="text-2xl">🐾</span>
            <span className="text-2xl">✨</span>
            <span className="text-2xl">🎀</span>
            <span className="text-2xl">💖</span>
          </div>
          <p className="handwritten text-lg mb-2">
            Thanks for visiting my profile
          </p>
          <p className="handwritten text-base">
            Made with love in Austin, Texas 💕
          </p>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-24 left-8 text-3xl animate-bounce">🌸</div>
      <div className="fixed top-36 right-10 text-2xl animate-pulse">✨</div>
      <div className="fixed bottom-24 left-12 text-2xl animate-bounce">🎀</div>
      <div className="fixed bottom-36 right-6 text-3xl animate-pulse">💖</div>
      <div className="fixed top-1/2 left-4 text-2xl animate-float">💕</div>
      <div
        className="fixed top-1/3 right-4 text-2xl animate-float"
        style={{ animationDelay: "1s" }}
      >
        🐾
      </div>
    </div>
  );
}
