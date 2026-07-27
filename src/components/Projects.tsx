import type { IconType } from "react-icons";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiJavascript,
} from "react-icons/si";
import "./styles/Projects.css";

const TECH_ICONS: Record<string, { Icon: IconType; color: string }> = {
  React: { Icon: SiReact, color: "#61dafb" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  Tailwind: { Icon: SiTailwindcss, color: "#06b6d4" },
  Vite: { Icon: SiVite, color: "#a259ff" },
  Supabase: { Icon: SiSupabase, color: "#3ecf8e" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
};

type Project = {
  title: string;
  category: string;
  tools: string[];
  href: string;
  wip?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "Finnder",
    category: "Side Project · Restaurant Picker",
    tools: ["React", "TypeScript", "Tailwind", "Vite"],
    href: "https://neilbaksi.github.io/finnder/",
  },
  {
    title: "Vow",
    category: "Side Project · Web App",
    tools: ["React", "TypeScript", "Supabase", "Vite"],
    href: "https://vow-app-two.vercel.app/",
    wip: true,
  },
  {
    title: "Prompt Starter Pack",
    category: "Side Project · Prompt Toolkit",
    tools: ["React", "TypeScript", "Tailwind"],
    href: "https://neilbaksi.github.io/prompt-toolkit/",
  },
  {
    title: "Wordle",
    category: "Side Project · Word Game",
    tools: ["React", "TypeScript", "Vite"],
    href: "https://wordle-baksi.vercel.app/",
  },
];

const Projects = () => (
  <section className="projects projects-section" id="projects">
    <div className="projects-container section-container">
      <header className="projects__header">
        <h2 className="projects__title">
          My <span>Projects</span>
        </h2>
      </header>

      <ul className="projects__grid" role="list">
        {PROJECTS.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          const iconEntries = p.tools
            .filter((t) => TECH_ICONS[t])
            .map((t) => ({ name: t, ...TECH_ICONS[t] }));
          return (
            <li key={p.title} className="projects__item">
              <a
                className="projects__card projects__card--link"
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="projects__num" aria-hidden="true">
                  {num}
                </span>
                <div className="projects__body">
                  <h3 className="projects__name">
                    {p.title}
                    {p.wip && <span className="projects__badge">WIP</span>}
                    <HiArrowUpRight
                      className="projects__arrow"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="projects__category">{p.category}</p>
                  {iconEntries.length > 0 && (
                    <div className="projects__stack" aria-label="Tech stack">
                      {iconEntries.map(({ name, Icon, color }) => (
                        <span
                          key={name}
                          className="projects__stack-icon"
                          title={name}
                          style={
                            { "--icon-color": color } as React.CSSProperties
                          }
                        >
                          <Icon aria-hidden="true" />
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="projects__tools" role="list">
                    {p.tools.map((t) => (
                      <li key={t} className="projects__tool">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Projects;
