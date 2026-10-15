import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { fields, site } from "@/data/site";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: `Leistungen | ${site.documentTitle}` },
      {
        name: "description",
        content:
          "Dolmetschen, fachspezifische Übersetzungen und Beglaubigung auf Wunsch. Fachbereiche: Technik, Medizin, Wirtschaft, Recht, Literatur und Sport.",
      },
    ],
  }),
  component: LeistungenPage,
});

const services = [
  {
    title: "Dolmetschen",
    text: "Wir vermitteln professionelle Dolmetscherinnen und Dolmetscher. Der Einsatz erfolgt nach Absprache und nach dem Bedarf unserer Auftraggeber — bundesweit, zeitlich so, wie der Termin es verlangt.",
    points: [
      "Gesprächs- und Termindolmetschen",
      "Einsätze bei Behörden, Gerichten und anderen Stellen",
      "Abstimmung von Sprache, Ort und Zeitpunkt im Vorfeld",
    ],
  },
  {
    title: "Übersetzen",
    text: "Unsere Übersetzerinnen und Übersetzer übertragen Ihre Unterlagen professionell und zuverlässig. Der Schwerpunkt liegt auf Kurdisch — in allen Dialekten —, Türkisch, Aserbaidschanisch und Turkmenisch. Praktisch alle weiteren Sprachen sind ebenfalls möglich.",
    points: [
      "Fachspezifische schriftliche Übersetzungen",
      "Unterlagen aus sechs Fachbereichen",
      "Klärung von Umfang und Frist vor Auftragserteilung",
    ],
  },
  {
    title: "Beglaubigte Übersetzungen",
    text: "Alle Übersetzungen können auf Wunsch beglaubigt werden. Sagen Sie uns bei der Anfrage, ob eine Beglaubigung erforderlich ist — etwa für eine Behörde, ein Gericht oder eine andere Stelle.",
    points: [
      "Beglaubigung auf Wunsch",
      "Hinweis bitte bereits in der Anfrage",
      "Abstimmung, welche Form die empfangende Stelle verlangt",
    ],
  },
];

function LeistungenPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Leistungen"
        title="Dolmetschen, Übersetzen, auf Wunsch beglaubigt."
        lede="Das Büro vermittelt qualifizierte Dolmetscherinnen, Dolmetscher und fachspezifische Übersetzerinnen und Übersetzer. Zuverlässig, schnell, freundlich und kompetent."
      />
      <section className="py-14 sm:py-16">
        <Container className="space-y-12">
          {services.map((service, index) => (
            <article key={service.title} className="grid gap-6 border-b border-line pb-12 lg:grid-cols-12">
              <p className="font-display text-4xl text-brass lg:col-span-2">0{index + 1}</p>
              <div className="lg:col-span-6">
                <h2 className="font-display text-4xl text-ink">{service.title}</h2>
                <p className="mt-4 text-ink-soft">{service.text}</p>
              </div>
              <ul className="space-y-3 lg:col-span-4">
                {service.points.map((point) => (
                  <li key={point} className="border-l-2 border-seal pl-4 text-sm text-ink-soft">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
      <section className="border-t border-line bg-surface py-14 sm:py-16">
        <Container>
          <h2 className="font-display text-4xl text-ink">Fachbereiche der Übersetzung</h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            Ihre Unterlagen übersetzen wir in diesen Fachbereichen professionell und zuverlässig.
          </p>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((field) => (
              <li key={field.title} className="bg-paper p-6">
                <h3 className="font-display text-3xl">{field.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{field.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="inline-flex h-11 items-center justify-center bg-seal px-6 text-sm font-semibold text-on-seal"
            >
              Leistung anfragen
            </Link>
            <Link
              to="/sprachen"
              className="inline-flex h-11 items-center justify-center border border-line-strong px-6 text-sm font-semibold"
            >
              Sprache suchen
            </Link>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
