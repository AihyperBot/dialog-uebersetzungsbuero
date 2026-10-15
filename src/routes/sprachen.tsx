import { useMemo, useState } from "react";
import { createFileRoute, Link, stripSearchParams } from "@tanstack/react-router";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { foldLanguage, languageInitial, LANGUAGES } from "@/data/languages";
import { site } from "@/data/site";

type SprachenSearch = { q?: string };

export const Route = createFileRoute("/sprachen")({
  validateSearch: (search: Record<string, unknown>): SprachenSearch => {
    if (typeof search.q !== "string") return {};
    const q = search.q.slice(0, 80).trim();
    return q ? { q } : {};
  },
  search: {
    middlewares: [stripSearchParams({ q: "" })],
  },
  head: () => ({
    meta: [
      { title: `Sprachen | ${site.documentTitle}` },
      {
        name: "description",
        content:
          "Sprachverzeichnis des Dolmetscherbüros Dialog: Kurdisch in allen Dialekten, Türkisch, Aserbaidschanisch, Turkmenisch und praktisch alle weiteren Sprachen.",
      },
    ],
  }),
  component: SprachenPage,
});

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function SprachenPage() {
  const { q = "" } = Route.useSearch();
  const [query, setQuery] = useState(q);
  const foldedQuery = foldLanguage(query.trim());

  const groups = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const name of LANGUAGES) {
      if (foldedQuery && !foldLanguage(name).includes(foldedQuery)) continue;
      const letter = languageInitial(name);
      const list = map.get(letter) ?? [];
      list.push(name);
      map.set(letter, list);
    }
    return LETTERS.filter((letter) => map.has(letter)).map((letter) => ({
      letter,
      names: map.get(letter) ?? [],
    }));
  }, [foldedQuery]);

  const visibleCount = groups.reduce((sum, group) => sum + group.names.length, 0);

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Sprachverzeichnis"
        title="Praktisch alle Sprachen. Ein klarer Schwerpunkt."
        lede="Wir haben uns auf Kurdisch in allen Dialekten sowie auf Türkisch, Aserbaidschanisch und Turkmenisch spezialisiert — und bieten darüber hinaus das folgende Verzeichnis an."
      />
      <div className="border-b border-line bg-paper-deep">
        <Container className="py-5">
          <label htmlFor="sprachsuche" className="text-sm font-semibold">
            Sprache suchen
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              id="sprachsuche"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="z. B. Sorani, Dari, Gebärde"
              className="h-11 w-full border border-line bg-surface px-3 sm:max-w-md"
            />
            <p className="text-sm text-muted">
              {visibleCount} von {LANGUAGES.length} Einträgen
            </p>
          </div>
          <div className="mt-4 flex gap-1 overflow-x-auto pb-1" aria-label="Alphabet">
            {LETTERS.map((letter) => {
              const present = groups.some((group) => group.letter === letter);
              return present ? (
                <a
                  key={letter}
                  href={`#buchstabe-${letter}`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-surface text-sm font-semibold hover:border-seal"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-transparent text-sm text-muted"
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </Container>
      </div>
      <section className="py-12">
        <Container>
          {groups.length === 0 ? (
            <div className="border border-line bg-surface p-8">
              <h2 className="font-display text-3xl">Keine passende Sprache im Verzeichnis</h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Fragen Sie uns trotzdem an. Nicht jeder Dialekt steht einzeln in der Liste, die
                Verfügbarkeit prüfen wir im Einzelfall.
              </p>
              <Link
                to="/kontakt"
                className="mt-6 inline-flex h-11 items-center bg-seal px-5 text-sm font-semibold text-on-seal"
              >
                Sprache anfragen
              </Link>
            </div>
          ) : (
            <div className="space-y-10">
              {groups.map((group) => (
                <section key={group.letter} id={`buchstabe-${group.letter}`} className="scroll-mt-36">
                  <h2 className="border-b border-line pb-2 font-display text-3xl text-brass">{group.letter}</h2>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {group.names.map((name) => (
                      <li key={name}>
                        <Link
                          to="/kontakt"
                          search={{ sprache: name }}
                          className="flex min-h-11 items-center border border-line bg-surface px-3 text-sm hover:border-seal hover:text-seal"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </Container>
      </section>
    </SiteLayout>
  );
}
