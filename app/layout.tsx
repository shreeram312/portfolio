import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/google-analytics";
import { Databuddy } from "@databuddy/sdk";

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
  title: "Shreeram Mutukundu ",
  description: "Shreeram Mutukundu's Portfolio",
  keywords: [
    "Shreeram Mutukundu",
    "Shreeram",
    "Mutukundu",
    "Portfolio",
    "https://github.com/shreeram312",
    "AI",
    "Full Stack Developer",
    "Software Engineer",
    "shreeram312",
    "realshreeram312",
    "AI Developer",
    "AI Engineer",
    "Axentia",
    "https://axentia.in",
    "G.R.E.G",
    "RiskAssist",
    "Contentport",
    "contentport.io",
    "Contentport Platform",
  ],
  openGraph: {
    title: "Shreeram Mutukundu",
    description:
      "Shreeram Mutukundu's Portfolio, Software Engineer from Pune, India",
    url: "https://shreerammutukundu.in",
    siteName: "Shreeram Mutukundu",
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
        <Databuddy
          clientId="u0syca9wZFhc8JqnnlZVp"
          enableBatching={true}
          trackScreenViews={true} // Track page/route changes
          trackPerformance={true} // Track loading times
          trackWebVitals={true} // Track Core Web Vitals
          trackErrors={true} // Track JavaScript errors
          // Optional tracking (enable as needed)
          trackSessions={true} // Track user sessions
          trackOutgoingLinks={false} // Track external link clicks
          trackScrollDepth={false} // Track scroll behavior
          trackEngagement={false} // Track user engagement
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
