import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zongmian Wu | Scientific Computing & Robotics",
  description:
    "Academic portfolio of Zongmian Wu, MPhil candidate in Scientific Computing (HPC) at the University of Cambridge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 pt-20 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}