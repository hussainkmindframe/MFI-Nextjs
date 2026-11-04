import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthInitializer from "@/components/AuthInitializer";

export const metadata = {
  title: {
    default: "Digital Marketing & Advertising Agency in India | Mindframe India",
    template: "%s | Mindframe India",
  },
  description:
    "Leading digital marketing & advertising agency in India offering web development, mobile app development, branding, SEO, and media buying. Grow your business with Mindframe.",
  keywords:
    "digital marketing agency, advertising agency India, web development, mobile app development, branding services, media buying, SEO company",
  authors: [{ name: "Mindframe India" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://mindframeindia.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mindframe India",
    title: "Mindframe India - Digital Marketing & Advertising Agency",
    description:
      "Leading digital marketing & advertising agency in India offering web development, mobile app development, branding, and media buying services.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mindframeindia",
    creator: "@mindframeindia",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  other: {
    "theme-color": "#c9a84c",
    language: "English",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: "#363636", color: "#fff" },
            success: { style: { background: "#10b981" } },
            error: { style: { background: "#ef4444" } },
          }}
        />
        <AuthInitializer>{children}</AuthInitializer>
      </body>
    </html>
  );
}

