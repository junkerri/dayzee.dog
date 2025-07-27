import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dayzee's Profile | Austin's Favorite Producer Pup",
  description:
    "A cute profile for Dayzee, the well-mannered Shih-tzu producer pup from Austin, Texas.",
  keywords: "Dayzee, dog, Shih-tzu, Austin, producer, profile, cute",
  openGraph: {
    title: "Dayzee's Profile",
    description: "Austin's favorite producer pup",
    type: "website",
  },
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
