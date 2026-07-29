export default function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-display uppercase tracking-widest">
          Taylor Gwinn
        </p>
        <p className="text-cream/60">
          &copy; {new Date().getFullYear()} — Built with Next.js
        </p>
      </div>
    </footer>
  );
}
