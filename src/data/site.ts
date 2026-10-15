export const site = {
  name: "Dialog",
  legalName: "Dialog Dolmetscher- & Übersetzungsbüro",
  shortName: "Dolmetscherbüro Dialog",
  documentTitle: "Dialog Übersetzungsbüro Karlsruhe",
  founded: 2012,
  email: "kontakt@info-dialog.de",
  owner: "Kemal Yildirim",
  motto: ["Zuverlässig", "Schnell", "Freundlich", "Kompetent"] as const,
  address: {
    street: "Schafstr. 3",
    postalCode: "76356",
    city: "Weingarten (Baden)",
  },
  phones: [
    {
      label: "Telefon",
      display: "+49 (0) 7244 4078834",
      href: "tel:+4972444078834",
    },
    {
      label: "Telefon Karlsruhe",
      display: "+49 (0) 721 156 46 106",
      href: "tel:+4972115646106",
    },
    {
      label: "Mobil",
      display: "+49 (0) 151 58 53 76 71",
      href: "tel:+4915158537671",
    },
    {
      label: "Fax",
      display: "+49 (0) 7244 5564619",
      href: "tel:+4972445564619",
    },
  ],
} as const;

export const navItems = [
  { to: "/", label: "Startseite" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/sprachen", label: "Sprachen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/stellenangebote", label: "Stellenangebote" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const fields = [
  {
    title: "Technik",
    text: "Handbücher, Datenblätter, technische Berichte und produktbegleitende Unterlagen.",
  },
  {
    title: "Medizin",
    text: "Befunde, Arztbriefe und weitere medizinische Unterlagen — fachlich und vertraulich.",
  },
  {
    title: "Wirtschaft",
    text: "Geschäftskorrespondenz, Verträge und unternehmensbezogene Texte.",
  },
  {
    title: "Recht",
    text: "Schriftsätze, Bescheide, Urkunden und weitere Unterlagen aus dem rechtlichen Bereich.",
  },
  {
    title: "Literatur",
    text: "Literarische und redaktionelle Texte mit Sinn für Ton und Zusammenhang.",
  },
  {
    title: "Sport",
    text: "Unterlagen und Begleitung rund um sportliche Termine und Organisationen.",
  },
] as const;

export const qualifications = [
  "Diplom-Dolmetscherinnen und Diplom-Dolmetscher",
  "Diplom-Übersetzerinnen und Diplom-Übersetzer",
  "Ermächtigte und vereidigte Dolmetscherinnen und Dolmetscher",
  "Staatlich geprüfte Dolmetscherinnen und Dolmetscher",
  "Qualifizierte Muttersprachlerinnen und Muttersprachler",
] as const;

export const references = [
  "Bundesamt für Migration und Flüchtlinge",
  "Bundesgerichtshof",
  "Oberlandesgericht",
  "Landgericht",
  "Sozialgericht",
  "Arbeitsgericht",
  "Amtsgericht",
  "Verwaltungsgericht",
  "Jugendamt",
  "Staatsanwaltschaften",
  "Bundespolizei",
] as const;

export function addressLines(): string[] {
  return [
    site.legalName,
    site.address.street,
    `${site.address.postalCode} ${site.address.city}`,
  ];
}

export function mapHref(): string {
  const query = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`;
}
