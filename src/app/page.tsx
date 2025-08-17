// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Bimal Unni</h1>
        <p className="text-lg text-neutral-700">
          Welcome to my site. Work in progress.
        </p>
        <div>
          <Link
            href="/about"
            className="inline-block rounded-xl px-4 py-2 font-medium border border-neutral-200 shadow hover:shadow-md transition"
          >
            About
          </Link>
        </div>
      </section>
    </main>
  );
}
