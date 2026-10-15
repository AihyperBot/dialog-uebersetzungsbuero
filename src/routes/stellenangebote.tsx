import { createFileRoute } from "@tanstack/react-router";
import { ApplicationForm } from "@/components/site/forms";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { site } from "@/data/site";

export const Route = createFileRoute("/stellenangebote")({
  head: () => ({
    meta: [
      { title: `Stellenangebote | ${site.documentTitle}` },
      {
        name: "description",
        content:
          "Das Dialog-Übersetzungsbüro sucht bundesweit Sprachmittlerinnen und Sprachmittler sowie vereidigte Dolmetscherinnen und Dolmetscher — freiberuflich.",
      },
    ],
  }),
  component: JobsPage,
});

const offers = [
  "Freiberufliche Tätigkeit mit freier Zeiteinteilung",
  "Flexible Arbeitszeiten",
  "Freie Terminplanung nach Bedarf und Zeit",
  "Keine Pflicht, jeden Auftrag anzunehmen, solange er nicht bereits zugesagt wurde",
  "Einsatz nach Absprache und entsprechendem Bedarf der Kunden",
  "Auch als Nebentätigkeit für Studierende, Rentnerinnen und Rentner sowie im Haushalt Tätige geeignet",
];

const requirements = [
  "Sehr gute Deutschkenntnisse, zum Beispiel C1 von Goethe, telc oder TestDaF, einer deutschen Hochschule, einem Studienkolleg oder deutsches Abitur bzw. Fachabitur",
  "Zeitliche und örtliche Flexibilität",
  "Bei ausländischer Staatsangehörigkeit: gültiger Aufenthaltstitel, der eine Erwerbstätigkeit gestattet",
  "Keine Einträge im Führungszeugnis",
];

function JobsPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Stellenangebote"
        title="Wir suchen Verstärkung."
        lede="Bundesweit suchen wir Sprachmittlerinnen und Sprachmittler in allen Sprachen sowie vereidigte Dolmetscherinnen und Dolmetscher."
      />
      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-2">
          <article className="border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-3xl">Sprachmittlerinnen und Sprachmittler</h2>
            <p className="mt-3 text-ink-soft">In allen Sprachen, bundesweit, auf freiberuflicher Basis.</p>
          </article>
          <article className="border border-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-3xl">Vereidigte Dolmetscherinnen und Dolmetscher</h2>
            <p className="mt-3 text-ink-soft">In allen Sprachen, bundesweit, auf freiberuflicher Basis.</p>
          </article>
        </Container>
      </section>
      <section className="border-t border-line bg-paper-deep py-14">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Was wir bieten</h2>
            <ul className="mt-6 space-y-3">
              {offers.map((item) => (
                <li key={item} className="border-l-2 border-brass pl-4 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-4xl">Unsere Anforderungen</h2>
            <ul className="mt-6 space-y-3">
              {requirements.map((item) => (
                <li key={item} className="border-l-2 border-seal pl-4 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl">Bewerbung</h2>
            <p className="mt-4 text-ink-soft">
              Wir freuen uns auf Ihre Kontaktaufnahme mit einem Bewerbungsschreiben und Lebenslauf.
              Bitte senden Sie die Unterlagen an {site.email} oder nutzen Sie das Formular. Es öffnet
              Ihr E-Mail-Programm, damit Sie Nachweise direkt anhängen können.
            </p>
            <address className="mt-6 text-sm not-italic text-ink-soft">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>
          </div>
          <div className="border border-line bg-surface p-6 sm:p-8 lg:col-span-8">
            <ApplicationForm />
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
