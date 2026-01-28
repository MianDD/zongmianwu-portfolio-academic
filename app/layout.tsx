import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zongmian Wu | Scientific Computing & Robotics",
  description:
    "Academic portfolio of Zongmian Wu, MPhil candidate in Scientific Computing (High Performance Computing) at the University of Cambridge, focusing on robotics, scientific computing, and AI for engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
