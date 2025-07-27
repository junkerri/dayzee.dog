import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dayzee's Profile | Austin's Favorite Producer Pup",
  description:
    "Meet Dayzee, the adorable 9-year-old Shih-tzu producer pup from Austin, Texas. Well-mannered with a permanent tongue-out pose, she loves studio sessions, hiking, and her Moo Moo toy. Discover her likes, dislikes, and adventures!",
  keywords:
    "Dayzee, dog, Shih-tzu, Austin, producer, profile, cute, pet, studio, hiking, Moo Moo, Texas, well-mannered, tongue-out",
  authors: [{ name: "Dayzee's Parents" }],
  creator: "Dayzee's Family",
  publisher: "Dayzee.dog",
  robots: "index, follow",
  openGraph: {
    title: "Dayzee's Profile | Austin's Favorite Producer Pup",
    description:
      "Meet Dayzee, the adorable 9-year-old Shih-tzu producer pup from Austin, Texas. Well-mannered with a permanent tongue-out pose!",
    type: "website",
    url: "https://dayzee.dog",
    siteName: "Dayzee's Profile",
    images: [
      {
        url: "/photos/Signature Look.jpg",
        width: 1200,
        height: 630,
        alt: "Dayzee with her signature tongue-out pose",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayzee's Profile | Austin's Favorite Producer Pup",
    description:
      "Meet Dayzee, the adorable 9-year-old Shih-tzu producer pup from Austin, Texas!",
    images: ["/photos/Signature Look.jpg"],
    creator: "@dayzee_dog",
  },
  alternates: {
    canonical: "https://dayzee.dog",
  },
  category: "Pets",
  classification: "Pet Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
