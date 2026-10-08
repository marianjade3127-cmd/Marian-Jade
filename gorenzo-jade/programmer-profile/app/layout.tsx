import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marian Jade Gorenzo | Programmer Profile",
  description: "Programmer profile of Marian Jade Gorenzo.",
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
