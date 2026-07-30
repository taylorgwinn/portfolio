const capabilities = [
  { title: "Social & Digital", color: "bg-accent-3 text-ink" },
  { title: "Events", color: "bg-accent text-ink" },
  { title: "Video", color: "bg-ink text-cream" },
  { title: "Product Launches", color: "bg-accent-3 text-ink" },
  { title: "Merch", color: "bg-accent text-ink" },
  { title: "OOH & Print", color: "bg-ink text-cream" },
  { title: "Localization", color: "bg-accent-3 text-ink" },
];

export default function CapabilityOffset() {
  return (
    <section className="border-b-4 border-ink bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <h2 className="font-display mb-10 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Production Experience<span className="text-accent">.</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className={`font-display flex flex-1 items-center justify-center whitespace-nowrap border-4 border-ink px-6 py-3 text-sm font-bold uppercase tracking-widest sm:text-base ${cap.color}`}
            >
              {cap.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
