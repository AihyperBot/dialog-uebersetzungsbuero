import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, SiteLayout } from "@/components/site/shell";
import { site } from "@/data/site";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [{ title: `Seite nicht gefunden | ${site.documentTitle}` }],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <SiteLayout>
      <Container className="py-24">
        <p className="text-xs font-semibold tracking-eyebrow text-brass uppercase">404</p>
        <h1 className="mt-3 font-display text-5xl">Diese Seite gibt es nicht.</h1>
        <p className="mt-4 max-w-xl text-ink-soft">
          Der gesuchte Pfad gehört nicht zum Büroauftritt. Zurück zur Startseite oder direkt zur
          Anfrage.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="inline-flex h-11 items-center justify-center bg-seal px-6 text-sm font-semibold text-on-seal">
            Startseite
          </Link>
          <Link
            to="/kontakt"
            className="inline-flex h-11 items-center justify-center border border-line-strong px-6 text-sm font-semibold"
          >
            Kontakt
          </Link>
        </div>
      </Container>
    </SiteLayout>
  );
}
