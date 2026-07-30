import Image from "next/image";
import ClientLogo from "@/components/ClientLogo";
import type { Film, Project } from "@/data/projects";

const sectionColors = [
  { bg: "bg-accent-3 text-ink", border: "border-accent-3" },
  { bg: "bg-accent-2 text-ink", border: "border-accent-2" },
  { bg: "bg-accent text-ink", border: "border-accent" },
  { bg: "bg-ink text-cream", border: "border-ink" },
];

function groupByClient(list: Project[]) {
  const map = new Map<string, Project[]>();
  for (const p of list) {
    const arr = map.get(p.client) ?? [];
    arr.push(p);
    map.set(p.client, arr);
  }
  return Array.from(map.entries());
}

function FilmTile({ film, aspect }: { film: Film; aspect: string }) {
  const Tag = film.videoUrl ? "a" : "div";
  const canZoom = !film.video && !film.videoUrl && film.thumbnail;

  return (
    <div className="group/tile relative">
      <Tag
        {...(film.videoUrl
          ? {
              href: film.videoUrl,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
        className={`group/film relative flex ${aspect} items-center justify-center overflow-hidden border-4 border-ink bg-ink text-cream`}
      >
        {film.video ? (
          <video
            src={film.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            {film.thumbnail && (
              <Image
                src={film.thumbnail}
                alt={film.title}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            )}
            {(!film.thumbnail || film.videoUrl) && (
              <span className="font-display relative z-10 bg-ink/70 px-2 py-1 text-center text-xs font-bold uppercase tracking-widest">
                {film.title}
              </span>
            )}
          </>
        )}
        {film.videoUrl && (
          <span className="absolute inset-0 z-20 flex items-center justify-center bg-ink/0 transition-colors group-hover/film:bg-ink/40">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-2 text-ink opacity-0 transition-opacity group-hover/film:opacity-100">
              ▶
            </span>
          </span>
        )}
      </Tag>

      {canZoom && (
        <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover/tile:opacity-100">
          <div className="relative aspect-square w-[220px] shrink-0 scale-90 overflow-hidden border-4 border-ink transition-transform duration-200 group-hover/tile:scale-100 sm:w-[300px]">
            <Image
              src={film.thumbnail as string}
              alt={film.title}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ClientSections({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <div className="flex flex-col gap-12">
      {groupByClient(projects).map(([client, projs], i) => {
        const color = sectionColors[i % sectionColors.length];
        return (
          <div key={client} className={`border-l-8 ${color.border}`}>
            <div className={`flex items-center gap-3 px-6 py-4 ${color.bg}`}>
              <ClientLogo client={client} className="h-6 w-6 shrink-0" />
              <h3 className="font-display text-lg font-bold uppercase tracking-widest">
                {client}
              </h3>
            </div>
            <div className="divide-y-4 divide-ink">
              {projs.map((project) => {
                const largeFilms = project.films.filter(
                  (f) => f.video || f.videoUrl,
                );
                const smallFilms = project.films.filter(
                  (f) => !f.video && !f.videoUrl,
                );

                return (
                  <div
                    key={project.slug}
                    className="grid gap-6 p-6 md:grid-cols-[1fr_1.4fr]"
                  >
                    <div className="flex flex-col gap-2">
                      {largeFilms.length > 0 ? (
                        <>
                          {largeFilms.length === 1 ? (
                            <FilmTile
                              film={largeFilms[0]}
                              aspect="aspect-video"
                            />
                          ) : (
                            <div className="grid grid-cols-2 gap-2">
                              {largeFilms.map((film) => (
                                <FilmTile
                                  key={film.title}
                                  film={film}
                                  aspect="aspect-video"
                                />
                              ))}
                            </div>
                          )}
                          {smallFilms.length > 0 && (
                            <div className="flex gap-2">
                              {smallFilms.map((film) => (
                                <div key={film.title} className="flex-1">
                                  <FilmTile film={film} aspect="aspect-square" />
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div
                          className={`grid gap-2 ${project.films.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
                        >
                          {project.films.map((film) => (
                            <FilmTile
                              key={film.title}
                              film={film}
                              aspect="aspect-video"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      {project.award && (
                        <div className="mb-2">
                          <span className="bg-accent-2 px-2 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                            {project.award}
                          </span>
                        </div>
                      )}
                      <h4 className="font-display mb-1 text-xl font-bold leading-tight">
                        {project.title}
                      </h4>
                      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">
                        {project.role}
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-ink/80">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border-2 border-ink px-2 py-0.5 text-xs font-bold uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
