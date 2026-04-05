import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GraseCode | Premium IT Solutions",
  description: "GraseCode provides professional web development, cloud solutions, and IT consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#050505' }}>
      <body className={`${inter.variable} antialiased`}>
        <LoadingScreen />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
