import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      <body className={sora.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
