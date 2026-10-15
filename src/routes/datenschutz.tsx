import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, PageIntro, SiteLayout } from "@/components/site/shell";
import { site } from "@/data/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: `Datenschutz | ${site.documentTitle}` },
      {
        name: "description",
        content: "Datenschutzerklärung des Dialog Dolmetscher- & Übersetzungsbüros.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        lede="Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."
      />
      <article className="py-14">
        <Container>
          <div className="max-w-3xl space-y-10 text-ink-soft">
          <section className="space-y-4">
            <h2 className="font-display text-3xl text-ink">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-display text-2xl text-ink">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen entnehmen Sie den folgenden Abschnitten.
            </p>
            <h3 className="font-display text-2xl text-ink">Wer ist verantwortlich?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die
              Kontaktdaten stehen im <Link className="text-seal underline underline-offset-2" to="/impressum">Impressum</Link>.
            </p>
            <h3 className="font-display text-2xl text-ink">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, etwa per
              E-Mail, Telefon oder Telefax. Andere Daten werden automatisch beim Besuch der Website
              durch die IT-Systeme erfasst. Das sind vor allem technische Daten wie Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs. Die Erfassung dieser Daten erfolgt
              automatisch, sobald Sie diese Website betreten.
            </p>
            <h3 className="font-display text-2xl text-ink">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um die Website fehlerfrei bereitzustellen. Daten aus
              Anfragen nutzen wir, um Ihr Anliegen zu bearbeiten.
            </p>
            <h3 className="font-display text-2xl text-ink">Welche Rechte haben Sie?</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
              Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
              Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen.
              Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl text-ink">2. Verantwortliche Stelle</h2>
            <p>
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {site.legalName}
              <br />
              Herr {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              Telefon: {site.phones[0].display}
              <br />
              Telefon Karlsruhe: {site.phones[1].display}
              <br />
              Mobil: {site.phones[2].display}
              <br />
              E-Mail: {site.email}
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
              Daten entscheidet.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Wir weisen darauf hin, dass die Datenübertragung im Internet, zum Beispiel bei der
              Kommunikation per E-Mail, Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
              Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl text-ink">3. Ihre Rechte</h2>
            <h3 className="font-display text-2xl text-ink">Widerruf einer Einwilligung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
              der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
            </p>
            <h3 className="font-display text-2xl text-ink">Widerspruch nach Art. 21 DSGVO</h3>
            <p>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
              haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, gegen die Verarbeitung Widerspruch einzulegen; dies gilt auch für ein auf diese
              Bestimmungen gestütztes Profiling. Wenn Sie Widerspruch einlegen, verarbeiten wir die
              betroffenen Daten nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung
              dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>
            <p>
              Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das
              Recht, jederzeit Widerspruch gegen die Verarbeitung zum Zwecke derartiger Werbung
              einzulegen. Widersprechen Sie, werden die Daten anschließend nicht mehr zum Zwecke der
              Direktwerbung verwendet.
            </p>
            <h3 className="font-display text-2xl text-ink">Beschwerderecht</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts,
              ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Für dieses Büro ist das
              in der Regel der Landesbeauftragte für den Datenschutz und die Informationsfreiheit
              Baden-Württemberg.
            </p>
            <h3 className="font-display text-2xl text-ink">Recht auf Datenübertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
              gängigen, maschinenlesbaren Format aushändigen zu lassen. Die direkte Übertragung an
              einen anderen Verantwortlichen erfolgt nur, soweit sie technisch machbar ist.
            </p>
            <h3 className="font-display text-2xl text-ink">Auskunft, Löschung, Berichtigung und Einschränkung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
              und Empfänger und den Zweck der Verarbeitung sowie gegebenenfalls ein Recht auf
              Berichtigung oder Löschung. Hierzu können Sie sich jederzeit an die im Impressum
              genannte Adresse wenden.
            </p>
            <p>Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten Daten bestreiten, für die Dauer
                der Prüfung.
              </li>
              <li>
                Wenn die Verarbeitung unrechtmäßig geschah und Sie statt der Löschung die Einschränkung
                verlangen.
              </li>
              <li>
                Wenn wir die Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                Geltendmachung von Rechtsansprüchen brauchen.
              </li>
              <li>
                Wenn Sie Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, solange noch nicht
                feststeht, wessen Interessen überwiegen.
              </li>
            </ul>
            <p>
              Wurden personenbezogene Daten eingeschränkt, dürfen sie — von ihrer Speicherung
              abgesehen — nur mit Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen oder zum Schutz der Rechte einer anderen Person oder aus Gründen eines
              wichtigen öffentlichen Interesses verarbeitet werden.
            </p>
            <h3 className="font-display text-2xl text-ink">Widerspruch gegen Werbe-E-Mails</h3>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird widersprochen. Die Betreiber der Seiten behalten sich rechtliche Schritte im Falle
              der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-3xl text-ink">4. Datenerfassung auf dieser Website</h2>
            <h3 className="font-display text-2xl text-ink">SSL- beziehungsweise TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
              wechselt und am Schloss-Symbol in der Browserzeile. Ist die Verschlüsselung aktiv, können
              die Daten, die Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen werden.
            </p>
            <h3 className="font-display text-2xl text-ink">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden
              Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten mit
              anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p>
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
              hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der
              Optimierung der Website; hierzu müssen die Server-Log-Dateien erfasst werden.
            </p>
            <h3 className="font-display text-2xl text-ink">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
              Bearbeitung Ihres Anliegens gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
              mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt
              wurde.
            </p>
            <p>
              Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
              widerrufen oder der Zweck für die Speicherung entfällt, etwa nach abgeschlossener
              Bearbeitung. Zwingende gesetzliche Bestimmungen, insbesondere Aufbewahrungsfristen,
              bleiben unberührt.
            </p>
            <h3 className="font-display text-2xl text-ink">Kontaktformular auf dieser Website</h3>
            <p>
              Die Formulare für Anfragen und Bewerbungen übermitteln keine Daten an einen Server dieses
              Büros. Mit dem Absenden wird eine E-Mail in Ihrem eigenen E-Mail-Programm vorbereitet.
              Erst wenn Sie diese E-Mail absenden, erhalten wir die darin enthaltenen Angaben. Es
              findet auf dieser Website kein Newsletter und kein Double-Opt-in statt. Bewerbungsunterlagen
              behandeln wir ausschließlich zur Prüfung einer möglichen Zusammenarbeit.
            </p>
          </section>

          <p className="text-sm text-muted">
            Grundlage dieser Erklärung ist die bisherige Datenschutzerklärung des Büros, angepasst an
            den tatsächlichen Betrieb dieser Website. Musterhinweis der früheren Fassung: e-recht24.de.
          </p>
          </div>
        </Container>
      </article>
    </SiteLayout>
  );
}
