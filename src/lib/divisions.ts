// The two sides of the site. Shared components (header, footer, service pages, contact form…)
// take a division id and read their links and copy from here.

import {
  consultancyBase,
  consultancyContact,
  consultancyContactPath,
  consultancyDetails,
  consultancyFaqs,
  consultancyGroups,
  consultancyHome,
  consultancyIndustries,
  consultancyServicePath,
  consultancyServices,
  consultancyServicesPage,
  engagementModels,
} from "./consultancy";
import {
  contactPage,
  contactPath,
  faqs as marketingFaqs,
  footerLinks,
  marketingBase,
  nav as marketingNav,
  servicePath,
  serviceDetails,
  serviceGroups,
  services,
  servicesPage,
  type Service,
  type ServiceDetail,
} from "./site";

export type DivisionId = "marketing" | "consultancy";

type Group = { id: string; title: string; intro: string; slugs: readonly string[]; items: readonly Service[] };
type Plan = { id: string; title: string; body: string; slugs: readonly string[] };
type Link = { label: string; href: string };
type NavItem = Link & { dropdown?: boolean };

export type FormSelect = {
  name: "service" | "budget" | "sector" | "engagement";
  label: string;
  /** First option, sent as an empty value. */
  empty: string;
  options: readonly string[];
  optional?: boolean;
  /** Take the full width of the form on tablet and desktop. */
  wide?: boolean;
};

export type Division = {
  id: DivisionId;
  /** "Marketing Solutions" */
  name: string;
  /** "Marketing" */
  short: string;
  /** One line under the name on the home page chooser and in the footer. */
  summary: string;
  base: string;
  servicesPath: string;
  aboutPath: string;
  contactPath: string;
  servicePath: (slug: string) => string;
  /** Contact link that pre-selects a service (or a popular combination) in the form. */
  contactHref: (opts?: { service?: string; plan?: string }) => string;
  services: readonly Service[];
  groups: readonly Group[];
  details: Record<string, ServiceDetail>;
  plans: readonly Plan[];
  nav: readonly NavItem[];
  /** Label of the main call-to-action button. */
  cta: string;
  /** Under the services dropdown. */
  menuNote: string;
  /** Next to the email address at the bottom of the mobile menu. */
  reachNote: string;
  /** "nine" — used in "See all nine services". */
  countWord: string;
  /** Added to every service page's meta description. */
  seoSuffix: string;
  /** Structured-data id of this side of the business. */
  orgId: string;
  faqs: readonly { q: string; a: string }[];
  finalCta: { lines: [string, string]; body: string };
  footer: { blurb: string; links: readonly Link[]; note: string; tagline: string };
  form: {
    title: string;
    messageLabel: string;
    placeholder: string;
    selects: readonly FormSelect[];
    successNote: string;
  };
  contact: { badge: string; headline: readonly string[]; highlight: string; body: string };
};

const withQuery = (path: string) => (opts: { service?: string; plan?: string } = {}) => {
  const q = new URLSearchParams();
  if (opts.service) q.set("service", opts.service);
  if (opts.plan) q.set("plan", opts.plan);
  const qs = q.toString();
  return qs ? `${path}?${qs}#contact-form` : `${path}#contact-form`;
};

export const marketing: Division = {
  id: "marketing",
  name: "Marketing Solutions",
  short: "Marketing",
  summary: "Ads, social media, branding, AI video and CRM automation, run online as one growth plan.",
  base: marketingBase,
  servicesPath: `${marketingBase}/services`,
  aboutPath: `${marketingBase}/about`,
  contactPath,
  servicePath,
  contactHref: withQuery(contactPath),
  services,
  groups: serviceGroups,
  details: serviceDetails,
  plans: servicesPage.combos.items,
  nav: marketingNav,
  cta: "Start a project",
  menuNote: "Not sure what you need? Tell us your goals and we'll recommend a plan.",
  reachNote: "100% online. Email us at",
  countWord: "nine",
  seoSuffix: "Aura Hive is an online digital marketing agency.",
  orgId: `${marketingBase}#business`,
  faqs: marketingFaqs,
  finalCta: {
    lines: ["Let's build", "your hive."],
    body: "Tell us about your brand and your goals. We'll review your ads, social pages and CRM, and send a short plan with a clear proposal.",
  },
  footer: {
    blurb: "Online digital marketing agency. Ads, social media, brand, AI video and CRM automation for growing brands.",
    links: footerLinks.company,
    note: "We're 100% online, with no shop or office. We work with you over video calls, WhatsApp and email.",
    tagline: "Digital marketing, delivered online",
  },
  form: {
    title: "Tell us about your project",
    messageLabel: "Your goals",
    placeholder: "For example: we want more enquiries from Instagram and faster replies on WhatsApp.",
    selects: [
      { name: "service", label: "What do you need help with?", empty: "Not sure yet", options: services.map((s) => s.title) },
      {
        name: "budget",
        label: "Monthly marketing budget",
        empty: "Prefer not to say",
        optional: true,
        options: ["Under AED 10,000", "AED 10,000 to 30,000", "AED 30,000 to 75,000", "Over AED 75,000"],
      },
    ],
    successNote: "While you wait, you can read more about how we work.",
  },
  contact: { badge: contactPage.badge, ...contactPage.hero },
};

