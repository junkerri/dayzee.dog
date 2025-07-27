import { dayzeeData } from "@/data/dayzee";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {dayzeeData.name}
          </h1>
          <p className="text-xl text-gray-600">
            Austin's favorite producer pup
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          {/* Profile Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Me
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold">Age:</span>
                  <span className="text-gray-700">
                    {dayzeeData.age} years old
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold">Breed:</span>
                  <span className="text-gray-700">{dayzeeData.breed}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold">Location:</span>
                  <span className="text-gray-700">Austin, Texas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-500 font-semibold">
                    Occupation:
                  </span>
                  <span className="text-gray-700">
                    Producer at Rief Productions
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "{dayzeeData.bio}"
              </p>
            </div>

            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="/photos/Playful in Bed chilling.JPEG"
                    alt="Dayzee chilling in bed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 font-medium mb-4">
                  Bed chilling time - my favorite!
                </p>

                {/* Audio Player */}
                {dayzeeData.audioIntro && (
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Listen to my intro!
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
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-pink-600 mb-4 flex items-center">
                <span className="mr-2">❤️</span>
                Things I Like
              </h3>
              <div className="space-y-2">
                {dayzeeData.likes.map((like, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-pink-400">•</span>
                    <span className="text-gray-700 text-sm">{like}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dislikes */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center">
                <span className="mr-2">😤</span>
                Things I Don't Like
              </h3>
              <div className="space-y-2">
                {dayzeeData.dislikes.map((dislike, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-red-400">•</span>
                    <span className="text-gray-700 text-sm">{dislike}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loves */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center">
                <span className="mr-2">💜</span>
                Things I Love
              </h3>
              <div className="space-y-2">
                {dayzeeData.loves.map((love, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span className="text-gray-700 text-sm">{love}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              My Photo Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {dayzeeData.photos.map((photo) => (
                <div key={photo.id} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-xs font-medium">
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
        <div className="text-center text-gray-500">
          <p className="mb-2">Thanks for visiting my profile</p>
          <p className="text-sm">Made with love in Austin, Texas</p>
        </div>
      </div>
    </div>
  );
}
