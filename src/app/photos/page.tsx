import { Metadata } from "next";
import { dayzeeData } from "@/data/dayzee";
import ScrapbookGrid from "@/components/ScrapbookGrid";

export const metadata: Metadata = {
  title: "Dayzee's Photo Gallery | Austin's Favorite Producer Pup",
  description:
    "Explore Dayzee's photo gallery featuring her adventures, studio sessions, hiking trips, and adorable moments with her Moo Moo toy. See the well-mannered Shih-tzu in action!",
  keywords:
    "Dayzee photos, dog gallery, Shih-tzu pictures, Austin dog, producer pup photos, Moo Moo toy, hiking photos, studio sessions",
  openGraph: {
    title: "Dayzee's Photo Gallery",
    description:
      "Explore Dayzee's adventures through photos - from studio sessions to hiking trips!",
    images: [
      {
        url: "/photos/Dayzee%20with%20MOO%20MOO.jpeg",
        width: 1200,
        height: 630,
        alt: "Dayzee with her favorite Moo Moo toy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayzee's Photo Gallery",
    description: "Explore Dayzee's adventures through photos!",
    images: ["/photos/Dayzee%20with%20MOO%20MOO.jpeg"],
  },
};

export default function Photos() {
  return <ScrapbookGrid photos={dayzeeData.photos} />;
}
