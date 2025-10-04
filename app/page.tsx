'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles/home.css";

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "New", href: "#showcase" },
  { label: "Values", href: "#principles" },
  { label: "Studios", href: "#studios" },
  { label: "Journal", href: "#journal" },
];

const heroMetrics = [
  { title: "Studios Served", value: "64" },
  { title: "Lead Time", value: "2-4 wks" },
  { title: "Reclaimed Materials", value: "82%" },
];

const featuredProducts = [
  {
    name: "Arco Dining Chair",
    description:
      "Curved teak framing with natural cane panels and brass-capped feet for a refined dining statement.",
    price: "$420",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1616628182501-dd6b9283fc45?auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "Piazza Modular Sofa",
    description:
      "Feather-wrapped cushions and modular blocks upholstered in undyed Belgian linen.",
    price: "$2,950",
    tag: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1620662735857-d0ee37edc481?auto=format&fit=crop&w=1100&q=80",
  },
  {
    name: "Obsidian Floor Lamp",
    description:
      "Volcanic stone base paired with warm dimmable lighting and a sculpted silk shade.",
    price: "$610",
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1616627452564-cb1c56f14507?auto=format&fit=crop&w=1100&q=80",
  },
];

const showcasePanels = [
  {
    title: "The Atelier Capsule",
    copy:
      "A curated suite of lounge essentials shaped by hand in our Barcelona workshop. Each silhouette is produced in runs of 25 and numbered for provenance.",
    cta: "Discover capsule",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Material Library",
    copy:
      "Select upholstery woven from regenerative fibres and FSC-certified hardwoods finished with natural oils.",
    cta: "View swatches",
    image:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1400&q=80",
  },
];

const principles = [
  {
    title: "Responsible Supply",
    detail:
      "We work with foresters and mills that exceed FSC guidelines, ensuring every design yields a positive material balance.",
  },
  {
    title: "Hand Finished",
    detail:
      "Our artisans oil, sand, and inspect each piece over multiple days before it ever leaves the studio.",
  },
  {
    title: "Circular Lifecycle",
    detail:
      "Return pieces for refurbishment and receive credit toward future releases to keep furniture in rotation.",
  },
  {
    title: "Transparent Pricing",
    detail:
      "Every design card lists the true material, labour, and logistics costs so you know what you invest in.",
  },
];

const lookbookShots = [
  {
    src: "https://images.unsplash.com/photo-1616627452595-1b725f0c6022?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalist living room with low lounge seating",
  },
  {
    src: "https://images.unsplash.com/photo-1616627452558-74a53ce38afc?auto=format&fit=crop&w=1200&q=80",
    alt: "Sculptural dining area with moody lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1616627354093-5f63b29c4c39?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio with custom shelving and lounge chair",
  },
];

const journalEntries = [
  {
    title: "Sculptural Forms for Autumn",
    date: "September 12, 2024",
    excerpt:
      "Explore the FW capsule of pedestal tables and ribbon lighting shaped to layer tone-on-tone neutrals.",
  },
  {
    title: "Inside the Fonder Workshop",
    date: "August 28, 2024",
    excerpt:
      "Step inside our Barcelona atelier where artisans steam-bend oak and finish every seam by hand.",
  },
  {
    title: "Designing for Longevity",
    date: "July 8, 2024",
    excerpt:
      "Our creative director shares how timeless silhouettes and natural materials deliver pieces that age beautifully.",
  },
];

const pressLogos = [
  { name: "Architectural Digest", initials: "AD" },
  { name: "Dezeen", initials: "DZ" },
  { name: "Wallpaper*", initials: "WP" },
  { name: "Monocle", initials: "MN" },
];

const services = [
  {
    title: "Custom commissions",
    description:
      "Partner with our atelier to draft bespoke pieces sized and finished for private residences, hospitality, and cultural spaces.",
  },
  {
    title: "In-residence styling",
    description:
      "Our interior designers layer textiles, art, and lighting for fully dressed rooms, supported by logistics in over 40 countries.",
  },
  {
    title: "Lifetime care",
    description:
      "Enjoy scheduled maintenance, upholstery refreshing, and refurbishment to ensure every piece endures across generations.",
  },
];

