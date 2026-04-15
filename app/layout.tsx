import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "Zongmian Wu | Scientific Computing & Robotics",
  description:
    "Academic portfolio of Zongmian Wu, MPhil candidate in Scientific Computing (HPC) at the University of Cambridge.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="IFUiTpeVTgOEvLHgIZIBHDaY--3ABITDKrGGIk4PFwM"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}