import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/bottom-nav";

export const metadata: Metadata = {
  title: "Worka – Book office space",
  description: "Best-in-class app to book office space, meeting rooms and coworking."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-worka-black flex flex-col">
        <div className="flex-1 flex flex-col max-w-md mx-auto w-full main-content">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
