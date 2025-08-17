import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Bimal Unni", template: "%s · Bimal Unni" },
  description: "Personal site of Bimal Unni",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        <header className="mx-auto max-w-3xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold">Bimal Unni</Link>
          <nav className="space-x-6 text-sm">
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-3xl px-4 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Bimal Unni
        </footer>
      </body>
    </html>
  );
}
