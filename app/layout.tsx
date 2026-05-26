import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsha Shetty | Creative Full-Stack Engineer & Next.js Developer",
  description: "Explore the interactive engineering portfolio of Harsha Shetty, showcasing projects in Next.js, React, Three.js, and advanced web technologies.",
  keywords: [
    "Harsha Shetty",
    "Full-Stack Engineer",
    "Next.js Developer",
    "React Developer",
    "Creative Developer",
    "Bengaluru Software Engineer",
    "Three.js Portfolio",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Harsha Shetty", url: "https://github.com/notharshagithub" }],
  creator: "Harsha Shetty",
  openGraph: {
    title: "Harsha Shetty | Creative Full-Stack Engineer & Next.js Developer",
    description: "Explore the interactive engineering portfolio of Harsha Shetty, showcasing projects in Next.js, React, Three.js, and advanced web technologies.",
    url: "https://github.com/notharshagithub",
    siteName: "Harsha Shetty Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Shetty | Creative Full-Stack Engineer & Next.js Developer",
    description: "Explore the interactive engineering portfolio of Harsha Shetty, showcasing projects in Next.js, React, Three.js, and advanced web technologies.",
    creator: "@harshashetty01",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
