import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="content" tabIndex={-1} className="py-24 sm:py-32">
      <Container>
        <p className="font-mono text-xs text-muted">404</p>
        <h1 className="mt-4 max-w-[12ch] font-serif text-5xl tracking-tight text-ink sm:text-6xl">
          This page is not on the site.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-paper hover:bg-accent-strong"
        >
          Back home
        </Link>
      </Container>
    </main>
  );
}