export const consultancy: Division = {
  id: "consultancy",
  name: "Consultancy Solutions",
  short: "Consultancy",
  summary: "Independent facilities management, ISO and IMS, hospitality and wellness consultancy for owners.",
  base: consultancyBase,
  servicesPath: `${consultancyBase}/services`,
  aboutPath: `${consultancyBase}/about`,
  contactPath: consultancyContactPath,
  servicePath: consultancyServicePath,
  contactHref: withQuery(consultancyContactPath),
  services: consultancyServices,
  groups: consultancyGroups,
  details: consultancyDetails,
  plans: consultancyServicesPage.combos.items,
  nav: [
    { label: "Services", href: `${consultancyBase}/services`, dropdown: true },
    { label: "About us", href: `${consultancyBase}/about` },
    { label: "How we work", href: `${consultancyBase}#process` },
    { label: "Contact us", href: consultancyContactPath },
  ],
  cta: "Book a consultation",
  menuNote: "Not sure what you need? Send us your FM contract and site list for a free consultation.",
  reachNote: "Free first consultation. Email us at",
  countWord: "eleven",
  seoSuffix: "Aura Hive gives owners independent facilities management, ISO and hospitality consultancy.",
  orgId: `${consultancyBase}#business`,
  faqs: consultancyFaqs,
  finalCta: { lines: consultancyHome.cta.lines, body: consultancyHome.cta.body },
  footer: {
    blurb: "Independent facilities management consultancy: FM contracts, audits, HSE, energy, ISO and guest experience.",
    links: [
      { label: "Consultancy home", href: consultancyBase },
      { label: "About us", href: `${consultancyBase}/about` },
      { label: "All services", href: `${consultancyBase}/services` },
      { label: "Industries we support", href: `${consultancyBase}#industries` },
      { label: "FAQ", href: `${consultancyBase}#faq` },
      { label: "Contact us", href: consultancyContactPath },
    ],
    note: "International standards first, with every site mapped to local law. Site audits in person, reporting online.",
    tagline: "Independent advice for buildings that work",
  },
  form: {
    title: "Tell us about your buildings",
    messageLabel: "What would you like help with?",
    placeholder:
      "For example: two residential towers with an integrated FM contract ending in June. We want to check performance before we renew.",
    selects: [
      {
        name: "service",
        label: "Which service do you need?",
        empty: "Not sure yet",
        options: consultancyServices.map((s) => s.title),
        wide: true,
      },
      { name: "sector", label: "Sector", empty: "Choose a sector", optional: true, options: [...consultancyIndustries.map((i) => i.name), "Other"] },
      { name: "engagement", label: "Engagement model", empty: "Not sure yet", optional: true, options: engagementModels.map((m) => m.title) },
    ],
    successNote: "While you wait, you can read more about our services and how an engagement runs.",
  },
  contact: { badge: consultancyContact.badge, ...consultancyContact.hero },
};

export const divisions = { marketing, consultancy } as const;

export const getDivision = (id: DivisionId) => divisions[id];

/** The group a service belongs to. */
export const groupOfIn = (d: Division, slug: string) => d.groups.find((g) => g.slugs.includes(slug))!;

/** Which side a path belongs to (undefined on the home page, where visitors choose). */
export const divisionFromPath = (pathname: string): DivisionId | undefined =>
  pathname.startsWith(consultancyBase) ? "consultancy" : pathname.startsWith(marketingBase) ? "marketing" : undefined;
