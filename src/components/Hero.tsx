"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-16 pb-8 md:grid-cols-2 md:items-center md:pt-24 md:pb-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative order-2 md:order-1"
        >
          <div className="flex aspect-[4/5] rotate-[-2deg] items-center justify-center border-4 border-ink bg-ink">
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
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Integrated Producer
            <br />
            &amp; Project Manager.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-rust">
            Currently{" "}
            <span className="font-bold text-ink">
              Senior Producer, Base, Creative Office
            </span>
            , at Coinbase. Previously at Apple, Omnicom Production, Beats By
            Dre, Deutsch, and R/GA — across video, experiential, social, and
            OOH.
          </p>
          <Link
            href="/work"
            className="mt-8 inline-block border-4 border-ink bg-accent-2 px-6 py-3 font-display font-bold uppercase tracking-widest text-ink transition-colors hover:bg-accent-3"
          >
            View the Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
