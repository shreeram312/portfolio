import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Databuddy } from "@databuddy/sdk/react";
import GoogleAnalytics from "@/components/google-analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeBootScript } from "@/components/theme-boot-script";
import { scheduledTheme } from "@/lib/theme-schedule";
import { profile } from "@/data/profile";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} · ${profile.roles[0]}`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.name}'s portfolio. ${profile.roles[0]} from ${profile.location.city}, ${profile.location.country}.`,
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
    "Koko",
    "koko.vet",
    "Axentia",
    "https://axentia.in",
    "Transcript Genie",
    "Clauseborne",
    "G.R.E.G",
    "RiskAssist",
    "Contentport",
    "contentport.io",
    "Contentport Platform",
  ],
  openGraph: {
    title: profile.name,
    description: `${profile.name}'s portfolio, ${profile.roles[0]} from ${profile.location.city}, ${profile.location.country}`,
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    creator: "@realshreeram312",
  },
  verification: {
    google: "LUk-7gaPT_ZGvaIYkLOu_QAL7xD64rSRpJEUmS6C2_E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <ThemeBootScript />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme={scheduledTheme()}
          enableSystem={false}
          disableTransitionOnChange
        >
          <Databuddy
            clientId="u0syca9wZFhc8JqnnlZVp"
            enableBatching={true}
            trackPerformance={true}
            trackWebVitals={true}
            trackErrors={true}
            trackOutgoingLinks={false}
            trackScrollDepth={false}
          />
          <GoogleAnalytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
