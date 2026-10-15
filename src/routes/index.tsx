import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow, SiteLayout } from "@/components/site/shell";
import { FOCUS_LANGUAGES, LANGUAGES } from "@/data/languages";
import { fields, qualifications, references, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.documentTitle} | Dolmetschen und Übersetzen` },
      {
        name: "description",
        content:
          "Zuverlässig, schnell, freundlich, kompetent: Dolmetscherbüro Dialog vermittelt professionelle Dolmetscher und fachspezifische Übersetzer, bundesweit seit 2012.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <section className="border-b border-line bg-surface">
        <Container className="grid items-stretch gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <Eyebrow>Dolmetscher- & Übersetzungsbüro · seit {site.founded}</Eyebrow>
            <h1 className="mt-4 font-display text-5xl text-ink sm:text-6xl">
              Professionelle Dolmetscher und fachspezifische Übersetzer.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              {site.shortName} ist Ihr zuverlässiger und kompetenter Ansprechpartner bei der
              Vermittlung von professionellen Dolmetschern und Übersetzern. Wo immer Sie sind und
              wann immer Sie wollen — bundesweit, in praktisch allen Sprachen.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
              {site.motto.map((word) => (
                <li key={word} className="bg-paper px-3 py-4 font-display text-2xl text-ink">
                  {word}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/kontakt"
                className="inline-flex h-11 items-center justify-center bg-seal px-6 text-sm font-semibold text-on-seal hover:bg-seal-deep"
              >
                Anfrage stellen
              </Link>
              <Link
                to="/sprachen"
                className="inline-flex h-11 items-center justify-center border border-line-strong bg-surface px-6 text-sm font-semibold text-ink hover:bg-paper"
              >
                Sprachverzeichnis
              </Link>
            </div>
          </div>
          <aside className="flex flex-col bg-ink text-on-ink lg:col-span-5">
            <img
              src="/hero.jpg"
              alt="Dolmetschung in einem hellen Besprechungsraum"
              className="h-56 w-full object-cover sm:h-72 lg:h-64"
            />
            <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
              <p className="text-xs font-semibold tracking-eyebrow text-brass-soft uppercase">Schwerpunkt</p>
              <p className="mt-4 font-display text-3xl text-on-ink">
                Kurdisch, Türkisch, Aserbaidschanisch und Turkmenisch.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-on-ink/80">
                Alle kurdischen Dialekte gehören zum Kern des Büros. Darüber hinaus vermitteln wir
                praktisch alle Sprachen — derzeit {LANGUAGES.length} Einträge im Verzeichnis.
              </p>
              <ul className="mt-6 divide-y divide-brass/30 border-y border-brass/30">
                {FOCUS_LANGUAGES.map((language) => (
                  <li key={language.name}>
                    <Link
                      to="/sprachen"
                      search={{ q: language.query }}
                      className="flex min-h-11 items-center py-2 font-semibold text-on-ink hover:text-brass-soft"
                    >
                      {language.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-brass-soft">
                Büro in {site.address.city}
                <br />
                Einsatz bundesweit
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Leistungen</Eyebrow>
              <h2 className="mt-3 font-display text-4xl text-ink">Was das Büro für Sie übernimmt</h2>
            </div>
            <Link className="text-sm font-semibold text-seal underline underline-offset-4" to="/leistungen">
              Leistungen im Überblick
            </Link>
          </div>
          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12">
            <img
              src="/desk.jpg"
              alt="Arbeitsplatz für Übersetzungen"
              className="h-56 w-full object-cover lg:col-span-5 lg:h-full"
            />
            <ol className="divide-y divide-line border-y border-line lg:col-span-7">
            {[
              {
                n: "01",
                title: "Dolmetschen",
                text: "Vermittlung professioneller Dolmetscherinnen und Dolmetscher für Termine, Gespräche und Einsätze — nach Absprache, bundesweit.",
              },
              {
                n: "02",
                title: "Übersetzen",
                text: "Fachspezifische Übersetzungen in Technik, Medizin, Wirtschaft, Recht, Literatur und Sport. Professionell und zuverlässig.",
              },
              {
                n: "03",
                title: "Beglaubigung",
                text: "Alle Übersetzungen können auf Wunsch beglaubigt werden.",
              },
            ].map((item) => (
              <li key={item.n} className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-6">
                <p className="font-display text-3xl text-brass sm:col-span-2">{item.n}</p>
                <h3 className="font-display text-3xl text-ink sm:col-span-3">{item.title}</h3>
                <p className="text-ink-soft sm:col-span-7">{item.text}</p>
              </li>
            ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <Eyebrow>Fachbereiche</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">
            Unterlagen, die wir professionell und zuverlässig übersetzen.
          </h2>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((field) => (
              <li key={field.title} className="bg-surface p-6">
                <h3 className="font-display text-3xl text-ink">{field.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{field.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Qualität</Eyebrow>
            <h2 className="mt-3 font-display text-4xl text-ink">
              Dolmetschleistungen und Übersetzungen auf höchstem Qualitätsniveau.
            </h2>
            <ul className="mt-6 space-y-3">
              {qualifications.map((item) => (
                <li key={item} className="border-l-2 border-seal pl-4 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Referenzen</Eyebrow>
            <h2 className="mt-3 font-display text-4xl text-ink">Öffentliche Auftraggeber</h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {references.map((item) => (
                <li key={item} className="border border-line bg-surface px-4 py-3 text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-seal text-on-seal">
        <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-4xl">Sie brauchen eine Sprache, einen Termin oder eine Übersetzung?</h2>
            <p className="mt-3 max-w-xl text-on-seal/90">
              Rufen Sie an, schreiben Sie uns oder senden Sie ein Fax. Wir melden uns zur Abstimmung
              von Sprache, Fachbereich und Einsatz.
            </p>
          </div>
          <Link
            to="/kontakt"
            className="inline-flex h-11 shrink-0 items-center bg-ink px-6 text-sm font-semibold text-on-ink hover:bg-ink-soft"
          >
            Kontakt aufnehmen
          </Link>
        </Container>
      </section>
    </SiteLayout>
  );
}
