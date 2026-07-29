import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-4 border-ink bg-cream transition-colors hover:bg-ink">
      <div className="flex aspect-video items-center justify-center border-b-4 border-ink bg-ink text-cream transition-colors group-hover:bg-accent">
        <span className="font-display px-6 text-center text-2xl font-bold uppercase tracking-tight">
          {project.client}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.award && (
            <span className="bg-accent px-2 py-1 text-xs font-bold uppercase tracking-widest text-cream">
              {project.award}
            </span>
          )}
          <span className="text-xs font-bold uppercase tracking-widest text-ink/60 group-hover:text-cream/60">
            {project.budget}
          </span>
        </div>
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
          Films: {project.films.join(" · ")}
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
