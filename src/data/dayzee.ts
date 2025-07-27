export interface DayzeeProfile {
  name: string;
  pronouns: string;
  age: number;
  breed: string;
  bio: string;
  likes: string[];
  dislikes: string[];
  loves: string[];
  photos: Photo[];
  audioIntro?: string;
  nowPlaying?: {
    title: string;
    artist: string;
    url?: string;
  };
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  date?: string;
}

export const dayzeeData: DayzeeProfile = {
  name: "Dayzee",
  pronouns: "she/her",
  age: 9,
  breed: "Shih-tzu (Tan & White)",
  bio: "Well-mannered producer pup with a permanent tongue-out pose. Shy but loving, conquering fears one beach run at a time! 🐾",
  likes: [
    "Chicken & eggs in the morning 🍗",
    "Neighborhood walks 🚶‍♀️",
    "Hiking at Longview Park 🏞️",
    "Hanging in the studio 🎵",
    "Playing with Moo Moo toy 🧸",
    "Road trips with parents 🚗",
    "BYOB group in Austin 🍺",
    "Her 6 PM dinner time ⏰",
  ],
  dislikes: [
    "Thunderstorms ⚡",
    "Fireworks 🎆",
    "Fart noises 💨",
    "CO2 😤",
    "Faces near her face 😰",
    "Being left alone 😢",
    "Getting wet 💧",
    "Loud studio noises 🎚️",
  ],
  loves: [
    "Her parents unconditionally 💕",
    "Moo Moo toy after dinner 🧸",
    "Cuddles on her own terms 🫂",
    "Studio music sessions 🎼",
    "Backyard hangouts 🌳",
    "Bed chilling time 😴",
    "Her nicknames (Doo Doo, Cutey McDoo, etc.) 🏷️",
    "Conquering fears (like running to parents in ocean) 🌊",
  ],
  photos: [
    {
      id: "1",
      src: "/photos/Signature Look.jpg",
      alt: "Dayzee with her signature tongue-out pose",
      caption: "My signature look - tongue always out! 😛",
      date: "2024",
    },
    {
      id: "2",
      src: "/photos/Playful in Bed chilling.JPEG",
      alt: "Dayzee chilling in bed",
      caption: "Bed chilling time - my favorite! 😴",
      date: "2024",
    },
    {
      id: "3",
      src: "/photos/Before and After .JPG",
      alt: "Dayzee before and after haircut",
      caption: "My before and after haircut transformation! ✂️",
      date: "2024",
    },
  ],
  nowPlaying: {
    title: "Studio Session Vibes",
    artist: "Dayzee & Friends",
    url: "/audio/studio-session.mp3",
  },
  audioIntro: "/audio/Dayzee intro.m4a",
};
