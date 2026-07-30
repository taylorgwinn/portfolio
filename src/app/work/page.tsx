import type { Metadata } from "next";
import ClientSections from "@/components/ClientSections";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Taylor Gwinn",
  description:
    "Integrated production work for Apple, Snapchat, Beats by Dre, Toyota, and the NFL.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display mb-12 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Work<span className="text-accent">.</span>
      </h1>
      <ClientSections projects={projects} />
    </section>
  );
}
