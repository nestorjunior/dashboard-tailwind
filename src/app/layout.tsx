import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Dashboard App with Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app">
          <aside className="border-r border-zinc-200 px-5 py-8">
            SIDEBAR
          </aside>
          <main className="px-4 pb-12 pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
