import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soul Tribe — Find Your People, Find Your Purpose",
  description: "A sacred space for spiritual seekers to find their tribe — authentic friendships, conscious relationships, meditation partners, and a community that honors your journey.",
  keywords: ["spiritual dating", "conscious relationships", "soul tribe", "spiritual community", "meditation partner", "mindfulness", "personal growth", "conscious dating", "spiritual friends"],
  openGraph: {
    title: "Soul Tribe — Find Your People, Find Your Purpose",
    description: "A sacred space for spiritual seekers to find their tribe — authentic friendships, conscious relationships, and meditation partners.",
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
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%234A3F6B'/><circle cx='50' cy='50' r='20' fill='none' stroke='%23C4A55A' stroke-width='3'/><circle cx='50' cy='35' r='8' fill='%23C4A55A'/></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}