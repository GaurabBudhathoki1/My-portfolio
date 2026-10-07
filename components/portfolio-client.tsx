"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SignatureAcrobat } from "@/components/signature-acrobat";
import { SignatureWordmark } from "@/components/signature-wordmark";
import { AboutPortrait } from "@/components/about-portrait";
import { InterestsSection } from "@/components/interests-section";
import { articles as portfolioArticles } from "@/data/articles";
import { projects } from "@/data/projects";
import { siteConfig, socialLinks } from "@/data/site";

const greetings = ["hi there", "AI engineer", "full stack dev"];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label">{children}</div>;
}

function scrollToSection(targetId: string) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

function NavOption({ targetId, children, onClick, href }: { targetId: string; children: React.ReactNode; onClick?: () => void; href?: string }) {
  const [highlighted, setHighlighted] = useState(false);
  const className = "nav-link nav-link-option";
  const contents = (
    <>
      {highlighted ? (
        <motion.span
          layoutId="nav-hover-glass"
          className="nav-hover-glass"
          transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.85 }}
          aria-hidden="true"
        />
      ) : null}
      <span className="nav-option-label">{children}</span>
    </>
  );
  const hoverHandlers = {
    onMouseEnter: () => setHighlighted(true),
    onMouseLeave: () => setHighlighted(false),
    onFocus: () => setHighlighted(true),
    onBlur: () => setHighlighted(false),
  };

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        onClick={() => {
          onClick?.();
          if (window.location.pathname === href) {
            window.requestAnimationFrame(() => scrollToSection(targetId));
          }
        }}
        {...hoverHandlers}
      >
        {contents}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      {...hoverHandlers}
      onClick={() => {
        onClick?.();
        window.requestAnimationFrame(() => scrollToSection(targetId));
      }}
    >
      {contents}
    </button>
  );
}

function DesktopNav() {
  return (
    <nav
      className="desktop-nav hidden items-center gap-1 text-[0.82rem] font-medium uppercase tracking-[0.12em] lg:flex"
    >
      <NavOption targetId="about" href="/about">About</NavOption>
      <NavOption targetId="works" href="/projects">Projects</NavOption>
      <NavOption targetId="articles" href="/articles">Articles</NavOption>
      <NavOption targetId="interests" href="/interests">Interests</NavOption>
      <NavOption targetId="contact" href="/contact">Contact</NavOption>
    </nav>
  );
}

