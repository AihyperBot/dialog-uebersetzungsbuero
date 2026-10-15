import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { InquiryForm } from "@/components/site/forms";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { mapHref, site } from "@/data/site";

export const Route = createFileRoute("/kontakt")({
  validateSearch: (search: Record<string, unknown>): { sprache?: string } => {
    if (typeof search.sprache !== "string") return {};
    const sprache = search.sprache.slice(0, 80).trim();
    return sprache ? { sprache } : {};
  },
  search: {
    middlewares: [stripSearchParams({ sprache: "" })],
  },
  head: () => ({
    meta: [
      { title: `Kontakt | ${site.documentTitle}` },
      {
        name: "description",
        content:
          "Dialog Dolmetscher- & Übersetzungsbüro, Schafstr. 3, 76356 Weingarten (Baden). Telefon, Fax, Mobil und E-Mail.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { sprache = "" } = Route.useSearch();
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Kontakt"
        title="Sprechen Sie mit dem Büro."
        lede="Für Dolmetscheinsätze, Übersetzungen und beglaubigte Übertragungen erreichen Sie uns telefonisch, per Fax, mobil und per E-Mail."
      />
      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl">{site.legalName}</h2>
            <address className="mt-4 text-ink-soft not-italic">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>
            <a
              href={mapHref()}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-seal underline underline-offset-4"
            >
              Adresse auf der Karte
            </a>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {site.phones.map((phone) => (
                <li key={phone.label} className="flex min-h-12 items-center justify-between gap-4 py-2 text-sm">
                  <span className="text-muted">{phone.label}</span>
                  <a className="font-semibold" href={phone.href}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex min-h-12 items-center justify-between gap-4 py-2 text-sm">
                <span className="text-muted">E-Mail</span>
                <a className="font-semibold" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              Verantwortlich: {site.owner}. Das Büro wurde {site.founded} in Karlsruhe gegründet und
              ist bundesweit im Einsatz.
            </p>
          </div>
          <div className="border border-line bg-surface p-6 sm:p-8 lg:col-span-8">
            <h2 className="font-display text-3xl">Anfrage</h2>
            <p className="mt-2 mb-6 text-sm text-ink-soft">
              Das Formular speichert nichts auf dieser Website. Es bereitet eine E-Mail an{" "}
              {site.email} vor, die Sie in Ihrem Programm prüfen und absenden.
            </p>
            <InquiryForm defaultLanguage={sprache} />
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
