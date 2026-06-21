import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grasecode.com"),
  title: {
    default: "GraseCode | Premium IT Solutions & Software Architectures",
    template: "%s | GraseCode",
  },
  description: "GraseCode delivers cutting-edge web applications, cloud infrastructure, and premium IT consulting to scale your business worldwide.",
  keywords: [
    "GraseCode",
    "software architecture",
    "web application",
    "cloud infrastructure",
    "IT consulting",
    "premium web development",
    "Next.js developer",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grasecode.com",
    siteName: "GraseCode",
    title: "GraseCode | Premium IT Solutions & Software Architectures",
    description: "GraseCode delivers cutting-edge web applications, cloud infrastructure, and premium IT consulting to scale your business worldwide.",
    images: [
      {
        url: "/grasecode-linkedin-logo.png",
        width: 800,
        height: 800,
        alt: "GraseCode Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GraseCode | Premium IT Solutions & Software Architectures",
    description: "GraseCode delivers cutting-edge web applications, cloud infrastructure, and premium IT consulting.",
    images: ["/grasecode-linkedin-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#ffffff' }}>
      <body className={`${outfit.variable} ${playfair.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
