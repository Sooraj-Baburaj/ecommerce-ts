import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Flowbite } from "flowbite-react";
import customTheme from "@/src/theme/flowbiteCustomTheme";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CORAL",
  description:
    "Explore and shop many different collections from various brands here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
      </body>
    </html>
  );
}
