import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filenest - Automatic File Organization",
  description: "Tame your Downloads folder automatically. Filenest is a desktop file organizer that runs in your system tray and automatically sorts files into categorized folders.",
  keywords: ["file organizer", "downloads folder", "automatic sorting", "desktop app", "file management"],
  authors: [{ name: "Filenest" }],
  openGraph: {
    title: "Filenest - Automatic File Organization",
    description: "Tame your Downloads folder automatically. A desktop file organizer that runs in your system tray.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
