import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const sans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "React Next.js Tester",
  description:
    "Project to test new candidates with basic app requirements for a Next.js job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", sans.variable)}>
        <main className="min-h-screen bg-background">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
