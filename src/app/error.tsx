"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 items-center">
      <Container className="py-24 text-center">
        <p className="font-mono text-sm text-accent">Error</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={() => reset()} size="lg">
            Try again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back home
          </Button>
        </div>
      </Container>
    </main>
  );
}
