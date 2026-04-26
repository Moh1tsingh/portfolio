import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex pt-20 sm:pt-28 justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl font-semibold text-[var(--text-faint)]">
          404
        </h1>
        <p className="text-base text-[var(--text-muted)] ">
          Page not found
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="text-[15px] text-[var(--accent)] hover:text-[var(--text)] transition-colors duration-200"
          >
            go home &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
