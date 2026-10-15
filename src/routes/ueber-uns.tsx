import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { qualifications, references, site } from "@/data/site";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: `Über uns | ${site.documentTitle}` },
      {
        name: "description",
        content:
          "Das Dialog-Übersetzungsbüro wurde 2012 in Karlsruhe gegründet. Qualifizierte Dolmetscher und fachspezifische Übersetzer, bundesweit.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow={`Über uns · gegründet ${site.founded}`}
        title="Ein Büro, das Sprachbarrieren überbrückt."
        lede="Wir sind ein Unternehmen mit qualifizierten Dolmetschern und fachspezifischen Übersetzern für alle Sprachen."
      />
      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg text-ink-soft">
              Wo immer Sie sind und wann immer Sie wollen, bieten wir Ihnen bundesweit die
              Möglichkeit, Ihre Sprachbarrieren in allen Sprachen schnell und bequem zu überbrücken.
            </p>
            <p className="mt-5 text-ink-soft">
              Das Dialog-Übersetzungsbüro wurde {site.founded} in Karlsruhe (Baden-Württemberg)
              gegründet. Wir haben uns auf das Dolmetschen und Übersetzen der kurdischen Sprache —
              in allen Dialekten — sowie des Türkischen, Aserbaidschanischen und Turkmenischen
              spezialisiert. Praktisch alle weiteren Sprachen bieten wir ebenfalls an.
            </p>
            <p className="mt-5 text-ink-soft">
              Sie erhalten von uns Dolmetschleistungen und Übersetzungen auf höchstem
              Qualitätsniveau. Verantwortlich für den Inhalt des Büros ist {site.owner}. Das Büro
              erreichen Sie in {site.address.city}.
            </p>
            <blockquote className="mt-8 border-l-2 border-brass pl-5 font-display text-3xl text-ink">
              Zuverlässig — schnell — freundlich — kompetent.
            </blockquote>
          </div>
          <aside className="bg-ink p-7 text-on-ink lg:col-span-5">
            <p className="text-xs font-semibold tracking-eyebrow text-brass-soft uppercase">Büro</p>
            <p className="mt-4 font-display text-3xl">{site.legalName}</p>
            <p className="mt-4 text-sm leading-relaxed">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <p className="mt-4 text-sm">Einsatzgebiet: bundesweit</p>
            <p className="mt-4 text-sm">Gründung: {site.founded}, Karlsruhe</p>
            <Link
              to="/kontakt"
              className="mt-6 inline-flex h-11 items-center bg-seal px-5 text-sm font-semibold text-on-seal"
            >
              Kontakt aufnehmen
            </Link>
          </aside>
        </Container>
      </section>
      <section className="border-t border-line bg-surface py-14">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Wer für Sie arbeitet</h2>
            <ul className="mt-6 space-y-3">
              {qualifications.map((item) => (
                <li key={item} className="border-l-2 border-seal pl-4 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-4xl">Referenzen</h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {references.map((item) => (
                <li key={item} className="border border-line bg-paper px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
