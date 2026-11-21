// Copy for the Consultancy Solutions side of the site (facilities management, ISO / IMS,
// hospitality and wellness). Paths all live under /consultancy.

import type { Service, ServiceDetail } from "./site";

export const consultancyBase = "/consultancy";
export const consultancyServicePath = (slug: string) => `${consultancyBase}/services/${slug}`;
export const consultancyContactPath = `${consultancyBase}/contact`;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const consultancyServices = [
  {
    slug: "fm-operating-model",
    title: "FM operating model",
    short: "In-house, bundled or integrated: the right model per site",
    body: "We compare in-house, single-service, bundled and integrated FM for each building, and recommend the model that gives you control at the right cost.",
    tags: ["Feasibility", "Delivery model", "Cost model"],
    word: "Model",
    includes: [
      "Review of current FM set-up and costs",
      "In-house, bundled and integrated options compared",
      "Recommended model per site, with risks",
      "Organisation chart and budget for the chosen model",
    ],
  },
  {
    slug: "scope-sla-kpi-design",
    title: "Scope, SLA and KPI design",
    short: "Contract-ready specifications, service levels and penalties",
    body: "We write the scope, service levels and KPIs that turn an FM contract from a list of tasks into results you can measure and enforce.",
    tags: ["Specifications", "SLAs", "KPI weighting"],
    word: "SLA",
    includes: [
      "Scope of work for hard and soft services",
      "Response and resolution times by priority",
      "KPIs with targets, tolerances and weights",
      "Deduction formula and escalation steps",
    ],
  },
  {
    slug: "tendering-and-selection",
    title: "Tendering and selection",
    short: "Bid packs, technical evaluation and commercial comparison",
    body: "We prepare the tender pack, run clarifications and score every bid on technical and commercial merit, so you choose the contractor with evidence, not instinct.",
    tags: ["Tender pack", "Evaluation", "Negotiation"],
    word: "Tender",
    includes: [
      "Tender documents and pricing schedules",
      "Pre-qualification of contractors",
      "Technical and commercial bid scoring",
      "Recommendation report and contract award support",
    ],
  },
  {
    slug: "mobilisation-and-handover",
    title: "Mobilisation and handover",
    short: "Asset surveys, snagging, staffing plans and day-one readiness",
    body: "For new openings and contractor changes, we plan the switch-over: asset surveys, snagging, staffing and the checks that make day one run smoothly.",
    tags: ["Asset survey", "Snagging", "Day-one readiness"],
    word: "Ready",
    includes: [
      "Mobilisation plan and timeline",
      "Asset survey and condition register",
      "Snagging and defects tracking",
      "Staffing, training and day-one readiness checks",
    ],
  },
  {
    slug: "monitoring-and-audit",
    title: "Monitoring and audit",
    short: "Monthly audits, mystery inspections and KPI scoring",
    body: "Independent audits of hard and soft services, scored against your KPIs every month, with photo evidence and every finding tracked to closure.",
    tags: ["Site audits", "KPI scoring", "Deduction statements"],
    word: "Audit",
    includes: [
      "Hard services (MEP) technical audits",
      "Soft services inspections and scoring",
      "Monthly KPI scorecard and deduction statement",
      "Findings log tracked to closure",
    ],
  },
  {
    slug: "hse-and-fire-safety",
    title: "HSE and fire safety",
    short: "Permits, inspections, drills and corrective actions",
    body: "We check fire and life safety, permits to work, heat-stress controls and drills against international standards and the local authority's requirements.",
    tags: ["Fire and life safety", "Permits to work", "ISO 45001"],
    word: "Safety",
    includes: [
      "Fire-system test and impairment record review",
      "Permit-to-work and contractor safety checks",
      "Drills, emergency and continuity plans",
      "Corrective-action tracking to closure",
    ],
  },
  {
    slug: "energy-and-sustainability",
    title: "Energy and sustainability",
    short: "Baselines, audits and savings plans tied to ESG targets",
    body: "We measure energy and water use per building, find the losses and build a savings plan that supports your ESG and net-zero goals.",
    tags: ["Energy baselines", "Water", "ESG reporting"],
    word: "Energy",
    includes: [
      "Energy and water baselines per building",
      "Chiller, pump and lighting efficiency review",
      "Leak, loss and waste-diversion reporting",
      "Roadmap to green-building and ESG goals",
    ],
  },
  {
    slug: "asset-management",
    title: "Asset management",
    short: "Asset registers, planned maintenance and lifecycle costing",
    body: "A complete asset register, a planned maintenance programme that prevents breakdowns, and lifecycle costs that show when to repair and when to replace.",
    tags: ["Asset register", "PPM", "ISO 55001"],
    word: "Assets",
    includes: [
      "Asset register with condition ratings",
      "Planned preventive maintenance (PPM) programme",
      "Lifecycle costing and replacement plan",
      "CAFM / CMMS set-up and data clean-up",
    ],
  },
  {
    slug: "iso-and-ims-readiness",
    title: "Quality, ISO and IMS readiness",
    short: "One integrated system for ISO 41001, 9001, 14001, 45001 and more",
    body: "We build one integrated management system that serves several ISO standards at once, and get you ready for the certification-body audit.",
    tags: ["ISO 41001", "ISO 9001", "Integrated system"],
    word: "ISO",
    includes: [
      "Gap analysis against each standard",
      "Integrated policy, procedures and SOPs",
      "Training and internal audit programme",
      "Management review and certification-audit readiness",
    ],
  },
  {
    slug: "guest-satisfaction",
    title: "Hospitality guest satisfaction",
    short: "Voice of the guest, service standards and mystery stays",
    body: "For hotels and resorts: we listen to your guests, set clear service standards, test them with mystery stays and lift the scores that bring guests back.",
    tags: ["Mystery guest", "Service standards", "ISO 10002"],
    word: "Guest",
    includes: [
      "Guest surveys, review analysis and NPS tracking",
      "Service standards and touchpoint maps",
      "Mystery guest audits across rooms, dining and spa",
      "Complaint handling and service-recovery rules",
    ],
  },
  {
    slug: "wellness-and-experience",
    title: "Wellness and experience",
    short: "Spa, fitness and healthy-stay programmes, audited",
    body: "We design wellness programmes for spas, pools and healthy-stay rooms, then audit hygiene, safety and comfort so the experience matches the promise.",
    tags: ["Spa and fitness", "Pool safety", "WELL and Green Key"],
    word: "Wellness",
    includes: [
      "Spa, treatment and fitness concepts",
      "Pool, spa and water-safety audits",
      "Air quality, lighting and comfort checks",
      "Support for WELL, Green Key and EarthCheck",
    ],
  },
] as const satisfies readonly Service[];

