"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isUnlockPage = pathname === "/unlock";

  if (isUnlockPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 pt-20 pb-16">
        {children}
      </main>
      <Footer />
    </>
  );
}