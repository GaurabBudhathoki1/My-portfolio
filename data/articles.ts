export type Article = {
  title: string;
  slug: string;
  category: string;
  date: string;
  description: string;
  image: {
    gradient: string;
    accent: string;
  };
  content: {
    overview: string;
    takeaway: string;
    sections: { heading: string; body: string }[];
  };
};

export const articles: Article[] = [
  {
    title: "Getting Started with AI Agents",
    slug: "getting-started-with-ai-agents",
    category: "AI",
    date: "May 2026",
    description: "A practical introduction to how AI agents think, act, and fit into real product workflows.",
    image: {
      gradient: "from-zinc-900 via-neutral-700 to-stone-500",
      accent: "bg-violet-200",
    },
    content: {
      overview:
        "AI agents can feel mysterious until you see how they depend on clear instructions, memory, and useful tool access.",
      takeaway:
        "The most effective agents are built around a narrow task, a clear loop, and a strong feedback mechanism.",
      sections: [
        {
          heading: "Why agents matter",
          body: "Agent workflows turn an LLM from a responder into a practical tool for structured tasks such as research, summarization, and action-taking.",
        },
        {
          heading: "Designing useful boundaries",
          body: "It is easy to over-automate an assistant. A better approach is to constrain the responsibilities and keep the interaction simple and understandable.",
        },
      ],
    },
  },
  {
    title: "What I Learned Building an AI Application",
    slug: "what-i-learned-building-an-ai-application",
    category: "Product",
    date: "April 2026",
    description: "Reflections on product design, evaluation, and the realities of shipping AI-powered experiences.",
    image: {
      gradient: "from-stone-900 via-zinc-700 to-neutral-500",
      accent: "bg-amber-200",
    },
    content: {
      overview:
        "The hardest part of building AI experiences is not just the model; it is the experience design around it.",
      takeaway:
        "AI products need better feedback loops, fallback paths, and user trust signals to feel dependable.",
      sections: [
        {
          heading: "Design with expectation",
          body: "Users need clarity about what the system can do and what it cannot. Good UX is essential when AI is creative or probabilistic.",
        },
        {
          heading: "Testing is product work",
          body: "Prompt iteration, usability testing, and edge-case review are all part of building a trusted AI feature.",
        },
      ],
    },
  },
  {
    title: "Understanding APIs as a Beginner Developer",
    slug: "understanding-apis-as-a-beginner-developer",
    category: "Development",
    date: "March 2026",
    description: "How I approached learning APIs and why they matter for modern software development.",
    image: {
      gradient: "from-slate-900 via-sky-700 to-cyan-400",
      accent: "bg-sky-200",
    },
    content: {
      overview:
        "APIs are the bridges between systems. Once you understand their rhythm, many points of modern software make more sense.",
      takeaway:
        "Learning APIs is less about memorizing endpoints and more about understanding requests, responses, and user value.",
      sections: [
        {
          heading: "Requests and responses",
          body: "The first step is understanding that an API is a contract between a client and a server. Requests ask for data, and responses return the outcome.",
        },
        {
          heading: "Begin with a real problem",
          body: "When you tie APIs to a concrete problem, the learning becomes much more practical and memorable.",
        },
      ],
    },
  },
];
