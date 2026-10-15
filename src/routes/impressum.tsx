import { createFileRoute } from "@tanstack/react-router";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { site } from "@/data/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: `Impressum | ${site.documentTitle}` },
      { name: "description", content: "Impressum des Dialog Dolmetscher- & Übersetzungsbüros." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Rechtliches"
        title="Impressum"
        lede="Angaben gemäß § 5 TMG."
      />
      <article className="py-14">
        <Container>
          <div className="max-w-3xl space-y-8 text-ink-soft">
          <section>
            <h2 className="font-display text-3xl text-ink">Verantwortlich für den Inhalt</h2>
            <p className="mt-4">Herr {site.owner}</p>
            <p className="mt-3">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
            <ul className="mt-4 space-y-1">
              {site.phones.map((phone) => (
                <li key={phone.label}>
                  {phone.label}: <a className="text-seal underline underline-offset-2" href={phone.href}>{phone.display}</a>
                </li>
              ))}
              <li>
                E-Mail:{" "}
                <a className="text-seal underline underline-offset-2" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">Haftung für Inhalte</h2>
            <p className="mt-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
              werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">Haftung für Links</h2>
            <p className="mt-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl text-ink">Urheberrecht</h2>
            <p className="mt-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors beziehungsweise Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
              die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
          </div>
        </Container>
      </article>
    </SiteLayout>
  );
}
