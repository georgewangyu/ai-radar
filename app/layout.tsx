import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://airadar.snackoverflowgeorge.com"),
  title: "AI Radar",
  description:
    "AI crash-course paper recommendations, searchable reading paths, weekly feeds, and an installable agent skill.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: "AI Radar",
    description:
      "AI crash-course paper recommendations, searchable reading paths, weekly feeds, and an installable agent skill.",
    url: "https://airadar.snackoverflowgeorge.com",
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
