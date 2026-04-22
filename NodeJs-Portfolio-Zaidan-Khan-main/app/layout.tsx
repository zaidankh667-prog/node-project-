import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Optimize font loading
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Zaidan Khan | Freelancer And Web Developer",
  description: "Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.",
  keywords: ["Zaidan Khan", "Web Developer", "Freelance Developer", "Portfolio", "Frontend", "Backend", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Python", "Express", "Java", "MySQL"],
  authors: [{ name: "Zaidan Khan", url: "https://github.com/zaidankh667-prog" }],
  creator: "Zaidan Khan",
  metadataBase: new URL("https://yourwebsite.com"),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Zaidan Khan | Freelancer And Web Developer",
    description: "Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.",
    siteName: "Zaidan Khan | Freelancer And Web Developer",
    images: [
      {
        url: "/images/socialshare.png",
        width: 1200,
        height: 630,
        alt: "Zaidan Khan - Web Developer Portfolio",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaidan Khan | Freelancer And Web Developer",
    description: "Freelance web developer with 3+ years of experience creating responsive, user-friendly websites and web applications.",
    images: ["/images/socialshare.png"],
    creator: "@zaidankhan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://mehedims.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Preconnect to domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical assets */}
        <link rel="preload" href="/images/socialshare.png" as="image" type="image/png" />

        {/* Add security headers */}
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

        {/* Add performance hints to browser */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
