import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Taylor Gwinn",
  description: "Get in touch with Taylor Gwinn.",
};

const links = [
  {
    label: "Email",
    value: "taylorgwinn@gmail.com",
    href: "mailto:taylorgwinn@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/taylor-gwinn",
    href: "https://www.linkedin.com/in/taylor-gwinn-24790b30/",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display mb-3 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Let&apos;s talk<span className="text-accent">.</span>
      </h1>
      <p className="mb-12 max-w-lg text-lg text-ink/80">
        Creative Producer & Project Manager. Reach out about work,
        collaborations, or waves.
      </p>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "LinkedIn" ? "_blank" : undefined}
            rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-between border-4 border-ink px-6 py-5 transition-colors hover:bg-ink"
          >
            <span className="font-display text-sm font-bold uppercase tracking-widest text-accent">
              {link.label}
            </span>
            <span className="font-display text-lg font-bold group-hover:text-cream sm:text-xl">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