const projects = [
  {
    title: "Casa Brera",
    location: "Milan, Italy",
    image:
      "https://images.unsplash.com/photo-1616628177836-c0b5c35dd5d3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Harbour Loft",
    location: "Copenhagen, Denmark",
    image:
      "https://images.unsplash.com/photo-1621094818244-3f38625f87b9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Desert Pavilion",
    location: "Sedona, United States",
    image:
      "https://images.unsplash.com/photo-1616627562421-fb3f4540b7c1?auto=format&fit=crop&w=1400&q=80",
  },
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
        const xFactor = (event.clientX / window.innerWidth - 0.5) * 18;
        const yFactor = (event.clientY / window.innerHeight - 0.5) * 18;
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
        rootMargin: "0px 0px -15% 0px",
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
          gradient.style.setProperty("--gradient-x", `${50 + Math.sin(time) * 30}%`);
          gradient.style.setProperty("--gradient-y", `${50 + Math.cos(time) * 30}%`);
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
        <div className="site-header__brand" data-parallax="4">
          <span>Fonder</span>
          <span>Atelier</span>
        </div>
        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <button type="button" aria-label="Search catalogue">
            Search
          </button>
          <button type="button" aria-label="Open account">
            Account
          </button>
          <button type="button" aria-label="View cart">
            Cart • 2
          </button>
        </div>
      </header>

      <main className="site-main">
        <section className="hero" id="home">
          <div className="hero__content" data-animate>
            <p className="hero__eyebrow">FW25 Studio Release</p>
            <h1 className="hero__title">
              Design-led furniture handcrafted for curated living spaces.
            </h1>
            <p className="hero__body">
              Fonder Studio crafts sculptural essentials in limited runs using regenerative materials and slow
              processes. Build layered rooms that feel collected over time with silhouettes that endure.
            </p>
            <div className="hero__cta">
              <Link className="button button--primary" href="#shop">
                Shop collection
              </Link>
              <Link className="button button--ghost" href="#lookbook">
                Explore lookbook
              </Link>
            </div>
            <dl className="hero__metrics">
              {heroMetrics.map((metric) => (
                <div key={metric.title} className="hero__metric">
                  <dt>{metric.title}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hero__visual" data-animate>
            <div className="hero__video-frame" data-parallax="6">
              <video
                className="hero__video"
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1616627452558-74a53ce38afc?auto=format&fit=crop&w=1200&q=80"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-morning-light-in-a-minimalist-bedroom-6446/1080p.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="hero__gallery" data-parallax="3">
              {lookbookShots.slice(0, 2).map((shot) => (
                <figure key={shot.src} className="hero__shot">
                  <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 360px, 50vw" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__inner">
            {["Consciously crafted", "Low-impact materials", "Express worldwide", "Lifetime servicing"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
          <div className="marquee__inner" aria-hidden="true">
            {["Consciously crafted", "Low-impact materials", "Express worldwide", "Lifetime servicing"].map(
              (item) => (
                <span key={item}>{item}</span>
              )
            )}
          </div>
        </div>

        <section className="press" aria-label="Press features" data-animate>
          <div className="press__inner">
            {pressLogos.map((press) => (
              <span key={press.name} className="press__item" aria-label={press.name}>
                {press.initials}
              </span>
            ))}
          </div>
        </section>

        <section className="featured" id="shop" data-animate>
          <div className="section-header">
            <p className="eyebrow">Featured pieces</p>
            <div className="section-header__meta">
              <span>Edition 05</span>
              <Link href="#" aria-label="Shop all furniture" className="link-underline">
                Shop all
              </Link>
            </div>
          </div>
          <div className="featured__grid">
            {featuredProducts.map((product) => (
              <article key={product.name} className="product-card" data-parallax="8">
                <div className="product-card__media">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 420px, 80vw"
                  />
                  <span className="product-card__tag">{product.tag}</span>
                </div>
                <div className="product-card__content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card__footer">
                    <span>{product.price}</span>
                    <button type="button" className="link-underline">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capsule" data-animate>
          <div className="capsule__media" data-parallax="6">
            <Image
              src="https://images.unsplash.com/photo-1616627562463-e4608edbc5cc?auto=format&fit=crop&w=1400&q=80"
              alt="Artisanal workshop bench"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
          <div className="capsule__content">
            <p className="eyebrow">Edition Capsule</p>
            <h2>Slow crafted furniture shaped by hand in small batches.</h2>
            <p>
              Each capsule release is produced by a core team of artisans using reclaimed hardwoods, plant-dyed textiles, and
              solid brass joinery. Reserve an allocation or customise dimensions with our atelier specialists.
            </p>
            <ul className="capsule__list">
              <li>Limited runs of 25 pieces per silhouette</li>
              <li>Material provenance certificates included</li>
              <li>Express white glove delivery worldwide</li>
            </ul>
            <div className="capsule__actions">
              <Link className="button button--primary" href="#">
                View capsule lookbook
              </Link>
              <Link className="button button--ghost" href="#">
                Reserve consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="showcase" id="showcase">
          {showcasePanels.map((panel) => (
            <article key={panel.title} className="showcase__panel" data-animate>
              <div className="showcase__media" data-parallax="5">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="(min-width: 1024px) 600px, 90vw"
                />
              </div>
              <div className="showcase__content">
                <p className="eyebrow">Studio focus</p>
                <h2>{panel.title}</h2>
                <p>{panel.copy}</p>
                <Link href="#" className="link-underline">
                  {panel.cta}
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="principles" id="principles" data-animate>
          <div className="section-header">
            <p className="eyebrow">Founding principles</p>
            <span>Designed for longevity</span>
          </div>
          <div className="principles__grid">
            {principles.map((principle) => (
              <article key={principle.title} className="principles__card">
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" data-animate>
          <div className="section-header">
            <p className="eyebrow">Recent interiors</p>
            <span>Bespoke spaces furnished by Fonder Studio</span>
          </div>
          <div className="projects__track">
            {projects.map((project) => (
              <figure key={project.title} className="projects__card" data-parallax="6">
                <Image
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  fill
                  sizes="(min-width: 1024px) 520px, 90vw"
                />
                <figcaption>
                  <span>{project.location}</span>
                  <strong>{project.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="lookbook" id="lookbook" data-animate>
          <div className="section-header">
            <p className="eyebrow">Lookbook</p>
            <span>Captured in residence</span>
          </div>
          <div className="lookbook__carousel">
            {lookbookShots.map((shot) => (
              <figure key={shot.src} className="lookbook__frame" data-parallax="7">
                <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 460px, 80vw" />
              </figure>
            ))}
          </div>
        </section>

        <section className="services" data-animate>
          <div className="section-header">
            <p className="eyebrow">At your service</p>
            <span>Expertise from ideation to installation</span>
          </div>
          <div className="services__grid">
            {services.map((service) => (
              <article key={service.title} className="services__card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="#" className="link-underline">
                  Enquire
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="studios" id="studios" data-animate>
          <div className="studios__content">
            <p className="eyebrow">Studios worldwide</p>
            <h2>Consult with our designers from Barcelona, Melbourne, and New York.</h2>
            <p>
              Book a private appointment to tailor silhouettes, textiles, and finishes to your space. Our design team
              provides renderings and sample palettes for every commission.
            </p>
            <div className="studios__actions">
              <Link className="button button--primary" href="#">
                Book consultation
              </Link>
              <Link className="button button--ghost" href="#">
                View studios
              </Link>
            </div>
          </div>
          <div className="studios__media" data-parallax="4">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
              alt="Interior design studio"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
            />
          </div>
        </section>

        <section className="journal" id="journal" data-animate>
          <div className="section-header">
            <p className="eyebrow">Journal</p>
            <Link href="#" className="link-underline">
              Read all stories
            </Link>
          </div>
          <div className="journal__grid">
            {journalEntries.map((entry) => (
              <article key={entry.title} className="journal__card">
                <p className="journal__date">{entry.date}</p>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <Link href="#" className="link-underline">
                  Continue reading
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter" data-animate>
          <div className="newsletter__inner">
            <div>
              <p className="eyebrow">Studio dispatch</p>
              <h2>Receive capsule drops, project reveals, and atelier invitations.</h2>
              <p>
                Subscribe for monthly notes from our creative directors and be the first to access limited releases and
                collaborations.
              </p>
            </div>
            <form className="newsletter__form" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                required
              />
              <button type="submit" className="button button--primary">
                Join list
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" data-animate>
        <div className="site-footer__brand">
          <span>Fonder Atelier</span>
          <p>Designing enduring furniture for modern residences since 2015.</p>
        </div>
        <div className="site-footer__links">
          <div>
            <p className="eyebrow">Shop</p>
            <ul>
              <li>
                <Link href="#">Seating</Link>
              </li>
              <li>
                <Link href="#">Tables</Link>
              </li>
              <li>
                <Link href="#">Lighting</Link>
              </li>
              <li>
                <Link href="#">Outdoor</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Studio</p>
            <ul>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Sustainability</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Follow</p>
            <ul>
              <li>
                <Link href="#">Instagram</Link>
              </li>
              <li>
                <Link href="#">Pinterest</Link>
              </li>
              <li>
                <Link href="#">Behance</Link>
              </li>
              <li>
                <Link href="#">Newsletter</Link>
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
