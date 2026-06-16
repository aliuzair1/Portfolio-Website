import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Uzair | Cybersecurity Engineer",
  description: "Cybersecurity Engineer specializing in detection engineering, threat hunting, AI security, and cloud-native security solutions.",
  keywords: ["cybersecurity", "security engineer", "detection engineering", "penetration testing", "AI security", "cloud security"],
  authors: [{ name: "Ali Uzair" }],
  openGraph: {
    title: "Ali Uzair | Cybersecurity Engineer",
    description: "Building intelligent security systems, threat detection pipelines, and next-generation cybersecurity products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
