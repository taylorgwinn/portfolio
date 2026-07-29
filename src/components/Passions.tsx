const passions = [
  {
    title: "Music",
    copy: "Building playlists, catching live shows, and sharing music with my toddler.",
  },
  {
    title: "Community",
    copy: "Tutoring through Boys & Girls Club, School on Wheels, and Big Brothers Big Sisters — plus art sessions at the NYC Blind Center for Adults.",
  },
  {
    title: "Content Creation",
    copy: "Drone videography and social editing for small businesses, plus writing on the side.",
  },
  {
    title: "Surfing",
    copy: "Chasing waves with my 2-year-old daughter whenever I can.",
  },
];

export default function Passions() {
  return (
    <section className="border-b-4 border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display mb-10 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Off the clock<span className="text-accent">.</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {passions.map((p) => (
            <div
              key={p.title}
              className="border-4 border-cream/20 p-6 transition-colors hover:border-accent"
            >
              <h3 className="font-display mb-2 text-xl font-bold uppercase text-accent">
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
