import "./globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { LayoutProps } from "@/types/navigation";
import type { Metadata } from "next";
import { NavigationMenu } from "@/components/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ViewTransitions } from "next-view-transitions";
import { cn } from "@/utils";
import localFont from "next/font/local";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hermanngminer.edu.al"),
  title: {
    default: "Hermann Gmeiner",
    template: "%s | Hermann Gmeiner",
  },
  description:
    "Shkolla 'Hermann Gmeiner' është shkollë profesionale për TIK (Teknologji Informacioni dhe Komunikimi) e themeluar ne 2014. Programet e shkollës TIK “HERMANN GMEINER”, bazohen tek modeli dhe profili i shkollës austriake, në përgatitjen e programuesve në informatikë.",
  openGraph: {
    title: "Hermann Gmeiner",
    description:
      "Shkolla 'Hermann Gmeiner' është shkollë profesionale për TIK (Teknologji Informacioni dhe Komunikimi) e themeluar ne 2014. Programet e shkollës TIK “HERMANN GMEINER”, bazohen tek modeli dhe profili i shkollës austriake, në përgatitjen e programuesve në informatikë.",
    url: "https://www.hermanngminer.edu.al",
    siteName: "Hermann Gmeiner",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hermann Gmeiner",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const ClashDisplay = localFont({
  src: [{ path: "../../public/fonts/clash-display.ttf" }],
  weight: "400 700",
  display: "swap",
  variable: "--font-clash-display",
});

export default ({ children }: LayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "bg-background",
            GeistMono.variable,
            GeistSans.variable,
            ClashDisplay.variable,
          )}
        >
          <main
            className={
              "relative mx-auto h-screen min-h-screen w-screen font-sans antialiased"
            }
          >
            <ThemeProvider attribute="class" defaultTheme="light">
              <NavigationMenu />
              {children}
              <Toaster />
            </ThemeProvider>
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
};
