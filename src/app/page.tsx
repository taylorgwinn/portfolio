import Link from "next/link";
import Hero from "@/components/Hero";
import Passions from "@/components/Passions";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="border-b-4 border-ink bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Selected work<span className="text-accent">.</span>
            </h2>
            <Link
              href="/work"
              className="font-display shrink-0 text-sm font-bold uppercase tracking-widest text-accent hover:underline"
            >
              See all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Passions />
    </>
  );
}
