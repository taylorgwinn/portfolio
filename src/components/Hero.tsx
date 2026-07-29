"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b-4 border-ink bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative order-2 md:order-1"
        >
          <div className="flex aspect-[4/5] rotate-[-2deg] items-center justify-center border-4 border-ink bg-ink shadow-[10px_10px_0_var(--color-accent)]">
            <span className="font-display px-6 text-center text-lg font-bold uppercase tracking-widest text-cream">
              Reel / Video Coming Soon
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <p className="mb-3 font-display text-sm font-bold uppercase tracking-widest text-accent">
            Hi, I&apos;m Taylor
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Producer of
            <br />
            things that <span className="text-accent">move.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            Creative Producer at{" "}
            <span className="font-bold text-ink">Base, Creative Office</span>.
            Previously leading integrated production for Apple, Snapchat,
            Beats by Dre, Toyota, and the NFL — across broadcast, digital,
            social, and OOH.
          </p>
          <Link
            href="/work"
            className="mt-8 inline-block border-4 border-ink bg-ink px-6 py-3 font-display font-bold uppercase tracking-widest text-cream transition-colors hover:bg-accent hover:border-accent"
          >
            View the Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
