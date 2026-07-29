import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Taylor Gwinn",
  description:
    "Integrated production work for Apple, Snapchat, Beats by Dre, Toyota, and the NFL.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display mb-3 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Work<span className="text-accent">.</span>
      </h1>
      <p className="mb-12 max-w-xl text-lg text-ink/80">
        Nine campaigns, five continents, one very well-used spreadsheet.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
