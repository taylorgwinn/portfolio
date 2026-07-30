import Image from "next/image";
import type { Project } from "@/data/projects";

export default function RecentWork({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => {
        const thumbnail = project.films.find((f) => f.thumbnail)?.thumbnail;
        const video = project.films.find((f) => f.video)?.video;
        const videoUrl = project.films.find((f) => f.videoUrl)?.videoUrl;
        const Tag = videoUrl ? "a" : "div";

        return (
          <Tag
            key={project.slug}
            {...(videoUrl
              ? { href: videoUrl, target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group relative aspect-square overflow-hidden border-2 border-ink bg-ink text-cream"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              thumbnail && (
                <Image
                  src={thumbnail}
                  alt={project.client}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              )
            )}

            {videoUrl && (
              <span className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
                ▶
              </span>
            )}

            <div className="absolute inset-0 flex flex-col justify-start bg-ink/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-ink/85 group-hover:opacity-100">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                {project.client}
              </p>
              <h3 className="font-display mt-1 text-lg font-bold uppercase leading-tight">
                {project.shortTitle ?? project.title}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-cream/70">
                {project.role}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="border border-cream/40 px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Tag>
        );
      })}
    </div>
  );
}
