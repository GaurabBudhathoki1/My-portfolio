import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="portfolio-paper min-h-screen px-5 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-6xl">
      <Link href="/" className="nav-link mb-8 inline-flex text-sm font-medium uppercase tracking-[0.18em]">
        ← Back home
      </Link>

      <article className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,17,17,0.04)]">
        <div className={`relative flex h-[280px] items-end overflow-hidden border-b border-black/10 bg-gradient-to-br ${project.image.gradient} p-8 md:h-[440px] md:p-12`}>
          <span className={`absolute right-[15%] top-[15%] h-40 w-40 rounded-full ${project.image.accent} opacity-60 blur-3xl`} />
          <span className="relative text-sm font-medium uppercase tracking-[0.22em] text-white/80">{project.image.name}</span>
        </div>

        <div className="space-y-10 p-6 md:p-10">
          <div className="flex flex-col gap-4 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500">{project.category} · {project.year}</div>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.08em] text-zinc-950 md:text-6xl">{project.title}</h1>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-zinc-700">
              <a href={project.github} target="_blank" rel="noreferrer" className="site-button site-button-secondary">
                GitHub
              </a>
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="site-button site-button-secondary">
                Live Demo
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <section>
                <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-zinc-500">Overview</h2>
                <p className="text-lg leading-8 text-zinc-600">{project.summary}</p>
              </section>

              <section>
                <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-zinc-500">Problem</h2>
                <p className="text-lg leading-8 text-zinc-600">{project.problem}</p>
              </section>

              <section>
                <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-zinc-500">Solution</h2>
                <p className="text-lg leading-8 text-zinc-600">{project.solution}</p>
              </section>
            </div>

            <aside className="rounded-[26px] border border-black/10 bg-zinc-50 p-6">
              <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-zinc-500">Stack</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-zinc-600">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-[24px] border border-black/10 bg-zinc-50 p-6">
              <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-zinc-500">Features</h2>
              <ul className="space-y-3 text-base leading-7 text-zinc-600">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-zinc-50 p-6">
              <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-zinc-500">Development Process</h2>
              <ul className="space-y-3 text-base leading-7 text-zinc-600">
                {project.process.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-[24px] border border-black/10 bg-zinc-50 p-6">
              <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-zinc-500">Challenges</h2>
              <ul className="space-y-3 text-base leading-7 text-zinc-600">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] border border-black/10 bg-zinc-50 p-6">
              <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-zinc-500">Results</h2>
              <ul className="space-y-3 text-base leading-7 text-zinc-600">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-[24px] border border-black/10 bg-zinc-50 p-6">
            <h2 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-zinc-500">Gallery</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {project.gallery.map((item) => (
                <div key={item} className="rounded-[18px] border border-black/10 bg-white p-5 text-sm font-medium text-zinc-700">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-4 border-t border-black/10 pt-8 md:flex-row md:items-center md:justify-between">
            {previousProject ? (
              <Link href={`/projects/${previousProject.slug}`} className="text-left text-sm font-medium text-zinc-700 hover:text-zinc-900">
                ← Previous: {previousProject.title}
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="text-left text-sm font-medium text-zinc-700 hover:text-zinc-900 md:text-right">
                Next: {nextProject.title} →
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>
      </div>
    </main>
  );
}
