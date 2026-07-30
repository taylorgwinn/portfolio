import Link from "next/link";
import CapabilityOffset from "@/components/CapabilityOffset";
import Hero from "@/components/Hero";
import Passions from "@/components/Passions";
import RecentWork from "@/components/RecentWork";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.client === "Base");

  return (
    <>
      <Hero />
      <CapabilityOffset />

      <section className="border-b-4 border-ink bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Recent work<span className="text-accent">.</span>
            </h2>
            <Link
              href="/work"
              className="font-display shrink-0 text-sm font-bold uppercase tracking-widest text-accent hover:underline"
            >
              See all &rarr;
            </Link>
          </div>
          <RecentWork projects={featured} />
        </div>
      </section>

      <Passions />
    </>
  );
}
