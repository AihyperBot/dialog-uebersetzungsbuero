import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "Es ist ein unerwarteter Fehler aufgetreten. Bitte laden Sie die Seite neu.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-paper px-6 text-center text-ink">
      <p className="text-xs font-semibold tracking-eyebrow text-seal uppercase">Hinweis</p>
      <h1 className="font-display text-4xl">Etwas ist schiefgelaufen</h1>
      <p className="max-w-md text-sm break-words text-ink-soft">{errorMessage(error)}</p>
    </main>
  );
}
