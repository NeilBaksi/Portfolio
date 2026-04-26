import type { IconType } from "react-icons";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiCypress,
  SiShopify,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiJavascript,
  SiGraphql,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import "./styles/Work.css";

const TECH_ICONS: Record<string, { Icon: IconType; color: string }> = {
  React: { Icon: SiReact, color: "#61dafb" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  Redux: { Icon: SiRedux, color: "#764abc" },
  Cypress: { Icon: SiCypress, color: "#69d3a7" },
  Shopify: { Icon: SiShopify, color: "#96bf48" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Next.js": { Icon: SiNextdotjs, color: "#e6edf3" },
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  MySQL: { Icon: SiMysql, color: "#4479a1" },
  Express: { Icon: SiExpress, color: "#e6edf3" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  GraphQL: { Icon: SiGraphql, color: "#e535ab" },
  Tailwind: { Icon: SiTailwindcss, color: "#06b6d4" },
  Firebase: { Icon: SiFirebase, color: "#ffca28" },
};

type Project = {
  title: string;
  category: string;
  tools: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Optus Digital Platform",
    category: "Telecom · Customer-Facing Web",
    tools: ["React", "TypeScript", "Redux", "Cypress", "Node.js", "GraphQL"],
    href: "https://www.optus.com.au",
  },
  {
    title: "MarketNow",
    category: "Fintech · Real Estate Payments",
    tools: ["React", "TypeScript", "Redux", "Next.js", "Firebase"],
  },
  {
    title: "STACK Payments",
    category: "Fintech · Embeddable Payments",
    tools: ["React", "TypeScript", "Redux", "Node.js", "MySQL"],
  },
  {
    title: "Shimmer Bazaar",
    category: "E-Commerce · Marketplace",
    tools: ["Shopify", "JavaScript", "Tailwind", "Node.js", "MongoDB"],
  },
];

const Work = () => (
  <section className="work work-section" id="work">
    <div className="work-container section-container">
      <header className="work__header">
        <h2 className="work__title">
          My <span>Work</span>
        </h2>
      </header>

      <ul className="work__grid" role="list">
        {PROJECTS.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          const Tag = (p.href ? "a" : "div") as "a" | "div";
          const linkProps = p.href
            ? { href: p.href, target: "_blank", rel: "noreferrer noopener" }
            : {};
          const iconEntries = p.tools
            .filter((t) => TECH_ICONS[t])
            .map((t) => ({ name: t, ...TECH_ICONS[t] }));
          return (
            <li key={p.title} className="work__item">
              <Tag
                className={`work__card${p.href ? " work__card--link" : ""}`}
                {...linkProps}
              >
                <span className="work__num" aria-hidden="true">
                  {num}
                </span>
                <div className="work__body">
                  <h3 className="work__name">
                    {p.title}
                    {p.href && (
                      <HiArrowUpRight
                        className="work__arrow"
                        aria-hidden="true"
                      />
                    )}
                  </h3>
                  <p className="work__category">{p.category}</p>
                  {iconEntries.length > 0 && (
                    <div className="work__stack" aria-label="Tech stack">
                      {iconEntries.map(({ name, Icon, color }) => (
                        <span
                          key={name}
                          className="work__stack-icon"
                          title={name}
                          style={{ "--icon-color": color } as React.CSSProperties}
                        >
                          <Icon aria-hidden="true" />
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="work__tools" role="list">
                    {p.tools.map((t) => (
                      <li key={t} className="work__tool">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tag>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Work;
