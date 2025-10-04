'use client';

import { useEffect, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles/home.css";

const navLinks = [
  { label: "Bundles", href: "#bundles" },
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { label: "Launches completed", value: "58" },
  { label: "Brands on retainer", value: "23" },
  { label: "Average timeline", value: "6 weeks" },
];

const bundleProducts = [
  {
    name: "Project Bundle 01",
    tagline: "Identity + commerce launch system",
    price: "From $6,200",
    badge: "Most booked",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
    deliverables: ["Naming & messaging", "Brand system & motion kit", "Shopify build & automation"],
  },
  {
    name: "Project Bundle 02",
    tagline: "Packaging + product storytelling",
    price: "From $4,900",
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
    deliverables: ["Packaging architecture", "Editorial art direction", "Retention email flows"],
  },
  {
    name: "Project Bundle 03",
    tagline: "Retail & experiential rollout",
    price: "From $8,700",
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1400&q=80",
    deliverables: ["Spatial identity", "Interactive signage", "Launch campaign kit"],
  },
];

const caseStudies = [
  {
    title: "Maison Lune",
    description:
      "We architected an omnichannel experience for the cult-favourite beauty brand, balancing editorial storytelling with fast drop commerce.",
    image:
      "https://images.unsplash.com/photo-1611043714347-1d7f4f1bc821?auto=format&fit=crop&w=1400&q=80",
    year: "2024",
  },
  {
    title: "Drift Supply",
    description:
      "Global storefront relaunch with custom configurators, subscription loops, and a content engine tuned for international scale.",
    image:
      "https://images.unsplash.com/photo-1511165402301-94151be3f2a0?auto=format&fit=crop&w=1400&q=80",
    year: "2023",
  },
];

const mobileScreens = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    alt: "Mobile storefront product grid",
  },
  {
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
    alt: "Checkout experience on mobile",
  },
  {
    src: "https://images.unsplash.com/photo-1607081692384-0e7c4c38d87b?auto=format&fit=crop&w=900&q=80",
    alt: "Brand story layout on phone",
  },
];

const services = [
  {
    title: "Identity systems",
    description: "Naming, voice, design language, and motion built for adaptive commerce ecosystems.",
  },
  {
    title: "Digital flagships",
    description: "Custom Shopify, headless storefronts, and conversion journeys engineered to scale.",
  },
  {
    title: "Growth content",
    description: "Launch playbooks, editorial storytelling, and lifecycle sequences that keep brands front of mind.",
  },
];