export type ConsultancySlug = (typeof consultancyServices)[number]["slug"];

/** Four groups for the navigation, the services page and the home page pillars. */
export const consultancyGroups = [
  {
    id: "fm-strategy",
    title: "FM strategy and contracts",
    intro: "Set up facilities management the right way: the right model, a contract you can measure and a contractor chosen on evidence.",
    slugs: ["fm-operating-model", "scope-sla-kpi-design", "tendering-and-selection"],
  },
  {
    id: "audit-and-compliance",
    title: "Audit and compliance",
    intro: "Prove the contract is delivered and the building is safe, with independent audits and every finding tracked to closure.",
    slugs: ["mobilisation-and-handover", "monitoring-and-audit", "hse-and-fire-safety"],
  },
  {
    id: "assets-and-iso",
    title: "Assets, energy and ISO",
    intro: "Lower lifetime cost, measurable savings and one management system that serves every ISO standard you need.",
    slugs: ["energy-and-sustainability", "asset-management", "iso-and-ims-readiness"],
  },
  {
    id: "hospitality-and-wellness",
    title: "Hospitality and wellness",
    intro: "Guest experiences that earn better reviews and repeat stays, from the front desk to the spa.",
    slugs: ["guest-satisfaction", "wellness-and-experience"],
  },
].map((g) => ({ ...g, items: g.slugs.map((s) => consultancyServices.find((x) => x.slug === s)!) }));

/* ------------------------------------------------------------------ */
/* Home page                                                           */
/* ------------------------------------------------------------------ */

