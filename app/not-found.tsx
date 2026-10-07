import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-zinc-950">Page not found</h1>
        <Link href="/" className="mt-6 inline-block rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
          Return home
        </Link>
      </div>
    </main>
  );
}
