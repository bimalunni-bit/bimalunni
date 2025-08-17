export const metadata = { title: "About" };

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="text-neutral-700">
        I&apos;m Bimal Unnikrishnan. A Creator. Showrunner. A work-in-progress piece.
        Currently heading &lsquo;Shark Tank India&rsquo; as its Showrunner.
        You can contact me on{" "}
        <a href="mailto:bimal@brkthroughmedia.com" className="underline">
          bimal@brkthroughmedia.com
        </a>.
      </p>
    </section>
  );
}