export const consultancyHome = {
  seoTitle: "Facilities Management Consultancy, ISO and Hospitality Advisory | Aura Hive",
  description:
    "Aura Hive Consultancy Solutions gives independent facilities management advice and audit: FM contracts, SLAs and KPIs, tendering, HSE, energy, asset management, ISO and IMS readiness, guest satisfaction and wellness.",
  hero: {
    headline: ["Safe,", "compliant,", "cost-efficient", "buildings."],
    body: "Independent facilities management advice and audit. We help you write the contract, choose the contractor and prove the contract is delivered, to international standards and local law, wherever your buildings are.",
  },
  signals: [
    { label: "Monthly audit", value: "Scorecard ready for review" },
    { label: "Planned maintenance", value: "Target 95% on time" },
    { label: "ISO 41001", value: "Gap analysis complete" },
    { label: "Fire safety", value: "Impairments cleared in 24h" },
  ],
  marquee: ["Facilities management", "SLAs and KPIs", "Tendering", "HSE and fire safety", "Energy", "ISO and IMS", "Guest satisfaction", "Wellness"],
  needs: {
    title: "What owners need today",
    statement:
      "Facilities contracts are judged on results now, not task lists. Owners need proof that buildings are safe, compliant and good value, and the data to show it every month.",
    items: [
      { name: "Outcome-based contracts", body: "SLAs and KPIs tied to payment, not just a list of tasks.", bars: [0.4, 0.7, 1, 0.7, 0.4] },
      { name: "Proof of compliance", body: "Civil Defence, municipality, labour and ISO evidence on demand.", bars: [1, 0.5, 0.8, 0.3, 0.6] },
      { name: "Data and transparency", body: "Monthly dashboards, asset registers and audit trails.", bars: [0.3, 0.45, 0.6, 0.8, 1] },
      { name: "Energy, water and ESG", body: "Measured consumption and targets, aligned with national and corporate net-zero goals.", bars: [0.6, 1, 0.6, 1, 0.6] },
      { name: "Safety and resilience", body: "Fire and life safety, summer-heat operations, drills and continuity plans.", bars: [1, 0.8, 0.6, 0.4, 0.2] },
      { name: "Cost control", body: "Lifecycle costing, planned over breakdown maintenance and fewer variation claims.", bars: [0.5, 0.5, 1, 0.5, 0.5] },
    ],
  },
  pillars: {
    title: "Our main services",
    intro: "Eleven services in four groups. Start with one, such as an audit, or let us cover the whole life of your FM contract.",
  },
  showcase: {
    lines: ["Independent.", "One partner."] as [string, string],
    body: "Our advice and audits stay separate from the contractors who deliver the work, so every finding is on your side.",
  },
  scope: {
    title: "What we review on site",
    intro: "Three areas, like the three bars of our logo. Specialist assessments are led by qualified engineers engaged for each project.",
    items: [
      {
        title: "Hard services (MEP)",
        body: "Technical audit of the systems that keep a building running and safe.",
        points: ["HVAC and chillers", "Electrical, power and generators", "Plumbing and water", "Fire protection", "Lifts and escalators", "BMS and controls"],
      },
      {
        title: "Soft services",
        body: "Inspection scoring and licence checks for the services guests and tenants notice first.",
        points: ["Cleaning and housekeeping", "Waste and recycling", "Pest control", "Landscaping", "Security and access", "Catering, food safety and laundry"],
      },
      {
        title: "Specialist operations",
        body: "Plant that needs specialist eyes, with findings tracked to closure.",
        points: ["Sewage treatment (STP)", "Power and utilities", "Solar PV and metering", "Energy and water use", "Discharge and reuse compliance", "Helpdesk and resident care"],
      },
    ],
  },
  kpis: {
    title: "KPIs that make a contract measurable",
    intro: "Illustrative starting points. We calibrate each target to the asset, the site and the contract.",
    items: [
      { kpi: "Planned maintenance completed", target: "95% or higher, on time", source: "CAFM / CMMS report" },
      { kpi: "Emergency call (priority 1)", target: "Attend within 30 minutes", source: "Helpdesk timestamps" },
      { kpi: "Routine work orders closed", target: "90% or higher within SLA", source: "Work-order data" },
      { kpi: "Cleaning audit score", target: "85% or higher", source: "Monthly inspection" },
      { kpi: "Pest callbacks resolved", target: "Within 48 hours", source: "Service reports" },
      { kpi: "STP effluent compliance", target: "100% of samples within limits", source: "Laboratory results" },
      { kpi: "Fire-system impairments", target: "Cleared within 24 hours", source: "Impairment log" },
      { kpi: "Resident or guest satisfaction", target: "Agreed score, tracked monthly", source: "Surveys and reviews" },
    ],
    steps: [
      { title: "Define and weight", body: "Set each KPI's target, tolerance and weight in the contract." },
      { title: "Measure and audit", body: "Combine contractor data with our independent site audits." },
      { title: "Score and deduct", body: "Rate each service line red, amber or green and apply the contract formula." },
      { title: "Correct and escalate", body: "Agree corrective actions, cure periods and escalation steps." },
    ],
    note: "Every month you receive a deduction statement for approval, with the evidence behind each finding.",
  },
  process: {
    title: "How an engagement runs",
    intro: "Four stages, from the first site walk to the monthly service review. Each one ends with something you can use.",
    steps: [
      {
        title: "Discover",
        body: "Site walk, contract and asset review, interviews and a data request. You receive a baseline report and gap register.",
      },
      {
        title: "Plan",
        body: "We agree scope, KPIs, timeline, budget and reporting. You receive a KPI framework, audit calendar and checklists.",
      },
      {
        title: "Deliver",
        body: "Audits, tendering support, mobilisation and corrective-action tracking. You receive audit reports, a findings log and tender evaluations.",
      },
      {
        title: "Report",
        body: "Monthly scorecard, deduction statement and service review meeting. You receive a monthly KPI report and action plan.",
      },
    ],
    includedTitle: "Built into every engagement",
    included: [
      { value: 9, suffix: "", label: "ISO standards mapped into one system" },
      { value: 4, suffix: "", label: "engagement models to choose from" },
      { value: 90, suffix: "", label: "days' warning before licences and certificates expire" },
      { value: 1, suffix: "", label: "monthly KPI report and action plan" },
    ],
  },
  standards: {
    title: "One system, many standards",
    intro:
      "ISO management standards share one structure (Annex SL), so one integrated management system can serve several standards at once.",
    items: [
      { code: "ISO 41001", name: "Facility management", body: "FM run as a governed, managed service." },
      { code: "ISO 9001", name: "Quality", body: "Consistent service delivery and customer focus." },
      { code: "ISO 14001", name: "Environment", body: "Control of waste, energy, water and emissions." },
      { code: "ISO 45001", name: "Health and safety", body: "Safe work, permits and incident control." },
      { code: "ISO 50001", name: "Energy", body: "Measured energy performance and savings." },
      { code: "ISO 55001", name: "Asset management", body: "Lifecycle value from physical assets." },
      { code: "ISO 22000", name: "Food safety", body: "Hygiene and hazard control in catering." },
      { code: "ISO 27001", name: "Information security", body: "Protection of building, guest and CCTV data." },
      { code: "ISO 22301", name: "Continuity", body: "Recovery from outages and incidents." },
    ],
    journey: ["Gap analysis", "Integrated documents", "Training", "Internal audit", "Management review", "Certification audit"],
    note: "Certificates are issued by accredited certification bodies, not by Aura Hive.",
  },
  technology: {
    title: "Technology and reporting",
    intro: "Delivered through our web-based inspection and KPI reporting portal, alongside your own CAFM where you have one.",
    setup: [
      "CAFM / CMMS selection and set-up",
      "BMS and sensor data review: energy and HVAC alarms",
      "Inspection app with photo evidence and timestamps",
      "KPI dashboards by site and service line",
      "Licence and certificate expiry alerts at 90, 60 and 30 days",
      "AI assistants for tickets and follow-ups",
    ],
    report: [
      "Scorecard by service line",
      "Month-on-month trend charts",
      "Open findings by severity",
      "Deduction statement for approval",
      "Recommendations and next-month plan",
    ],
  },
  cta: {
    lines: ["Book a free", "consultation."] as [string, string],
    body: "Send us your FM contract and site list. We'll tell you where the gaps are and recommend the right service and engagement model.",
  },
} as const;

