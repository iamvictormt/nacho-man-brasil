"use client";
import { useEffect } from "react";
export default function ErrorPage({
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
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-xl font-semibold">Não foi possível carregar esta página</h1>
        <p className="mt-2 text-muted-foreground">Tente novamente em alguns instantes.</p>
        <button
          onClick={reset}
          className="mt-6 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
