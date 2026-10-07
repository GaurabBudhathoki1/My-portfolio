import Link from "next/link";
import { notFound } from "next/navigation";

import { articles } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="portfolio-paper min-h-screen px-5 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-4xl">
      <Link href="/" className="nav-link mb-8 inline-flex text-sm font-medium uppercase tracking-[0.18em]">
        ← Back home
      </Link>

      <article className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(17,17,17,0.04)]">
        <div className={`relative h-72 bg-gradient-to-br ${article.image.gradient} md:h-96`}>
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_40%)]" />
        </div>

        <div className="space-y-8 p-6 md:p-10">
          <div className="border-b border-black/10 pb-7">
            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-zinc-500">{article.category} · {article.date}</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.08em] text-zinc-950 md:text-5xl">{article.title}</h1>
          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-600">
            <p>{article.content.overview}</p>
            <p className="font-medium text-zinc-900">{article.content.takeaway}</p>

            {article.content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-3 text-xl font-medium tracking-[-0.04em] text-zinc-900">{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
      </div>
    </main>
  );
}