export function PortfolioClient({ initialSection }: { initialSection?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState("hi there");
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (!initialSection) return;
    window.requestAnimationFrame(() => scrollToSection(initialSection));
  }, [initialSection]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phraseIndex = 0;
    let characterIndex = greetings[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const typeNextCharacter = () => {
      const phrase = greetings[phraseIndex];
      characterIndex += deleting ? -1 : 1;
      setGreeting(phrase.slice(0, characterIndex));

      if (!deleting && characterIndex === phrase.length) {
        deleting = true;
        timer = setTimeout(typeNextCharacter, 1500);
        return;
      }

      if (deleting && characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % greetings.length;
      }

      timer = setTimeout(typeNextCharacter, deleting ? 55 : 105);
    };

    timer = setTimeout(typeNextCharacter, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="top" className="portfolio-paper min-h-screen text-[#121212]">
      <header className="glass-nav-wrap sticky top-0 z-50 px-2 pt-2 md:px-4 md:pt-3">
        <div className="glass-nav mx-auto flex min-h-[66px] w-full items-center justify-between gap-3 px-4 py-4 sm:px-5 md:min-h-[78px] md:px-8">
          <Link href="/" className="nav-link whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.82rem] md:text-[0.96rem] md:tracking-[0.18em]">
            GAURAB BUDHATHOKI
          </Link>

          <DesktopNav />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="nav-menu-button inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-navigation" className="glass-menu mx-auto mt-2 max-w-[1500px] px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-3 text-[0.82rem] font-medium uppercase tracking-[0.12em]">
              <NavOption targetId="about" href="/about" onClick={() => setMenuOpen(false)}>About</NavOption>
              <NavOption targetId="works" href="/projects" onClick={() => setMenuOpen(false)}>Projects</NavOption>
              <NavOption targetId="articles" href="/articles" onClick={() => setMenuOpen(false)}>Articles</NavOption>
              <NavOption targetId="interests" href="/interests" onClick={() => setMenuOpen(false)}>Interests</NavOption>
              <NavOption targetId="contact" href="/contact" onClick={() => setMenuOpen(false)}>Contact</NavOption>
            </nav>
          </div>
        ) : null}
      </header>

      <main className="mx-auto max-w-[1500px] px-5 md:px-10">
        <section className="screen-section home-hero border-b border-[#121212]/20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="typewriter-line mb-5 text-[1.25rem] font-bold tracking-[0.04em] md:text-[1.7rem]" aria-label={greeting || "hi there"}>
              <span>{greeting}</span>
              <span className="typewriter-cursor ml-1" aria-hidden="true">_</span>
            </div>

            <h1 className="home-hero-title w-full font-black leading-[0.82] tracking-[-0.085em] text-[#121212]">
              <span className="block">I BUILD</span>
              <span className="block">SOFTWARE THAT</span>
              <span className="block">SOLVES</span>
              <span className="block">REAL PROBLEMS.</span>
            </h1>
          </motion.div>

          <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="home-hero-copy max-w-[760px] leading-[1.5] tracking-[-0.04em] text-[#121212]/75"
            >
              AI Engineer and Full-Stack Developer focused on building intelligent applications, modern web experiences, and practical digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="home-hero-actions flex flex-wrap items-center gap-3"
            >
              <Link href="/projects" className="site-button site-button-primary">View Projects →</Link>
              <Link href="/contact" className="site-button site-button-secondary">Contact Me →</Link>
            </motion.div>
          </div>

          <div className="mt-8 border-t border-[#121212]/20 pt-4 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#121212]/70">
            BASED IN NEPAL · OPEN TO OPPORTUNITIES
          </div>
        </section>

        <section id="about" className="screen-section border-b border-[#121212]/20">
          <div className="about-paper">
            <h2 className="about-greeting">
              hi there
              <span className="about-greeting-dots" aria-label="…">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </h2>
            <div className="about-paper-content">
              <AboutPortrait />
              <div className="about-copy">
                <div className="about-label">ABOUT / 01</div>
                <div className="space-y-5 text-[1.05rem] leading-[1.8] tracking-[-0.04em] text-[#121212]/80 md:text-[1.2rem]">
                  <p>I&apos;m Gaurab Budhathoki, a developer passionate about software engineering, artificial intelligence, and building products from idea to implementation.</p>
                  <p>I&apos;m currently developing my skills across full-stack development, AI engineering, cloud technologies, APIs, and modern development tools.</p>
                  <p>I like learning by building real projects and experimenting with new technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" aria-label="Skills and technologies" className="screen-section screen-section-skills border-b border-[#121212]/20">
          <div className="overflow-hidden">
            <div className="marquee-track flex w-max min-w-full animate-[scroll_28s_linear_infinite] items-center gap-10 whitespace-nowrap py-2 text-[2.6rem] font-medium tracking-[-0.08em] md:text-[4.5rem]">
              <span>React</span><span>Next.js</span><span>OpenAI</span><span>Python</span><span>GitHub</span><span>AWS</span><span>Node.js</span><span>Docker</span>
              <span aria-hidden="true">React</span><span aria-hidden="true">Next.js</span><span aria-hidden="true">OpenAI</span><span aria-hidden="true">Python</span><span aria-hidden="true">GitHub</span><span aria-hidden="true">AWS</span><span aria-hidden="true">Node.js</span><span aria-hidden="true">Docker</span>
            </div>
          </div>
        </section>

        <section id="works" className="screen-section border-b border-[#121212]/20">
          <div className="mb-5 flex items-center justify-between gap-4">
            <SectionLabel>PROJECTS</SectionLabel>
            {projects.length > 3 ? (
              <button
                type="button"
                onClick={() => setShowAllProjects((visible) => !visible)}
                aria-expanded={showAllProjects}
                className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#345aaa] transition hover:text-[#121212] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#345aaa]"
              >
                [{showAllProjects ? "SHOW LESS" : "VIEW ALL"}]
              </button>
            ) : null}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, showAllProjects ? projects.length : 3).map((project, index) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project-paper-card group block border border-[#121212]/15 bg-white/55 p-4 transition duration-200 hover:-translate-y-1 hover:border-[#345aaa]/40">
                <div className="project-thumbnail relative mb-4 h-64 overflow-hidden rounded-[12px] border border-[#121212]/10">
                  <div className={`project-preview-art absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.image.gradient}`}>
                    <div className={`absolute -right-7 -top-10 h-36 w-36 rounded-full ${project.image.accent} opacity-40 blur-2xl transition duration-300 group-hover:scale-125`} />
                    <div className="relative flex h-full w-full flex-col justify-between p-5 text-white">
                      <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/75">{project.category} · {project.year}</span>
                      <div className="flex items-end justify-between">
                        <span className="text-3xl font-bold tracking-[-0.06em]">{project.title}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-lg transition group-hover:bg-white group-hover:text-[#121212]">↗</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-sketch-cover absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                    <span className="project-paperclip" aria-hidden="true" />
                    <span className="project-sketch-title">{project.title}</span>
                    <span className="project-sketch-category">{project.category} / {project.year}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[1.3rem] font-medium tracking-[-0.04em] text-[#121212]">{project.title}</div>
                  <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[#345aaa]">0{index + 1}</span>
                </div>
                <p className="mt-3 text-[0.96rem] leading-[1.7] text-[#121212]/70">{project.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="articles" className="screen-section border-b border-[#121212]/20">
          <div className="mb-5 flex items-center justify-between gap-4">
            <SectionLabel>ARTICLES</SectionLabel>
          </div>

          <div className="space-y-3">
            {portfolioArticles.map((article) => (
              <div key={article.title} className="group flex items-center gap-4 border-t border-[#121212]/15 py-4 transition hover:text-[#345aaa]">
                <div className="w-[130px] shrink-0 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[#121212]/60">{article.date}</div>
                <Link href={`/articles/${article.slug}`} className="flex-1 text-[1.3rem] font-medium tracking-[-0.05em] text-[#121212] transition group-hover:text-[#345aaa] md:text-[1.8rem]">
                  {article.title}
                </Link>
                <Link href={`/articles/${article.slug}`} aria-label={`Read ${article.title}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#121212]/15 bg-white text-lg text-[#121212] transition hover:border-[#345aaa]/50 hover:text-[#345aaa]">
                  ↗
                </Link>
              </div>
            ))}
          </div>
        </section>

        <InterestsSection />

        <section id="contact" className="screen-section screen-section-contact">
          <div className="footer-columns">
            <div>
              <div className="footer-heading">Contact</div>
              <a className="footer-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div>
              <div className="footer-heading">Portfolio</div>
              <ul className="footer-list">
                {projects.slice(0, 3).map((project) => (
                  <li key={project.slug}>
                    <Link className="footer-link" href={`/projects/${project.slug}`}>{project.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-heading">Social</div>
              <ul className="footer-list">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a className="footer-link" href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-heading">Articles</div>
              <ul className="footer-list">
                {portfolioArticles.slice(0, 4).map((article) => (
                  <li key={article.slug}>
                    <Link className="footer-link" href={`/articles/${article.slug}`}>{article.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="signature-lockup" aria-label="Gaurab signature">
            <SignatureWordmark />
            <SignatureAcrobat />
          </div>
          <div className="footer-meta">
            <span>© 2026 Gaurab Budhathoki</span>
            <Link href="/">Back to top ↑</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
