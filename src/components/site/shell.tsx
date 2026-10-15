import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { mapHref, navItems, site } from "@/data/site";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <a
        href="#inhalt"
        className="absolute left-4 top-0 z-50 -translate-y-full bg-seal px-4 py-3 text-sm font-semibold text-on-seal focus:translate-y-4"
      >
        Zum Inhalt
      </a>
      <SiteHeader />
      <main id="inhalt" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-eyebrow text-brass uppercase">{children}</p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line bg-surface">
      <Container className="py-14 sm:py-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl font-display text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{lede}</p>
      </Container>
    </header>
  );
}

function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-sm">
      <div className="bg-ink text-on-ink">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs tracking-wide">
          <p>Seit {site.founded} · Karlsruhe · bundesweit</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a className="hover:text-brass-soft" href={site.phones[0].href}>
              {site.phones[0].display}
            </a>
            <a className="hover:text-brass-soft" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </Container>
      </div>
      <div className="h-1 bg-linear-to-r from-logo-blue to-logo-red" />
      <Container className="flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-h-11 items-center">
          <img src="/logo.png" alt="Dialog Dolmetscherbüro" className="h-10 w-auto sm:h-12" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="px-2.5 py-2 text-sm text-ink-soft hover:text-ink data-[status=active]:font-semibold data-[status=active]:text-seal"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="ml-2 inline-flex h-11 items-center bg-seal px-4 text-sm font-semibold text-on-seal hover:bg-seal-deep"
          >
            Anfrage
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line bg-surface lg:hidden" aria-label="Mobil">
          <Container className="flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                className="border-b border-line py-3 text-lg text-ink data-[status=active]:font-semibold data-[status=active]:text-seal"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="my-4 inline-flex h-11 items-center justify-center bg-seal text-sm font-semibold text-on-seal"
            >
              Anfrage stellen
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-on-ink">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.png" alt="" className="h-12 w-auto bg-white px-2 py-1" />
          <p className="mt-3 text-sm text-brass-soft">{site.legalName}</p>
          <p className="mt-4 text-sm leading-relaxed text-on-ink/80">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </p>
          <a
            className="mt-3 inline-flex min-h-11 items-center text-sm text-brass-soft underline decoration-brass/50 underline-offset-4"
            href={mapHref()}
            target="_blank"
            rel="noreferrer"
          >
            Auf der Karte zeigen
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-eyebrow text-brass-soft uppercase">Kontakt</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a className="hover:text-brass-soft" href={phone.href}>
                  <span className="text-on-ink/70">{phone.label}: </span>
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a className="hover:text-brass-soft" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-eyebrow text-brass-soft uppercase">Büro</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link className="hover:text-brass-soft" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-eyebrow text-brass-soft uppercase">Rechtliches</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-brass-soft" to="/impressum">
                Impressum
              </Link>
            </li>
            <li>
              <Link className="hover:text-brass-soft" to="/datenschutz">
                Datenschutz
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-on-ink/75">
            Vermittlung professioneller Dolmetscher und Übersetzer. Übersetzungen auf Wunsch
            beglaubigt.
          </p>
        </div>
      </Container>
      <div className="border-t border-brass/30">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-on-ink/60">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <p>Gegründet {site.founded} in Karlsruhe</p>
        </Container>
      </div>
    </footer>
  );
}
