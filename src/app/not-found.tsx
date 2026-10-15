import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium tracking-widest text-white/60">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">
        This route does not exist
      </h1>
      <p className="mt-4 text-white/70">
        The page you are looking for may have moved. Head back home or send us
        an enquiry and we will help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Back to home
        </Link>
        <Link
          href="/reach-us"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Reach us
        </Link>
      </div>
    </section>
  );
}