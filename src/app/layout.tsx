import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High Quality Free Images & Wallpapers",
  description: "Using Unsplash SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Link href="/favicon.ico" rel="icon" />
      </head>
      <body className={sora.className}>
        <ThemeProvider defaultTheme="system" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
