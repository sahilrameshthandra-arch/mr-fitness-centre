import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://mrfitnesscenter.com"),
  title: {
    default: "MR FITNESS CENTER | Expert Coaching & Goal-Focused Fitness in Lower Parel, Mumbai",
    template: "%s | MR FITNESS CENTER",
  },
  description: "Strength training, personal coaching, CrossFit, Kickboxing, Zumba, Yoga and goal-focused fitness programs in Lower Parel, Mumbai. 4.9★ Google rating. Book your free trial today!",
  keywords: [
    "gym in Lower Parel",
    "fitness center Mumbai",
    "personal trainer Lower Parel",
    "strength training Mumbai",
    "CrossFit Lower Parel",
    "kickboxing classes Mumbai",
    "Zumba classes Lower Parel",
    "yoga studio Mumbai",
    "weight loss program Mumbai",
    "muscle gain training",
    "gym near Currey Road",
    "best gym in Lower Parel",
  ],
  authors: [{ name: "MR FITNESS CENTER" }],
  creator: "MR FITNESS CENTER",
  publisher: "MR FITNESS CENTER",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mrfitnesscenter.com",
    siteName: "MR FITNESS CENTER",
    title: "MR FITNESS CENTER | Expert Coaching & Goal-Focused Fitness in Lower Parel",
    description: "Strength training, personal coaching, CrossFit, Kickboxing, Zumba, Yoga and goal-focused fitness programs. 4.9★ Google rating. Book your free trial!",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MR FITNESS CENTER - Expert Fitness Coaching in Lower Parel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR FITNESS CENTER | Expert Coaching & Goal-Focused Fitness",
    description: "Strength training, personal coaching, CrossFit, Kickboxing, Zumba, Yoga in Lower Parel. 4.9★ rating. Free trial available!",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "MR FITNESS CENTER",
              description: "Strength training, personal coaching, CrossFit, Kickboxing, Zumba, Yoga and goal-focused fitness programs in Lower Parel, Mumbai.",
              url: "https://mrfitnesscenter.com",
              telephone: "+91-97734-32221",
              email: "info@mrfitnesscenter.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ground Floor, Govardhan, B-1, Plot-275, NM Joshi Marg",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400013",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 19.0012,
                longitude: 72.8298,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "06:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
              areaServed: {
                "@type": "City",
                name: "Mumbai",
              },
              hasMap: "https://goo.gl/maps/example",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "132",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Rajesh K." },
                  datePublished: "2025-06-15",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "The trainers here are incredibly knowledgeable and provide personalized guidance. The environment is clean, welcoming, and motivating.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Priya S." },
                  datePublished: "2025-05-20",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Best gym in Lower Parel! The staff is friendly and always ready to help. Equipment is well-maintained, and the trainers genuinely care about your progress.",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}