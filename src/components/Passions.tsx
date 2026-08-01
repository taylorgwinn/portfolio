const passions = [
  {
    title: "Music",
    copy: "Building playlists, catching live shows, and sharing music with my toddler.",
    color: "text-accent",
    border: "hover:border-accent",
  },
  {
    title: "Community",
    copy: "Volunteering and giving back to the community through Boys & Girls Club, School on Wheels, Big Brothers Big Sisters, and other organizations in the places I've lived.",
    color: "text-accent-2",
    border: "hover:border-accent-2",
  },
  {
    title: "Content Creation",
    copy: "Drone videography and social edits for small businesses.",
    color: "text-accent-3",
    border: "hover:border-accent-3",
  },
  {
    title: "Surfing and Pickleball",
    copy: "Catch me on my longboard or on the court.",
    color: "text-accent",
    border: "hover:border-accent",
  },
];

export default function Passions() {
  return (
    <section className="border-b-4 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display mb-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Off the clock<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 max-w-xl text-cream/70">
          Some of my favorite things to do when I&apos;m not working.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {passions.map((p) => (
            <div
              key={p.title}
              className={`border-4 border-cream/20 p-6 transition-colors ${p.border}`}
            >
              <h3
                className={`font-display mb-2 text-xl font-bold uppercase ${p.color}`}
              >
                {p.title}
              </h3>
              <p className="text-cream/80">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