/** The six sectors we support, shown on the home page with an image each. */
export const consultancyIndustries = [
  {
    name: "Hotels and resorts",
    image: "/images/consultancy/hotels.webp",
    alt: "A row of gold arches leading to a gold sphere, like a resort entrance",
    body: "Guest-facing quality, laundry, catering, landscaping and STP in one property, measured against the scores guests leave.",
    points: ["Guest satisfaction and mystery stays", "Soft services and food safety", "Spa, pool and wellness audits"],
  },
  {
    name: "Residential communities",
    image: "/images/consultancy/residential.webp",
    alt: "Gold and black towers around a quiet courtyard",
    body: "Owners associations and developers. Service-charge scrutiny and contractor oversight that residents can see.",
    points: ["Service-charge and contract review", "Contractor KPI scoring", "Resident satisfaction tracking"],
  },
  {
    name: "Malls and commercial buildings",
    image: "/images/consultancy/commercial.webp",
    alt: "Stacked black floors and gold columns rising around a gold core",
    body: "Integrated FM contracts, tenant comfort, energy cost and uptime across busy, always-open buildings.",
    points: ["Integrated FM tendering", "Energy and chiller efficiency", "Lift, escalator and HVAC uptime"],
  },
  {
    name: "Hospitals and clinics",
    image: "/images/consultancy/healthcare.webp",
    alt: "White and gold capsules around a gold cross",
    body: "Infection-control cleaning, critical power, air quality and the compliance records inspectors ask for.",
    points: ["Infection-control cleaning audits", "Critical power and generator checks", "Air quality and compliance records"],
  },
  {
    name: "Venues and playgrounds",
    image: "/images/consultancy/venues.webp",
    alt: "Rings of gold and black tiers forming a stadium bowl",
    body: "Event-day peaks, crowd safety, security and equipment safety checks for places that fill up fast.",
    points: ["Crowd and event-day safety", "Security and access review", "Play equipment safety checks"],
  },
  {
    name: "Utilities and infrastructure",
    image: "/images/consultancy/utilities.webp",
    alt: "Gold and black tanks joined by pipes, like a treatment plant",
    body: "STP and power operations, uptime, discharge limits and safety compliance, checked by qualified engineers.",
    points: ["STP operations and effluent tests", "Power, fuel and solar PV checks", "Discharge and safety compliance"],
  },
] as const;

