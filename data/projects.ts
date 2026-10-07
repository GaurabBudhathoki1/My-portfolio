export type ProjectCategory = "AI" | "Web" | "Full Stack" | "IoT" | "Experiments";

export type Project = {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  year: string;
  github: string;
  liveDemo: string;
  featured: boolean;
  caseStudy: string;
  image: {
    name: string;
    gradient: string;
    accent: string;
  };
  gallery: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  process: string[];
  challenges: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    title: "BusGuide",
    slug: "busguide",
    description:
      "Accessible web-based bus location and navigation assistant designed with accessibility and voice interaction in mind.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript", "Leaflet.js", "OpenStreetMap", "Web Speech API"],
    year: "2026",
    github: "https://github.com/gaurabexp/busguide",
    liveDemo: "https://example.com/busguide",
    featured: true,
    caseStudy: "Accessible transport information for more confident travel decisions.",
    image: {
      name: "BusGuide",
      gradient: "from-slate-900 via-zinc-700 to-stone-500",
      accent: "bg-emerald-300",
    },
    gallery: ["Route planning", "Voice interaction", "Map-first interface"],
    summary:
      "BusGuide is an inclusive transit companion that helps commuters find routes, identify stops, and get voice-based updates without friction.",
    problem:
      "City travelers often rely on fragmented information sources and poorly accessible transit interfaces, making route discovery difficult for people who need quick and clear assistance.",
    solution:
      "I built a lightweight web app that combines map-based route visibility with speech interaction so users can check nearby stops and navigate with less effort.",
    features: [
      "Interactive route map",
      "Voice-based search and announcements",
      "Accessible interface patterns",
      "Live stop and direction awareness",
    ],
    process: [
      "Mapped the core user flow for route discovery.",
      "Prototyped a map and stop-search experience around accessibility needs.",
      "Integrated voice interaction using the browser speech APIs.",
    ],
    challenges: [
      "Balancing map readability with a simple information hierarchy.",
      "Keeping the experience accessible on mobile and desktop without heavy dependencies.",
    ],
    results: [
      "Improved clarity of transit navigation for first-time users.",
      "Created a responsive interface ready for more data integrations.",
    ],
  },
  {
    title: "AI Personal Assistant",
    slug: "ai-personal-assistant",
    description:
      "An AI-powered assistant capable of answering questions and handling useful user interactions through an LLM API.",
    category: "AI",
    technologies: ["Python", "OpenAI API", "APIs"],
    year: "2026",
    github: "https://github.com/gaurabexp/ai-assistant",
    liveDemo: "https://example.com/ai-assistant",
    featured: true,
    caseStudy: "A practical conversational assistant built around real user tasks.",
    image: {
      name: "AI Assistant",
      gradient: "from-neutral-900 via-stone-700 to-zinc-500",
      accent: "bg-amber-200",
    },
    gallery: ["Chat-first product flow", "Prompt patterns", "Actionable responses"],
    summary:
      "This assistant explores how an LLM can act as a smart digital helper for quick questions, planning, and useful interactions.",
    problem:
      "Generic chatbots often feel disconnected from the user’s real or immediate needs. I wanted a more intentional assistant experience with practical outputs.",
    solution:
      "I built a workflow around clear prompts, structured responses, and simple integrations so the assistant remains useful rather than noisy.",
    features: [
      "Prompt-driven workflows",
      "Context-aware response generation",
      "Conversation memory patterns",
      "Simple user interaction loop",
    ],
    process: [
      "Defined the assistant goals and interaction boundaries.",
      "Architected the request flow and response handling.",
      "Refined prompts through iterative testing.",
    ],
    challenges: [
      "Designing interactions that feel helpful rather than generic.",
      "Keeping outputs concise and actionable without losing context.",
    ],
    results: [
      "Created a polished prototype for real-world support-like interactions.",
      "Built a strong foundation for future agent-based workflows.",
    ],
  },
  {
    title: "E-Learning Platform",
    slug: "e-learning-platform",
    description:
      "Modern learning platform for discovering courses, resources, and educational content.",
    category: "Full Stack",
    technologies: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    github: "https://github.com/gaurabexp/elearning-platform",
    liveDemo: "https://example.com/elearning-platform",
    featured: true,
    caseStudy: "An editorial course discovery experience built for clarity and momentum.",
    image: {
      name: "E-Learning",
      gradient: "from-zinc-900 via-slate-700 to-neutral-500",
      accent: "bg-violet-300",
    },
    gallery: ["Course discovery", "Resource pages", "Responsive learning layout"],
    summary:
      "The platform brings together course discovery, learning resources, and an inviting presentation that feels more premium than a basic course catalog.",
    problem:
      "Learners often struggle to discover relevant and useful content when course portals feel cluttered or too static.",
    solution:
      "I created a clean browsing experience with strong hierarchy, scannable content blocks, and clear learning pathways.",
    features: [
      "Course showcase pages",
      "Resource organization",
      "Responsive editorial layouts",
      "Clear content discovery patterns",
    ],
    process: [
      "Outlined the information architecture and learner journey.",
      "Designed modular learning sections and navigation.",
      "Built the prototype and refined spacing and hierarchy.",
    ],
    challenges: [
      "Turning content-heavy pages into something scannable and useful.",
      "Maintaining consistency across catalog, detail, and resource layouts.",
    ],
    results: [
      "Created a learning experience with stronger editorial polish.",
      "Improved the feel of discovery and course browsing.",
    ],
  },
  {
    title: "Greenhouse Monitoring System",
    slug: "greenhouse-monitoring-system",
    description:
      "IoT-based monitoring system for temperature, humidity, soil conditions, and automated control.",
    category: "IoT",
    technologies: ["NodeMCU", "Blynk", "DHT11", "Sensors"],
    year: "2025",
    github: "https://github.com/gaurabexp/greenhouse-monitoring",
    liveDemo: "https://example.com/greenhouse-monitoring",
    featured: false,
    caseStudy: "A sensor-driven system to help monitor crops in real time.",
    image: {
      name: "Greenhouse",
      gradient: "from-emerald-950 via-emerald-700 to-lime-400",
      accent: "bg-lime-200",
    },
    gallery: ["Sensor inputs", "Monitoring dashboard", "Automated controls"],
    summary:
      "This system tracks environmental conditions and gives actionable insight into plant health and environmental control.",
    problem:
      "Small-scale growers often lack simple ways to monitor environmental changes and react quickly to shifts.",
    solution:
      "I connected sensor modules to a lightweight dashboard so changes in air, moisture, and soil conditions become easier to understand.",
    features: [
      "Real-time environmental readings",
      "Threshold-based automation",
      "Mobile-friendly monitoring dashboard",
      "Hardware-to-software feedback loop",
    ],
    process: [
      "Selected the sensor stack and connectivity approach.",
      "Built the data pipeline and control logic.",
      "Validated readings and refined thresholds.",
    ],
    challenges: [
      "Maintaining accurate data without noisy readings from poor sensor placement.",
      "Balancing automation reliability with simple setup.",
    ],
    results: [
      "Developed an end-to-end prototype for environmental monitoring.",
      "Created a useful starting point for smarter agricultural automation.",
    ],
  },
];

export const projectFilters = ["All", "AI", "Web", "Full Stack", "IoT", "Experiments"] as const;
