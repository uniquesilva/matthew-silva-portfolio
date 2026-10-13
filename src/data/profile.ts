export const credibility = [
  "AI Products",
  "APIs",
  "Automation",
  "Web",
  "iOS",
  "Blockchain",
] as const;

export const buildSteps = [
  {
    title: "Problem",
    text: "Start from the job to be done and the constraint that makes the current workaround fail.",
  },
  {
    title: "Product Design",
    text: "Define the flow, the account model, and what a finished version has to do.",
  },
  {
    title: "AI / API Integration",
    text: "Connect the model, payment rail, or tool only where it changes the product.",
  },
  {
    title: "Build",
    text: "Ship the interface, the API, and the data model as one system.",
  },
  {
    title: "Test",
    text: "Prove authentication, core flows, and failure cases before calling it real.",
  },
  {
    title: "Deploy",
    text: "Put the product on infrastructure someone else can actually open.",
  },
  {
    title: "Iterate",
    text: "Tighten the product from use: what people get stuck on, and what the system must remember.",
  },
] as const;

export const skillGroups = [
  {
    title: "AI & Product",
    items: [
      "OpenAI APIs",
      "AI product design",
      "Agent workflows",
      "Prompt systems",
      "Automation",
      "Product strategy",
    ],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Swift", "iOS"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "Authentication",
      "Session management",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Railway",
      "GitHub",
      "Deployment",
      "Environment configuration",
      "Production QA",
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Solana",
      "Wallet authentication",
      "Ed25519 signatures",
      "USDC",
      "Transaction verification",
    ],
  },
  {
    title: "Tools",
    items: ["Cursor", "Xcode", "GitHub"],
  },
] as const;

export const aboutParagraphs = [
  "I am a product-focused builder who works at the intersection of AI, software, and real-world business problems. I specialize in taking ideas from concept through a working product, including product design, frontend development, backend systems, APIs, authentication, automation, testing, and deployment.",
  "That work covers iOS applications, web platforms, automation systems, and blockchain-connected products. I stay close to both the product decisions and the implementation.",
  "My background gives me a strong bias toward usability, customer experience, and shipping practical systems rather than building technology for its own sake.",
] as const;

export const focusAreas = [
  "AI products and automation",
  "Web platforms and iOS apps",
  "APIs, auth, and cloud data",
  "Blockchain-connected payments",
] as const;
