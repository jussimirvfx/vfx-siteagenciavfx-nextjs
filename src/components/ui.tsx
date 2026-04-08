import Image from "next/image";
import Link from "next/link";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

type StatGridProps = {
  items: Array<{ value: string; label: string }>;
};

type FeatureGridProps = {
  items: Array<{ title: string; description: string }>;
};

type MediaItemProps = {
  items: Array<{
    title: string;
    subtitle?: string;
    image: string;
    alt: string;
    href?: string;
    ratio?: string;
  }>;
};

type FaqListProps = {
  items: Array<{ question: string; answer: string }>;
};

type BreadcrumbProps = {
  items: Array<{ label: string; href?: string }>;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function StatGrid({ items }: StatGridProps) {
  return (
    <div className="stat-grid">
      {items.map((item) => (
        <article className="stat-card" key={`${item.value}-${item.label}`}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <article className="feature-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function MediaGrid({ items }: MediaItemProps) {
  return (
    <div className="media-grid">
      {items.map((item) => (
        <article className="media-card" key={`${item.title}-${item.image}`}>
          <div
            className="media-card__frame"
            style={{ aspectRatio: item.ratio ?? "16 / 10" }}
          >
            <Image
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={item.image}
            />
          </div>
          <div className="media-card__copy">
            <h3>{item.title}</h3>
            {item.subtitle ? <p>{item.subtitle}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {index < items.length - 1 ? <span> / </span> : null}
        </span>
      ))}
    </nav>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