const teamMembers = [
  {
    name: "Alana Greer",
    role: "Creative Director",
    location: "Barcelona",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Kenji Morris",
    role: "Experience Designer",
    location: "Melbourne",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rafa Ríos",
    role: "Technology Lead",
    location: "Mexico City",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sonia Patel",
    role: "Brand Strategist",
    location: "New York",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
];

const contactHighlights = [
  "72 hour proposal turnaround",
  "Dedicated launch squad",
  "Global drop logistics",
];

function useAmbientExperience() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const page = document.querySelector(".page");
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const animatedSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    const handlePointer = (event: MouseEvent) => {
      if (!cursor) return;
      cursor.style.setProperty("--x", `${event.clientX}px`);
      cursor.style.setProperty("--y", `${event.clientY}px`);

      if (!prefersReducedMotion) {
        const xFactor = (event.clientX / window.innerWidth - 0.5) * 16;
        const yFactor = (event.clientY / window.innerHeight - 0.5) * 16;
        parallaxTargets.forEach((target) => {
          const depth = Number(target.dataset.parallax ?? 1);
          target.style.transform = `translate3d(${xFactor / depth}px, ${yFactor / depth}px, 0)`;
        });
      }
    };

    const handleScroll = () => {
      const scrollProgress = Math.min(
        1,
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        scrollProgress.toString()
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    animatedSections.forEach((section) => observer.observe(section));
    handleScroll();

    window.addEventListener("mousemove", handlePointer);
    window.addEventListener("scroll", handleScroll, { passive: true });

    let rafId: number | null = null;
    if (!prefersReducedMotion && page) {
      const gradient = document.querySelector<HTMLElement>(".ambient-gradient");
      const animate = () => {
        const time = performance.now() * 0.0001;
        if (gradient) {
          gradient.style.setProperty("--gradient-x", `${48 + Math.sin(time) * 28}%`);
          gradient.style.setProperty("--gradient-y", `${42 + Math.cos(time) * 32}%`);
        }
        rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("mousemove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
      animatedSections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      parallaxTargets.forEach((target) => {
        target.style.transform = "";
      });
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

export default function Home() {
  useAmbientExperience();

  return (
    <div className="page">
      <div className="cursor" aria-hidden="true" />
      <div className="ambient-gradient" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
      <header className="site-header" data-animate>
        <Link className="site-header__brand" href="#home" data-parallax="4">
          Fonder
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="site-header__cta" href="#contact">
          Let's work
        </Link>
      </header>

      <main className="site-main">
        <section className="hero" id="home">
          <div className="hero__inner" data-animate>
            <p className="hero__label">Fonder brand studio</p>
            <h1>
              We are a band of design and brand builders who find the icons of tomorrow and build
              beloved brands.
            </h1>
            <p className="hero__description">
              From seed-stage launches to global relaunches, we orchestrate identity, commerce, and
              content so founders can focus on momentum.
            </p>
            <div className="hero__cta">
              <Link className="button button--primary" href="#bundles">
                View project bundles
              </Link>
              <Link className="button button--ghost" href="#contact">
                Book intro call
              </Link>
            </div>
            <dl className="hero__stats">
              {heroStats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__media" data-parallax="6">
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80"
              alt="Designers collaborating at a brand workshop"
              fill
              sizes="(min-width: 1024px) 460px, 70vw"
            />
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__inner">
            {["Identity systems", "Commerce buildouts", "Packaging", "Lifecycle content", "Spatial design"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
          <div className="marquee__inner" aria-hidden="true">
            {["Identity systems", "Commerce buildouts", "Packaging", "Lifecycle content", "Spatial design"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
        </div>

        <section className="bundles" id="bundles">
          <div className="section-header" data-animate>
            <p className="eyebrow">Project bundles</p>
            <div>
              <h2>Everything you need to launch without the burn.</h2>
              <p>
                Fixed-scope squads built to ship strategy, design, and technology in parallel. Pick the
                bundle that aligns with your next milestone.
              </p>
            </div>
          </div>
          <div className="bundles__grid">
            {bundleProducts.map((bundle, index) => (
              <article
                key={bundle.name}
                className="bundle-card"
                data-animate
                style={{ "--stagger": index } as CSSProperties}
              >
                <div className="bundle-card__media" data-parallax="8">
                  <Image src={bundle.image} alt={bundle.name} fill sizes="(min-width: 1024px) 320px, 80vw" />
                  <span className="bundle-card__badge">{bundle.badge}</span>
                </div>
                <div className="bundle-card__content">
                  <h3>{bundle.name}</h3>
                  <p className="bundle-card__tagline">{bundle.tagline}</p>
                  <ul>
                    {bundle.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="bundle-card__footer">
                    <span>{bundle.price}</span>
                    <button type="button" className="button button--secondary">
                      Reserve build week
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="studio" id="studio">
          <div className="studio__intro" data-animate>
            <p className="eyebrow">Studio ethos</p>
            <h2>We choreograph design, content, and product to give founders unfair momentum.</h2>
            <p>
              Every engagement is guided by a core team embedded with your operators. We ideate in FigJam,
              prototype in WebGL, and deploy in Shopify Plus and headless stacks without breaking stride.
            </p>
          </div>
          <dl className="studio__stats" data-animate>
            <div className="studio__stat">
              <dt>In-house disciplines</dt>
              <dd>Strategy · Design · 3D · Motion · DevOps</dd>
            </div>
            <div className="studio__stat">
              <dt>Active markets</dt>
              <dd>APAC · EU · North America</dd>
            </div>
            <div className="studio__stat">
              <dt>Retention partners</dt>
              <dd>92% of founders renew after launch</dd>
            </div>
          </dl>
        </section>

        <section className="case-studies" id="work">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="case-card"
              data-animate
              style={{ "--stagger": index } as CSSProperties}
            >
              <div className="case-card__media" data-parallax="5">
                <Image src={study.image} alt={study.title} fill sizes="(min-width: 1024px) 520px, 80vw" />
                <span className="case-card__year">{study.year}</span>
              </div>
              <div className="case-card__content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <Link href="#" className="link-underline">
                  View case study
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mobile" aria-label="Mobile experience showcase" data-animate>
          <div className="section-header">
            <p className="eyebrow">Mobile-first journeys</p>
            <h2>Commerce that feels native on every device.</h2>
          </div>
          <div className="mobile__screens">
            {mobileScreens.map((screen, index) => (
              <figure
                key={screen.src}
                className="mobile__frame"
                style={{ "--stagger": index } as CSSProperties}
                data-parallax="7"
              >
                <Image src={screen.src} alt={screen.alt} fill sizes="(min-width: 1024px) 240px, 70vw" />
              </figure>
            ))}
          </div>
        </section>

        <section className="services" id="services" data-animate>
          <div className="section-header">
            <p className="eyebrow">Ways we ship</p>
            <h2>Modular services that scale with your roadmap.</h2>
          </div>
          <div className="services__grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="services__card"
                style={{ "--stagger": index } as CSSProperties}
              >
                <span className="services__index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="#" className="link-underline">
                  Scope this service
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__form" data-animate>
            <p className="eyebrow">Contact cart</p>
            <h2>Tell us about the build you have in mind.</h2>
            <form>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Founder's name" autoComplete="name" required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="name@brand.com" autoComplete="email" required />

              <label htmlFor="website">Current website</label>
              <input id="website" name="website" type="url" placeholder="https://" autoComplete="url" />

              <label htmlFor="bundle">Preferred bundle</label>
              <select id="bundle" name="bundle" defaultValue="">
                <option value="" disabled>
                  Select a bundle
                </option>
                {bundleProducts.map((bundle) => (
                  <option key={bundle.name} value={bundle.name}>
                    {bundle.name}
                  </option>
                ))}
              </select>

              <label htmlFor="notes">Project notes</label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Launch goals, timeline, integrations…"
              />

              <button type="submit" className="button button--primary">
                Submit inquiry
              </button>
            </form>
          </div>
          <aside className="contact__summary" data-animate>
            <h3>Launch support</h3>
            <ul>
              {contactHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="contact__totals">
              <div>
                <span>Avg. engagement</span>
                <strong>12 weeks</strong>
              </div>
              <div>
                <span>Investment range</span>
                <strong>$18k - $120k</strong>
              </div>
            </div>
            <p className="contact__footnote">We respond within one business day worldwide.</p>
          </aside>
        </section>

        <section className="team" aria-label="Core team" data-animate>
          <div className="section-header">
            <p className="eyebrow">Core team</p>
            <h2>The squad building tomorrow's beloved brands.</h2>
          </div>
          <div className="team__grid">
            {teamMembers.map((member, index) => (
              <figure
                key={member.name}
                className="team__card"
                style={{ "--stagger": index } as CSSProperties}
              >
                <div className="team__media" data-parallax="6">
                  <Image src={member.image} alt={member.name} fill sizes="(min-width: 1024px) 220px, 70vw" />
                </div>
                <figcaption>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                  <span className="team__location">{member.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" data-animate>
        <div className="site-footer__brand">
          <span>Fonder Studio</span>
          <p>Brand builders for founders shaping the next wave of commerce.</p>
        </div>
        <div className="site-footer__links">
          <div>
            <p className="eyebrow">Explore</p>
            <ul>
              <li>
                <Link href="#bundles">Bundles</Link>
              </li>
              <li>
                <Link href="#work">Work</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <ul>
              <li>
                <Link href="mailto:hello@fonder.studio">Email</Link>
              </li>
              <li>
                <Link href="#contact">Project inquiry</Link>
              </li>
              <li>
                <Link href="#studio">Our team</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Social</p>
            <ul>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Pinterest</Link>
              </li>
              <li>
                <Link href="#">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__meta">
          <span>© {new Date().getFullYear()} Fonder Studio</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}
