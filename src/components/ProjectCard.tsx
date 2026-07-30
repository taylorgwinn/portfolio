import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.films.find((f) => f.thumbnail)?.thumbnail;

  return (
    <article className="group border-4 border-ink bg-cream transition-colors hover:bg-ink">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b-4 border-ink bg-ink text-cream">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={project.client}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
        <span className="font-display relative z-10 bg-ink/70 px-6 py-2 text-center text-2xl font-bold uppercase tracking-tight">
          {project.client}
        </span>
      </div>
      <div className="p-6">
        {project.award && (
          <div className="mb-3">
            <span className="bg-accent-2 px-2 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              {project.award}
            </span>
          </div>
        )}
        <h3 className="font-display mb-1 text-2xl font-bold leading-tight group-hover:text-cream">
          {project.title}
        </h3>
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">
          {project.role}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-ink/80 group-hover:text-cream/80">
          {project.description}
        </p>
        <p className="mb-4 text-xs font-bold uppercase tracking-wide text-ink/60 group-hover:text-cream/60">
          Films: {project.films.map((f) => f.title).join(" · ")}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-ink px-2 py-0.5 text-xs font-bold uppercase tracking-wide group-hover:border-cream group-hover:text-cream"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