export const consultancyFaqs = [
  {
    q: "What does Aura Hive Consultancy Solutions do?",
    a: "We give owners independent facilities management advice and audit. We help you choose the right FM model, write contracts with clear SLAs and KPIs, select contractors, audit performance every month, and get ready for ISO certification. For hotels and resorts we also improve guest satisfaction and wellness programmes.",
  },
  {
    q: "Are you an FM contractor?",
    a: "No. We don't deliver cleaning, maintenance or security ourselves. Keeping our advice separate from the contractors who do the work is what makes our audits independent.",
  },
  {
    q: "Which industries do you support?",
    a: "Hotels and resorts, residential communities, malls and commercial buildings, hospitals and clinics, venues and playgrounds, and utilities and infrastructure.",
  },
  {
    q: "Do you issue ISO certificates?",
    a: "No. Certificates are issued by accredited certification bodies. We build your management system, train your team, run internal audits and prepare you for the certification-body audit.",
  },
  {
    q: "Do you work outside the UAE?",
    a: "Yes. We work to international standards first and map every site to its local law, so we can support buildings wherever they are.",
  },
  {
    q: "How do we start?",
    a: "Book a free consultation. Send us your FM contract and site list, and we'll tell you where the gaps are and which service and engagement model fits.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Engagement models (home, services page and contact form)            */
/* ------------------------------------------------------------------ */

export const engagementModels = [
  {
    id: "audit",
    title: "Audit",
    body: "A one-off contract health check or site audit, with a written report and action plan.",
    best: "Owners with a single site or a contract in dispute.",
  },
  {
    id: "project",
    title: "Project",
    body: "Fixed-scope work: FM feasibility, tender pack, mobilisation or ISO readiness.",
    best: "New openings and contract renewals.",
  },
  {
    id: "retainer",
    title: "Monthly retainer",
    body: "Ongoing audits, KPI reporting, service reviews and findings follow-up.",
    best: "Portfolios and communities.",
  },
  {
    id: "outsourced",
    title: "Outsourced management",
    body: "We manage the FM function and contractors for you, with results reviewed independently.",
    best: "Owners without an FM team.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export const consultancyAbout = {
  title: "About Our Consultancy",
  description:
    "Meet Aura Hive Consultancy Solutions: independent facilities management, ISO and hospitality advisers who help owners keep buildings safe, compliant and cost-efficient.",
  hero: {
    headline: ["Independent", "advice", "for", "buildings", "that", "work."],
    highlight: "buildings",
    body: "Aura Hive Creative Solutions L.L.C. advises owners of hotels, communities, malls, hospitals, venues and utilities. We stand between you and your contractors, with clear standards, independent audits and monthly reporting.",
  },
  chips: [
    { label: "In the hive", value: "FM and engineering" },
    { label: "In the hive", value: "HSE and ISO specialists" },
    { label: "In the hive", value: "Hospitality and wellness" },
    { label: "In the hive", value: "Technical and AI team" },
  ],
  marquee: ["Independent", "Compliant", "Measurable", "Safe", "Efficient", "Accountable"],
  name: {
    title: "What Aura Hive means for your buildings",
    parts: [
      {
        word: "Aura",
        body: "The feeling people get when they walk into your building: clean, safe, comfortable and cared for. It comes from hundreds of small services done right, every day.",
      },
      {
        word: "Hive",
        body: "Many specialists working as one. Engineers, HSE and ISO experts, hospitality and wellness advisers share one plan, one set of KPIs and one report.",
      },
    ],
  },
  mission: {
    label: "Our mission",
    lines: ["To give every owner", "proof that their buildings", "are safe, compliant", "and good value."],
  },
  values: {
    title: "Why owners choose us",
    intro: "Three principles, like the three bars in our logo. The one in the middle carries the most weight.",
    items: [
      {
        title: "Clear reporting",
        body: "Progress tracked against agreed KPIs and reported every month, with the evidence behind each finding.",
      },
      {
        title: "Independent",
        body: "Our advice and audits stay separate from the contractors who deliver the work, so we're always on your side of the table.",
      },
      {
        title: "One partner",
        body: "FM, ISO, guest experience, CRM, AI automation and brand support from one team, so nothing falls between suppliers.",
      },
    ],
  },
  online: {
    badge: "Built to travel",
    title: "International standards, local law",
    intro:
      "Rules differ by country and building type. We start from international standards and confirm the local requirements for every site we work on.",
    points: [
      { title: "On site when it matters", body: "Site walks, audits and mystery inspections happen in person, with photo evidence and timestamps." },
      { title: "Online for everything else", body: "Reviews, dashboards and reports run online, so you can follow progress from anywhere." },
      { title: "Specialists per project", body: "Qualified engineers and operators join for STP, power, fire and other specialist assessments." },
      { title: "Local layer confirmed", body: "Authority approvals, licences and permits are checked for each site. This is not legal advice." },
    ],
  },
  team: {
    title: "Our leadership",
    intro: "Practitioners with hands-on experience across hospitality, healthcare, real estate, utilities, retail and industry.",
    people: [
      {
        name: "Muhammad Shareef",
        role: "Chief Executive, Management and Investment",
        body: "Leads company management and investment direction: business planning, operational priorities and growth.",
      },
      {
        name: "Sana Akhtar",
        role: "Chief Executive, Technical and AI Teams",
        body: "Leads the technical and AI teams, and applies technology to practical business needs.",
      },
      {
        name: "Consultant panel",
        role: "Specialists engaged by project",
        body: "FM and engineering, HSE and ISO, hospitality and wellness experts, matched to each engagement.",
      },
    ],
  },
  services: {
    title: "What we do",
    intro: "Eleven services in four groups. Use one, or let us cover the whole life of your FM contract.",
  },
  cta: {
    lines: ["Let's talk about", "your buildings."] as [string, string],
    body: "Send us your FM contract and site list. We'll come back with the gaps we see and the right next step.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Services page                                                       */
/* ------------------------------------------------------------------ */

export const consultancyServicesPage = {
  title: "Facilities Management Consultancy Services",
  description:
    "Explore Aura Hive's consultancy services: FM operating model, scope, SLA and KPI design, tendering, mobilisation, monitoring and audit, HSE and fire safety, energy, asset management, ISO and IMS readiness, guest satisfaction and wellness.",
  hero: {
    headline: ["Eleven", "services.", "One", "independent", "partner."],
    body: "From choosing the right FM model to proving the contract is delivered every month. Pick one service or bring several together under one engagement.",
  },
  combos: {
    title: "Popular starting points",
    intro: "Most owners start with one of these, then extend into a monthly retainer.",
    items: [
      {
        id: "health-check",
        title: "Contract health check",
        body: "For owners who suspect they're paying for more than they get. Find the gaps in weeks.",
        slugs: ["monitoring-and-audit", "hse-and-fire-safety", "scope-sla-kpi-design"],
      },
      {
        id: "retender",
        title: "Re-tender your FM",
        body: "For contract renewals and new openings that need the right contractor from day one.",
        slugs: ["fm-operating-model", "tendering-and-selection", "mobilisation-and-handover"],
      },
      {
        id: "guest-scores",
        title: "Lift guest scores",
        body: "For hotels and resorts that want better reviews, repeat stays and a stronger wellness offer.",
        slugs: ["guest-satisfaction", "wellness-and-experience", "monitoring-and-audit"],
      },
    ],
  },
  engagement: {
    title: "Four ways to work with us",
    intro: "Choose the engagement that fits your portfolio. Many owners start with an audit, then move to a monthly retainer.",
  },
  faqs: [
    {
      q: "Can we hire you for just one service?",
      a: "Yes. Many owners start with a single audit or a tender, then extend into monthly monitoring. Each service works on its own and gets stronger when combined.",
    },
    {
      q: "Which service should we start with?",
      a: "If you have a contract in place, start with monitoring and audit to see how it's performing. If your contract is ending or you're opening a new building, start with the operating model, scope and tendering.",
    },
    {
      q: "Do you review both hard and soft services?",
      a: "Yes. We audit MEP systems such as HVAC, power, plumbing, fire protection, lifts and BMS, and soft services such as cleaning, waste, pest control, landscaping, security, catering and laundry.",
    },
    {
      q: "How do you report findings?",
      a: "Every month you get a scorecard by service line, trend charts, open findings by severity, a deduction statement for approval and a plan for next month, through our web-based reporting portal.",
    },
    {
      q: "Is your advice legal advice?",
      a: "No. We confirm the current local requirements for each site and map them to international standards, but we don't give legal advice.",
    },
  ],
  cta: {
    lines: ["Not sure where", "to start?"] as [string, string],
    body: "Send us your FM contract and site list. We'll recommend the right service and engagement model in a free consultation.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Individual service pages                                            */
/* ------------------------------------------------------------------ */

export const consultancyDetails: Record<ConsultancySlug, ServiceDetail> = {
  "fm-operating-model": {
    seoTitle: "FM Operating Model Consultancy",
    headline: "The right FM model for every building.",
    intro:
      "In-house, single-service, bundled or integrated: we compare the options for each site and recommend the facilities management model that gives you control at the right cost.",
    shape: "tower",
    steps: [
      { title: "Review", body: "We look at your buildings, current contracts, costs and team, and what each site needs to run well." },
      { title: "Compare", body: "We model in-house, bundled and integrated options side by side, with costs, risks and control." },
      { title: "Recommend", body: "You get a recommended model per site, with an organisation chart, budget and next steps." },
    ],
    faqs: [
      {
        q: "What is integrated facilities management?",
        a: "One contractor delivers most hard and soft services under one contract and one set of KPIs. It's simpler to manage, but it suits some portfolios better than others.",
      },
      {
        q: "Should we keep FM in-house?",
        a: "Sometimes. In-house teams give you control, but cost more to run and scale. We compare the options with real numbers before you decide.",
      },
      {
        q: "Can different sites use different models?",
        a: "Yes. A hotel and a residential community often need different models. We recommend what fits each site.",
      },
    ],
  },
  "scope-sla-kpi-design": {
    seoTitle: "FM Scope, SLA and KPI Design",
    headline: "Contracts that pay for results, not tasks.",
    intro:
      "We write contract-ready scopes, service levels and KPIs, with targets, tolerances, weights and a clear deduction formula, so performance can be measured and enforced.",
    shape: "gauge",
    steps: [
      { title: "Define", body: "We write the scope for each service line and agree the results that matter on each site." },
      { title: "Weight", body: "Every KPI gets a target, a tolerance and a weight, with response times by priority." },
      { title: "Enforce", body: "We add the deduction formula, cure periods and escalation steps to the contract." },
    ],
    faqs: [
      {
        q: "What's the difference between an SLA and a KPI?",
        a: "An SLA sets the service level the contractor must deliver, such as attending a priority 1 call within 30 minutes. A KPI measures how often they achieve it, and can be tied to payment.",
      },
      {
        q: "How do KPI deductions work?",
        a: "Each KPI has a target, a tolerance and a weight. If the result falls below tolerance, the deduction formula in the contract applies, and you receive a monthly statement with the evidence.",
      },
      {
        q: "Can you update an existing contract?",
        a: "Yes. We can review your current contract and propose new KPIs and SLAs for the next renewal or as a variation.",
      },
    ],
  },
  "tendering-and-selection": {
    seoTitle: "FM Tendering and Contractor Selection",
    headline: "Choose your contractor on evidence.",
    intro:
      "We prepare the tender pack, pre-qualify contractors, run clarifications and score every bid on technical and commercial merit, then support you through award.",
    shape: "funnel",
    steps: [
      { title: "Prepare", body: "We write the tender documents, pricing schedules and evaluation criteria." },
      { title: "Evaluate", body: "We score each bid on technical merit and compare prices line by line." },
      { title: "Award", body: "You get a clear recommendation report and support with negotiation and contract award." },
    ],
    faqs: [
      {
        q: "How many contractors should we invite?",
        a: "Usually three to six pre-qualified contractors. Enough for real competition, few enough to evaluate properly.",
      },
      {
        q: "Do you only look at price?",
        a: "No. We weight technical capability, staffing, systems and track record alongside price, so the cheapest bid doesn't win by default.",
      },
      {
        q: "Can you help with the switch to the new contractor?",
        a: "Yes. Our mobilisation and handover service plans the switch-over, from asset surveys to day-one readiness.",
      },
    ],
  },
  "mobilisation-and-handover": {
    seoTitle: "FM Mobilisation and Handover",
    headline: "Ready on day one.",
    intro:
      "For new openings and contractor changes, we plan the switch-over: asset surveys, snagging, staffing plans and the readiness checks that make day one run smoothly.",
    shape: "network",
    steps: [
      { title: "Survey", body: "We survey every asset and record its condition, so the new contractor starts from facts." },
      { title: "Prepare", body: "We track snags and defects, check staffing and training, and confirm licences and systems." },
      { title: "Hand over", body: "We run day-one readiness checks and follow up the first weeks of service." },
    ],
    faqs: [
      {
        q: "How long does mobilisation take?",
        a: "It depends on the size of the site and the services. Most mobilisations take between four and twelve weeks; we agree a timeline at the start.",
      },
      {
        q: "Can you help with a new building handover?",
        a: "Yes. We review snagging, as-built documents and asset data so operations start with what they need.",
      },
      {
        q: "What happens to the outgoing contractor?",
        a: "We plan the exit with them: asset condition, open work orders, spare parts and records, so nothing is lost in the handover.",
      },
    ],
  },
  "monitoring-and-audit": {
    seoTitle: "FM Monitoring and Audit Services",
    headline: "Proof that your contract is delivered.",
    intro:
      "Independent monthly audits of hard and soft services, mystery inspections and KPI scoring, with photo evidence, a deduction statement and every finding tracked to closure.",
    shape: "magnifier",
    steps: [
      { title: "Inspect", body: "We audit MEP systems and soft services on site, with photos and timestamps." },
      { title: "Score", body: "We combine our findings with contractor data and rate each service line red, amber or green." },
      { title: "Follow up", body: "You get a monthly report and deduction statement, and we track every finding until it's closed." },
    ],
    faqs: [
      {
        q: "What do you audit?",
        a: "Hard services such as HVAC, electrical, plumbing, fire protection, lifts and BMS, and soft services such as cleaning, waste, pest control, landscaping, security, catering, laundry and helpdesk.",
      },
      {
        q: "How often do you audit?",
        a: "Usually monthly, with extra mystery inspections where they help. We agree an audit calendar with you at the start.",
      },
      {
        q: "Will the contractor know when you're coming?",
        a: "Some audits are planned with the contractor; mystery inspections are not. Both give you an honest picture.",
      },
    ],
  },
  "hse-and-fire-safety": {
    seoTitle: "HSE and Fire Safety Consultancy",
    headline: "Safe buildings, with the records to prove it.",
    intro:
      "We review fire and life safety, permits to work, heat-stress controls, drills and continuity plans against international standards and the local authority's requirements.",
    shape: "shield",
    steps: [
      { title: "Check", body: "We review fire-system tests, impairment logs, permits and contractor safety on site." },
      { title: "Drill", body: "We check drills, emergency plans and continuity arrangements, including summer-heat operations." },
      { title: "Close", body: "Every corrective action is tracked to closure and reported monthly." },
    ],
    faqs: [
      {
        q: "Do you follow local fire codes?",
        a: "Yes. We use international references such as NFPA alongside national fire codes, and confirm authority approvals and test records for each site.",
      },
      {
        q: "Can you prepare us for ISO 45001?",
        a: "Yes. HSE work feeds directly into our ISO and integrated management system service.",
      },
      {
        q: "Is this legal advice?",
        a: "No. We confirm current local requirements and check compliance, but we don't give legal advice.",
      },
    ],
  },
  "energy-and-sustainability": {
    seoTitle: "Energy and Sustainability Consultancy for Buildings",
    headline: "Measure it, then save it.",
    intro:
      "We set energy and water baselines per building, review chiller and pump efficiency, find leaks and losses, and build a savings plan tied to your ESG and green-building goals.",
    shape: "leaf",
    steps: [
      { title: "Baseline", body: "We measure energy and water use per building from meters, bills and BMS data." },
      { title: "Find savings", body: "We review chillers, pumps, lighting and controls, and find leaks and losses." },
      { title: "Plan", body: "You get a savings plan and roadmap toward ESG, ISO 50001 and green-building ratings." },
    ],
    faqs: [
      {
        q: "Which ratings do you support?",
        a: "We help buildings work toward schemes such as LEED, BREEAM and WELL, and toward ISO 50001 for energy management.",
      },
      {
        q: "Do we need new meters?",
        a: "Not always. We start with the data you have, then recommend sub-meters only where they'll pay back.",
      },
      {
        q: "Can you report for ESG?",
        a: "Yes. We report energy, water and waste diversion in a way that fits your ESG and net-zero targets.",
      },
    ],
  },
  "asset-management": {
    seoTitle: "Asset Management and Lifecycle Costing",
    headline: "Know every asset, and when to replace it.",
    intro:
      "A complete asset register, a planned maintenance programme that prevents breakdowns, and lifecycle costing that shows when to repair and when to replace.",
    shape: "gear",
    steps: [
      { title: "Register", body: "We build or clean your asset register, with condition ratings and critical assets marked." },
      { title: "Plan", body: "We set up a planned preventive maintenance programme in your CAFM or CMMS." },
      { title: "Forecast", body: "We cost each asset's lifecycle and plan replacements years ahead." },
    ],
    faqs: [
      {
        q: "What is lifecycle costing?",
        a: "It adds up the full cost of an asset over its life, including energy, maintenance and replacement, so you can compare options fairly.",
      },
      {
        q: "Do you set up CAFM software?",
        a: "Yes. We help you choose and set up a CAFM or CMMS, and load clean asset and maintenance data into it.",
      },
      {
        q: "Does this help with ISO 55001?",
        a: "Yes. A good asset register and maintenance programme are the foundation for ISO 55001 asset management.",
      },
    ],
  },
  "iso-and-ims-readiness": {
    seoTitle: "ISO and Integrated Management System (IMS) Consultancy",
    headline: "One system for every ISO standard.",
    intro:
      "ISO standards share one structure, so one integrated management system can serve ISO 41001, 9001, 14001, 45001 and more. We build it with you and prepare you for the certification-body audit.",
    shape: "pdca",
    steps: [
      { title: "Gap analysis", body: "We compare how you work today with each standard you want to meet." },
      { title: "Build", body: "We write an integrated policy, procedures, SOPs and registers, and train your team." },
      { title: "Audit-ready", body: "We run internal audits and a management review, then support you through certification." },
    ],
    faqs: [
      {
        q: "Which ISO standards do you cover?",
        a: "ISO 41001 facility management, 9001 quality, 14001 environment, 45001 health and safety, 50001 energy, 55001 asset management, 22000 food safety, 27001 information security and 22301 continuity.",
      },
      {
        q: "Do you issue the certificate?",
        a: "No. Certificates are issued by accredited certification bodies. We make sure you're ready for their audit.",
      },
      {
        q: "What is an integrated management system?",
        a: "One set of policies, procedures, audits and reviews that meets several ISO standards at once, instead of a separate system for each.",
      },
    ],
  },
  "guest-satisfaction": {
    seoTitle: "Hospitality Guest Satisfaction Consultancy",
    headline: "Guests who come back.",
    intro:
      "For hotels and resorts: we listen to your guests, set clear service standards from arrival to departure, test them with mystery stays and improve the scores that drive repeat stays.",
    shape: "star",
    steps: [
      { title: "Listen", body: "We analyse surveys, reviews and NPS across channels, following ISO 10004 guidance." },
      { title: "Set standards", body: "We map every touchpoint and write service standards and SOPs your team can follow." },
      { title: "Test and train", body: "Mystery guest audits score rooms, dining and spa, and training lifts the weak spots." },
    ],
    faqs: [
      {
        q: "What does a mystery guest audit include?",
        a: "An independent stay with scored quality checks across arrival, rooms, housekeeping, dining, spa and departure, with a full report afterwards.",
      },
      {
        q: "How do you measure improvement?",
        a: "With each property we track review scores, repeat-stay rate, complaint closure time and service-recovery success.",
      },
      {
        q: "Do you handle complaints?",
        a: "We set up complaint handling aligned to ISO 10002, with clear service-recovery rules for your team.",
      },
    ],
  },
  "wellness-and-experience": {
    seoTitle: "Wellness and Experience Consultancy",
    headline: "Wellness that lives up to the promise.",
    intro:
      "We design spa, fitness and healthy-stay programmes, then audit hygiene, water safety, air quality and comfort, and support ratings such as WELL, Green Key and EarthCheck.",
    shape: "halo",
    steps: [
      { title: "Design", body: "Spa, treatment, fitness, pool and healthy-stay concepts that fit your guests and your building." },
      { title: "Set standards", body: "Therapist competence, hygiene and safety standards for every wellness space." },
      { title: "Measure", body: "Audits of water quality, air, lighting and comfort, plus guest feedback on outcomes." },
    ],
    faqs: [
      {
        q: "Do you provide medical or clinical services?",
        a: "No. We support programme design, standards and audits. Clinical or medical services need licensed practitioners and local approvals.",
      },
      {
        q: "Can you help with WELL or Green Key?",
        a: "Yes. We help buildings prepare for healthy-building ratings such as WELL and sustainability schemes such as Green Key and EarthCheck.",
      },
      {
        q: "Do you audit pools and spas?",
        a: "Yes. We audit water quality, pool and spa safety, and hygiene standards.",
      },
    ],
  },
};

export const consultancyGroupOf = (slug: string) => consultancyGroups.find((g) => g.slugs.includes(slug))!;

/* ------------------------------------------------------------------ */
/* Contact page                                                        */
/* ------------------------------------------------------------------ */

export const consultancyContact = {
  title: "Book a Free Consultation",
  description:
    "Contact Aura Hive Consultancy Solutions. Send us your FM contract and site list, and we'll tell you where the gaps are and recommend the right service and engagement model.",
  hero: {
    headline: ["Let's", "talk", "about", "your", "buildings."],
    highlight: "buildings.",
    body: "Send us your FM contract and site list, or just tell us what's worrying you. We'll reply with the gaps we see and a recommended next step.",
  },
  badge: "Free first consultation, wherever your buildings are",
  steps: [
    { title: "We review", body: "We read your message and, if you share them, your FM contract and site list." },
    { title: "We talk", body: "We set up a consultation to understand your buildings, contractors and goals." },
    { title: "You get a plan", body: "We recommend the right service and engagement model, with a clear proposal." },
  ],
  faqs: [
    {
      q: "What happens after I send the form?",
      a: "We review your message and reply by email to arrange a free consultation. After it, we send a recommendation with a clear proposal.",
    },
    {
      q: "What should I send you?",
      a: "Your FM contract, a site list with building types and sizes, and any audit reports or KPI data you already have. If you don't have them to hand, a short description is enough to start.",
    },
    {
      q: "Is the first consultation really free?",
      a: "Yes. We use it to understand your buildings and tell you where the gaps are. You decide whether to go further.",
    },
    {
      q: "Do you visit sites?",
      a: "Yes. Audits and site walks happen in person. Consultations, reviews and reporting can happen online.",
    },
  ],
} as const;
