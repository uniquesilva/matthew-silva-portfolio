export type ProjectStatus =
  | "Production"
  | "Prototype"
  | "Beta"
  | "Private Build"
  | "In Development";

export type FlowStep = {
  title: string;
  detail: string;
};

export type Challenge = {
  title: string;
  problem: string;
  response: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  cardTechnologies: string[];
  outcomes: string[];
  overview: string;
  problem: string;
  roleDetail: string;
  built: string[];
  architecture: FlowStep[];
  challenges: Challenge[];
  learned: string[];
  statusDetail: string;
};

export const projects: Project[] = [
  {
    slug: "woredrobe",
    name: "Woredrobe",
    summary:
      "Built an iOS wardrobe platform with authentication, social discovery, marketplace infrastructure, cloud persistence, and production backend services.",
    role: "Founder / Product Builder / Lead Developer",
    status: "Beta",
    technologies: [
      "Swift",
      "iOS",
      "Apple Sign In",
      "PostgreSQL",
      "Railway",
      "REST APIs",
      "Authentication",
      "TestFlight",
    ],
    cardTechnologies: ["Swift", "iOS", "PostgreSQL", "Railway", "REST"],
    outcomes: [
      "Authenticated iOS client distributed through TestFlight",
      "Cloud-backed wardrobe data on PostgreSQL",
      "Social discovery and marketplace structure in the product",
    ],
    overview:
      "Woredrobe is an AI-assisted wardrobe and outfit planning application for iOS. The product covers what someone owns, how outfits come together, social discovery, and the structure for a marketplace. The build includes Apple Sign In, a REST API, PostgreSQL, Railway hosting, and a TestFlight build.",
    problem:
      "Outfit planning is usually split across a closet, a camera roll, and memory. A useful product has to remember what a person owns, help them put outfits together, and still be there the next time they open the app. That means an account, persistent cloud data, and a model that can grow into social discovery and exchange.",
    roleDetail:
      "I took Woredrobe from concept through a TestFlight build. I owned the product decisions, the Swift iOS client, Apple Sign In, the REST API, PostgreSQL persistence, and deployment of the backend on Railway.",
    built: [
      "Swift iOS client for wardrobe and outfit planning",
      "Apple Sign In authentication",
      "REST API for wardrobe, social, and marketplace data",
      "PostgreSQL persistence so records live beyond the device",
      "Social discovery features",
      "Marketplace architecture for item exchange",
      "Railway deployment for the backend",
      "TestFlight distribution for the iOS build",
    ],
    architecture: [
      {
        title: "iOS client",
        detail:
          "Swift app for wardrobe management, outfit planning, and the social surfaces.",
      },
      {
        title: "Apple Sign In",
        detail:
          "Native sign-in on device, with identity carried through to the API.",
      },
      {
        title: "REST API",
        detail:
          "Authenticated access to wardrobe records, social discovery, and marketplace data.",
      },
      {
        title: "PostgreSQL",
        detail: "Cloud persistence for accounts and product data.",
      },
      {
        title: "Railway",
        detail: "Hosted backend services for the API and database.",
      },
      {
        title: "TestFlight",
        detail: "Beta distribution of the iOS build.",
      },
    ],
    challenges: [
      {
        title: "Sign-in that stays attached to cloud data",
        problem:
          "A wardrobe app that only stores data on the phone is a demo. People need to leave and come back, which means identity and records have to meet.",
        response:
          "I used Apple Sign In on the device and kept the source of truth in PostgreSQL behind the API, so the account and the wardrobe survive beyond one install.",
      },
      {
        title: "Social and marketplace scope",
        problem:
          "Discovery and exchange are easy to overbuild before the core loop — owning clothes and planning outfits — actually works.",
        response:
          "I kept authentication and cloud persistence as the base, and modeled social and marketplace data so those surfaces could grow on the same account system.",
      },
      {
        title: "A build someone can install",
        problem:
          "A simulator walkthrough does not surface signing, backend availability, or real account flows.",
        response:
          "I distributed the app through TestFlight and deployed the backend on Railway so the product could be opened as a beta, with a live API behind it.",
      },
    ],
    learned: [
      "Cloud persistence and authentication are what make a mobile product returnable.",
      "Marketplace and social features depend on a stable identity model first.",
      "TestFlight forces production-shaped decisions while the product is still in beta.",
    ],
    statusDetail:
      "Beta. The iOS app is distributed through TestFlight, with backend services deployed on Railway. This is not presented as a public App Store launch.",
  },
  {
    slug: "pokeslabs",
    name: "PokeSlabs",
    summary:
      "Designed and built a blockchain-connected collectible platform with wallet authentication, USDC sponsorship flows, reward claims, payment verification, and auditable proof systems.",
    role: "Founder / Product Builder / Lead Developer",
    status: "Private Build",
    technologies: [
      "Next.js",
      "TypeScript",
      "Solana",
      "USDC",
      "Wallet authentication",
      "Ed25519",
      "PostgreSQL",
      "REST APIs",
    ],
    cardTechnologies: ["Next.js", "TypeScript", "Solana", "USDC", "PostgreSQL"],
    outcomes: [
      "Wallet sign-in with Ed25519 verification",
      "USDC payment checks with idempotent claim handling",
      "Append-only ledger and proof pages for reward claims",
    ],
    overview:
      "PokeSlabs is a token-connected collectible platform that combines real-world digital rewards, blockchain payments, and game mechanics. The product covers wallet authentication, USDC sponsorship flows, reward claims, payment verification, and proof pages backed by an append-only ledger.",
    problem:
      "A collectible reward tied to a blockchain payment has to answer three questions: who is claiming it, whether the payment actually happened, and how that event is recorded so it cannot be claimed twice. A wallet button on its own does not answer those questions.",
    roleDetail:
      "I designed and built the product: the Next.js application, wallet authentication, Ed25519 verification, USDC payment flows, idempotent claims, the PostgreSQL ledger, and the proof pages.",
    built: [
      "Next.js and TypeScript application",
      "Solana wallet authentication",
      "Ed25519 signature verification",
      "USDC sponsorship and payment flows",
      "Server-side payment verification",
      "Idempotent reward claim handling",
      "PostgreSQL append-only ledger",
      "Proof pages for claims",
      "Integrations with external APIs",
    ],
    architecture: [
      {
        title: "Next.js app",
        detail:
          "TypeScript product surface for collectibles, claims, and proof pages.",
      },
      {
        title: "Wallet authentication",
        detail: "Sign-in tied to a Solana wallet, checked with Ed25519 verification.",
      },
      {
        title: "USDC payment check",
        detail:
          "Sponsorship and payment flows verified on the server before a reward is recorded.",
      },
      {
        title: "Idempotent claim handler",
        detail:
          "Repeated submissions resolve to the same claim instead of creating a second reward.",
      },
      {
        title: "Append-only ledger",
        detail: "PostgreSQL records claims as an auditable history.",
      },
      {
        title: "Proof page",
        detail: "A readable record of the claim and the payment check behind it.",
      },
    ],
    challenges: [
      {
        title: "Double claims",
        problem:
          "Claim requests get retried. A second click, a refresh, or a repeated request can create a second reward if the handler is naive.",
        response:
          "I made claim handling idempotent so a repeated request resolves to the original claim instead of writing another one.",
      },
      {
        title: "Trusting a payment",
        problem:
          "The app can report that a USDC payment went through. That report is not evidence.",
        response:
          "Payment verification runs on the server before a claim is accepted and recorded.",
      },
      {
        title: "An auditable history",
        problem:
          "Rewards and payments are hard to explain later if records can be silently overwritten.",
        response:
          "Claims are written to an append-only PostgreSQL ledger and surfaced on proof pages.",
      },
    ],
    learned: [
      "Payment and claim bugs show up in retries, not on the happy path.",
      "Verification belongs on the server when money and rewards meet.",
      "An auditable record is part of the product, not an admin afterthought.",
    ],
    statusDetail:
      "Private build. The platform includes wallet authentication, USDC flows, claim handling, and proof pages. It is not presented as a public launch.",
  },
  {
    slug: "homebrain",
    name: "HomeBrain",
    summary:
      "Built an AI household platform that connects structured home data, maintenance workflows, and tool-based AI interactions through an MCP interface.",
    role: "Founder / Product Builder / Lead Developer",
    status: "Private Build",
    technologies: [
      "MCP",
      "Streamable HTTP",
      "Authentication",
      "Session management",
      "API tooling",
    ],
    cardTechnologies: ["MCP", "Streamable HTTP", "Auth", "Sessions"],
    outcomes: [
      "Authenticated browser dashboard over household data",
      "Maintenance workflows tied to structured home records",
      "MCP interface over Streamable HTTP for tool-based AI use",
    ],
    overview:
      "HomeBrain is an AI-powered household operating system. It connects structured home data, maintenance workflows, and tool-based AI interactions through an MCP interface, with authentication and session management in front of a browser dashboard.",
    problem:
      "Household information is scattered: maintenance, routines, and the state of the home rarely live in one place. An assistant is useful when it can read that structure and take bounded actions through tools, with a real session behind the request.",
    roleDetail:
      "I built the household platform: the browser dashboard, authentication and sessions, the household and maintenance workflows, the API tooling, and the MCP interface over Streamable HTTP.",
    built: [
      "Browser-based dashboard for household operations",
      "Authentication and session management",
      "Structured household data",
      "Maintenance workflows",
      "API tooling for household operations",
      "MCP interface using Streamable HTTP",
      "Tool-based AI interactions over that interface",
    ],
    architecture: [
      {
        title: "Browser dashboard",
        detail: "The household operating surface people use directly.",
      },
      {
        title: "Auth and session",
        detail:
          "Signed-in access so household data and tools are tied to a session.",
      },
      {
        title: "Household data",
        detail: "Structured records the workflows and tools can read.",
      },
      {
        title: "Maintenance workflows",
        detail: "Repeatable upkeep paths built on that household data.",
      },
      {
        title: "MCP over Streamable HTTP",
        detail:
          "A defined tool surface for AI interactions, exposed through Streamable HTTP.",
      },
    ],
    challenges: [
      {
        title: "An assistant needs structure",
        problem:
          "A chat box over an empty home does not help anyone maintain anything. The assistant needs records and workflows to act on.",
        response:
          "I modeled household data and maintenance workflows first, then exposed those operations as tools.",
      },
      {
        title: "Tools need a session",
        problem:
          "Household data is personal. An open tool endpoint is the wrong boundary.",
        response:
          "Authentication and session management sit in front of the dashboard and the API so tool use stays attached to a signed-in session.",
      },
      {
        title: "A defined interface for agents",
        problem:
          "If every interaction is free-form chat, the system has no reliable operations.",
        response:
          "I exposed household operations through MCP over Streamable HTTP so the tool surface is explicit.",
      },
    ],
    learned: [
      "A household product is a data model plus a few workflows people will actually repeat.",
      "MCP is useful when the tools map to real operations.",
      "Session boundaries matter as soon as an agent can touch home data.",
    ],
    statusDetail:
      "Private build. The platform connects a browser dashboard, signed-in access, maintenance workflows, and an MCP interface. It is not presented as a public production launch.",
  },
  {
    slug: "signal-zero",
    name: "Signal Zero",
    summary:
      "Designed an AI-driven system focused on autonomous workflows, structured decision making, and production-safe orchestration.",
    role: "Founder / Product Builder / Lead Developer",
    status: "Private Build",
    technologies: ["AI agents", "Workflow orchestration"],
    cardTechnologies: ["AI agents", "Orchestration"],
    outcomes: [
      "A defined path for autonomous workflows",
      "Structured decision stages",
      "Orchestration designed around safe operating limits",
    ],
    overview:
      "Signal Zero is an AI agent project focused on autonomous workflows, structured decision making, and production-safe orchestration. Public detail is intentionally limited to the product intent.",
    problem:
      "Autonomous systems need a decision structure and an orchestration model that can be operated with clear limits. An open-ended loop is difficult to run, explain, or trust.",
    roleDetail:
      "I designed the system and the product boundaries around autonomous workflows, staged decisions, and orchestration aimed at safe operation. Unreleased internals stay private.",
    built: [
      "A workflow structure for autonomous operation",
      "Decision making broken into explicit stages",
      "An orchestration approach aimed at production-safe limits",
    ],
    architecture: [
      {
        title: "Objective",
        detail: "A defined input the system is allowed to work on.",
      },
      {
        title: "Structured decision",
        detail: "Decisions happen in explicit stages, not a single open loop.",
      },
      {
        title: "Orchestrated workflow",
        detail: "Work moves through a bounded sequence of steps.",
      },
      {
        title: "Limited outcome",
        detail: "The result stays inside the operating limits of the system.",
      },
    ],
    challenges: [
      {
        title: "Autonomy without a decision structure",
        problem:
          "An agent that can do anything next is difficult to test, explain, or stop.",
        response:
          "I kept decisions in explicit stages so the path is inspectable.",
      },
      {
        title: "Operating limits",
        problem:
          "A system aimed at real use needs a boundary around what it is allowed to do.",
        response:
          "Orchestration is designed around bounded workflows and production-safe limits.",
      },
      {
        title: "What belongs in public",
        problem:
          "Unreleased system internals are not useful on a public portfolio, and some of them should stay private.",
        response:
          "This case study stays at the product level: workflows, decisions, and orchestration. Implementation detail is withheld.",
      },
    ],
    learned: [
      "Orchestration and decision structure matter more than a single clever prompt.",
      "Safe operating limits are part of the product design.",
      "Some systems should stay high level in public until they are ready to show.",
    ],
    statusDetail:
      "Private build. This page describes the product intent only. Internal architecture, prompts, credentials, and unreleased system details are not published here.",
  },
  {
    slug: "desert-digital-ai",
    name: "Desert Digital AI",
    summary:
      "Built a production AI services platform with customer-facing assistants, lead capture systems, workflow automation, business demos, and deployable vertical solutions.",
    role: "Founder / Product Builder / Lead Developer",
    status: "Production",
    technologies: [
      "Next.js",
      "OpenAI APIs",
      "Lead capture",
      "Workflow automation",
      "SEO",
      "Analytics",
      "Railway",
    ],
    cardTechnologies: ["Next.js", "OpenAI", "Railway", "Automation"],
    outcomes: [
      "Production Next.js platform deployed on Railway",
      "Customer-facing assistants and lead capture in one system",
      "Workflow automation and demos for restaurant and contractor operations",
    ],
    overview:
      "Desert Digital AI is a production platform for AI-powered customer acquisition and automation aimed at local businesses. It includes customer-facing assistants, lead capture, automated workflows, SEO, analytics, and deployable demos for restaurant and contractor workflows.",
    problem:
      "A local business needs a way to capture a lead, answer with an assistant that fits the business, and run a few workflows that match how the work actually happens. A generic chat widget does not cover that path.",
    roleDetail:
      "I built the production platform: the Next.js application, OpenAI-powered assistants, lead capture, workflow automation, analytics and SEO foundations, vertical demos, and Railway deployment.",
    built: [
      "Production Next.js application",
      "Assistants powered by OpenAI APIs",
      "Lead capture flows",
      "Automated follow-up workflows",
      "SEO and analytics foundations",
      "Private demos for restaurant and contractor workflows",
      "Deployable vertical solutions",
      "Railway deployment",
    ],
    architecture: [
      {
        title: "Next.js product",
        detail: "The production web application for the service.",
      },
      {
        title: "Lead capture",
        detail: "Inbound interest is collected as part of the product flow.",
      },
      {
        title: "AI assistant",
        detail: "OpenAI APIs power customer-facing assistants.",
      },
      {
        title: "Workflow automation",
        detail: "Capture, response, and follow-up run as connected workflows.",
      },
      {
        title: "SEO and analytics",
        detail: "Foundations for discovery and for seeing how the system is used.",
      },
      {
        title: "Railway",
        detail: "Production deployment with environment-based configuration.",
      },
    ],
    challenges: [
      {
        title: "One assistant does not fit every trade",
        problem:
          "A restaurant and a contractor do not ask the same questions or close work the same way.",
        response:
          "I built vertical workflows and demos for restaurant and contractor operations instead of a single undifferentiated bot.",
      },
      {
        title: "Lead capture has to meet the assistant",
        problem:
          "A form on one page and a chatbot on another leave the business with two disconnected tools.",
        response:
          "Capture, assistant response, and follow-up are treated as one workflow.",
      },
      {
        title: "It had to be deployable",
        problem:
          "A local demo does not help a business evaluate a system they would actually run.",
        response:
          "The platform is a production Next.js app on Railway, with environment configuration, SEO, and analytics foundations.",
      },
    ],
    learned: [
      "Vertical workflows are more useful than a horizontal pitch that tries to cover every business the same way.",
      "An assistant needs a job: capture a lead, answer in context, or move the next step forward.",
      "Deployment is part of the product when someone has to see the system running.",
    ],
    statusDetail:
      "Production. The platform runs as a deployed Next.js application on Railway. Private demo details and customer information are not published here.",
  },
];
