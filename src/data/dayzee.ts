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
      src: "/photos/Signature%20Look.jpg",
      alt: "Dayzee with her signature tongue-out pose",
      caption: "My signature look - tongue always out! 😛",
      date: "2024",
    },
    {
      id: "2",
      src: "/photos/Playful%20in%20Bed%20chilling.JPEG",
      alt: "Dayzee chilling in bed",
      caption: "Bed chilling time - my favorite! 😴",
      date: "2024",
    },
    {
      id: "3",
      src: "/photos/Before%20and%20After%20.JPG",
      alt: "Dayzee before and after haircut",
      caption: "My before and after haircut transformation! ✂️",
      date: "2024",
    },
    {
      id: "4",
      src: "/photos/Dayzee%20with%20MOO%20MOO.jpeg",
      alt: "Dayzee with her favorite Moo Moo toy",
      caption: "Me and my best friend Moo Moo! 🧸",
      date: "2024",
    },
    {
      id: "5",
      src: "/photos/Dayzee%20camping.jpeg",
      alt: "Dayzee on a camping adventure",
      caption: "Camping adventures with the family! ⛺",
      date: "2024",
    },
    {
      id: "6",
      src: "/photos/Hiking%20Doo.jpeg",
      alt: "Dayzee hiking at Longview Park",
      caption: "Hiking at Longview Park - conquering fears! 🏞️",
      date: "2024",
    },
    {
      id: "7",
      src: "/photos/Dayzee%20Road%20Trip.jpeg",
      alt: "Dayzee on a road trip",
      caption: "Road trip vibes with my parents! 🚗",
      date: "2024",
    },
    {
      id: "8",
      src: "/photos/Dayzee%20traveling.jpeg",
      alt: "Dayzee traveling and exploring",
      caption: "Exploring new places together! ✈️",
      date: "2024",
    },
    {
      id: "9",
      src: "/photos/Austin-vibes.jpeg",
      alt: "Dayzee enjoying Austin vibes",
      caption: "Living my best Austin life! 🌆",
      date: "2024",
    },
    {
      id: "10",
      src: "/photos/Austin%20dating%20vibes.jpeg",
      alt: "Dayzee on a date in Austin",
      caption: "Date night in Austin with my humans! 💕",
      date: "2024",
    },
    {
      id: "11",
      src: "/photos/Laying.jpeg",
      alt: "Dayzee laying down and relaxing",
      caption: "Just laying around, being adorable! 😌",
      date: "2024",
    },
    {
      id: "12",
      src: "/photos/IMG_9836.jpeg",
      alt: "Dayzee in a candid moment",
      caption: "Another day, another cute photo! 📸",
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
