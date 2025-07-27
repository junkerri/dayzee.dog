import { Metadata } from "next";
import Guestbook from "@/components/Guestbook";

export const metadata: Metadata = {
  title: "Dayzee's Guestbook | Leave a Message for Austin's Producer Pup",
  description:
    "Sign Dayzee's guestbook and leave a message for Austin's favorite producer pup! Share your thoughts, memories, or just say hello to this adorable Shih-tzu.",
  keywords:
    "Dayzee guestbook, sign guestbook, leave message, Austin dog, producer pup, Shih-tzu guestbook, pet guestbook",
  openGraph: {
    title: "Dayzee's Guestbook | Leave a Message",
    description:
      "Sign Dayzee's guestbook and leave a message for this adorable producer pup!",
    images: [
      {
        url: "https://dayzee-bbf7nsifs-junkerris-projects.vercel.app/photos/Signature%20Look.jpg",
        width: 1200,
        height: 630,
        alt: "Dayzee with her signature tongue-out pose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayzee's Guestbook | Leave a Message",
    description: "Sign Dayzee's guestbook and leave a message!",
    images: [
      "https://dayzee-bbf7nsifs-junkerris-projects.vercel.app/photos/Signature%20Look.jpg",
    ],
  },
};

export default function GuestbookPage() {
  return <Guestbook />;
}
