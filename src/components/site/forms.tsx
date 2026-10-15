import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

type Errors = Record<string, string>;

const inputClass =
  "h-11 w-full border border-line bg-surface px-3 text-base text-ink placeholder:text-muted focus:border-seal focus:outline-none";

const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-seal">{message}</p>;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function mailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function openMail(href: string) {
  const link = document.createElement("a");
  link.href = href;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function InquiryForm({ defaultLanguage = "" }: { defaultLanguage?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [mail, setMail] = useState<{ href: string; body: string } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const organisation = String(form.get("organisation") ?? "").trim();
    const leistung = String(form.get("leistung") ?? "").trim();
    const sprache = String(form.get("sprache") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const privacy = form.get("privacy");
    const next: Errors = {};
    if (name.length < 2) next.name = "Bitte nennen Sie Ihren Namen.";
    if (!isEmail(email)) next.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    if (!leistung) next.leistung = "Bitte wählen Sie eine Leistung.";
    if (sprache.length < 2) next.sprache = "Bitte nennen Sie die Sprache.";
    if (message.length < 2) next.message = "Bitte schreiben Sie kurz Ihr Anliegen.";
    if (privacy !== "on") next.privacy = "Bitte bestätigen Sie den Hinweis zum Datenschutz.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setMail(null);
      document.getElementById(Object.keys(next)[0])?.scrollIntoView({ block: "center" });
      return;
    }

    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      organisation ? `Organisation: ${organisation}` : null,
      `Leistung: ${leistung}`,
      `Sprache: ${sprache}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const href = mailLink(`Anfrage: ${leistung} – ${sprache}`, body);
    setMail({ href, body });
    openMail(href);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" className={inputClass} required />
          <FieldError message={errors.name} />
        </div>
        <div>
          <label className={labelClass} htmlFor="organisation">
            Organisation <span className="font-normal text-muted">freiwillig</span>
          </label>
          <input id="organisation" name="organisation" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            E-Mail
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} required />
          <FieldError message={errors.email} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefon <span className="font-normal text-muted">freiwillig</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="leistung">
            Leistung
          </label>
          <select id="leistung" name="leistung" className={inputClass} defaultValue="Dolmetschen">
            <option>Dolmetschen</option>
            <option>Übersetzen</option>
            <option>Beglaubigte Übersetzung</option>
            <option>Sonstiges</option>
          </select>
          <FieldError message={errors.leistung} />
        </div>
        <div>
          <label className={labelClass} htmlFor="sprache">
            Sprache
          </label>
          <input
            id="sprache"
            name="sprache"
            defaultValue={defaultLanguage}
            className={inputClass}
            placeholder="z. B. Kurdisch-Kurmandschi"
          />
          <FieldError message={errors.sprache} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="message">
          Ihr Anliegen
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full border border-line bg-surface px-3 py-3 text-base text-ink placeholder:text-muted focus:border-seal focus:outline-none"
          placeholder="Termin, Ort, Fachbereich oder Art der Unterlagen"
        />
        <FieldError message={errors.message} />
      </div>
      <label className="flex min-h-11 items-start gap-3 text-sm text-ink-soft">
        <input name="privacy" type="checkbox" className="mt-1 h-4 w-4 accent-seal" />
        <span>
          Ich habe zur Kenntnis genommen, dass mit dem Absenden eine E-Mail in meinem
          E-Mail-Programm vorbereitet wird. Hinweise dazu stehen in der{" "}
          <Link className="font-semibold text-seal underline underline-offset-2" to="/datenschutz">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>
      <FieldError message={errors.privacy} />
      <button
        type="submit"
        className="inline-flex h-11 items-center bg-seal px-6 text-sm font-semibold text-on-seal hover:bg-seal-deep"
      >
        Anfrage per E-Mail vorbereiten
      </button>
      {mail ? <DraftNotice href={mail.href} body={mail.body} /> : null}
    </form>
  );
}

export function ApplicationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [mail, setMail] = useState<{ href: string; body: string } | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const languages = String(form.get("languages") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const privacy = form.get("privacy");
    const next: Errors = {};
    if (name.length < 2) next.name = "Bitte nennen Sie Ihren Namen.";
    if (!isEmail(email)) next.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    if (languages.length < 2) next.languages = "Bitte nennen Sie Ihre Sprachen.";
    if (message.length < 2) next.message = "Bitte fügen Sie ein kurzes Anschreiben hinzu.";
    if (privacy !== "on") next.privacy = "Bitte bestätigen Sie den Hinweis zum Datenschutz.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setMail(null);
      const field = Object.keys(next)[0] === "name" ? "app-name" : `app-${Object.keys(next)[0]}`;
      document.getElementById(field)?.scrollIntoView({ block: "center" });
      return;
    }

    const body = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      `Sprachen: ${languages}`,
      "",
      message,
      "",
      "Lebenslauf und Nachweise füge ich dieser E-Mail bei.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const href = mailLink(`Bewerbung Sprachmittler – ${languages}`, body);
    setMail({ href, body });
    openMail(href);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="app-name">
            Name
          </label>
          <input id="app-name" name="name" autoComplete="name" className={inputClass} />
          <FieldError message={errors.name} />
        </div>
        <div>
          <label className={labelClass} htmlFor="app-email">
            E-Mail
          </label>
          <input id="app-email" name="email" type="email" autoComplete="email" className={inputClass} />
          <FieldError message={errors.email} />
        </div>
        <div>
          <label className={labelClass} htmlFor="app-phone">
            Telefon <span className="font-normal text-muted">freiwillig</span>
          </label>
          <input id="app-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="app-languages">
            Sprachen
          </label>
          <input id="app-languages" name="languages" className={inputClass} placeholder="z. B. Türkisch, Deutsch" />
          <FieldError message={errors.languages} />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="app-message">
          Kurzanschreiben
        </label>
        <textarea
          id="app-message"
          name="message"
          rows={6}
          className="w-full border border-line bg-surface px-3 py-3 text-base text-ink focus:border-seal focus:outline-none"
        />
        <FieldError message={errors.message} />
      </div>
      <label className="flex min-h-11 items-start gap-3 text-sm text-ink-soft">
        <input name="privacy" type="checkbox" className="mt-1 h-4 w-4 accent-seal" />
        <span>
          Lebenslauf und Nachweise sende ich mit der E-Mail. Hinweise zur Verarbeitung stehen in der{" "}
          <Link className="font-semibold text-seal underline underline-offset-2" to="/datenschutz">
            Datenschutzerklärung
          </Link>
          .
        </span>
      </label>
      <FieldError message={errors.privacy} />
      <button
        type="submit"
        className="inline-flex h-11 items-center bg-seal px-6 text-sm font-semibold text-on-seal hover:bg-seal-deep"
      >
        Bewerbung per E-Mail vorbereiten
      </button>
      {mail ? <DraftNotice href={mail.href} body={mail.body} /> : null}
    </form>
  );
}

function DraftNotice({ href, body }: { href: string; body: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(`An: ${site.email}\n\n${body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="border border-line bg-brass-soft p-4 text-sm text-ink-soft">
      <p className="font-semibold text-ink">
        Die Seite bleibt offen. Tippen Sie auf den roten Knopf, falls die E-Mail-App nicht von allein
        aufging. In dieser Vorschau kann das Handy die App manchmal nicht öffnen.
      </p>
      <a
        href={href}
        className="mt-3 inline-flex h-11 items-center bg-seal px-4 text-sm font-semibold text-on-seal"
      >
        E-Mail-App öffnen
      </a>
      <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-sans text-sm text-ink">{body}</pre>
      <button
        type="button"
        onClick={copy}
        className="mt-3 inline-flex h-11 items-center border border-line-strong bg-surface px-4 text-sm font-semibold text-ink"
      >
        {copied ? "Kopiert" : "Text kopieren"}
      </button>
    </div>
  );
}
