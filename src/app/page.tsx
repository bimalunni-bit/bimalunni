import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="mx-auto max-w-3xl px-4 py-16 space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Bimalunni</h1>
        <p className="text-lg text-neutral-600">Welcome to my site. Work in progress 🚧</p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="/about"
            className="rounded-xl px-4 py-2 font-medium border border-neutral-200 shadow hover:shadow-md transition"
          >About</a>
          <button
            type="button"
            className="rounded-xl px-4 py-2 font-medium bg-black text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
          >Tailwind ✓</button>
        </div>

        <div className="rounded-2xl border border-dashed p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
          <p className="text-sm sm:text-base">
            If this box has rounded corners, a dashed border, and a soft gradient, Tailwind is working.
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            Resize the window: this text grows at the <code>sm</code> breakpoint.
          </p>
        </div>
      </section>
    </main>
  );
}