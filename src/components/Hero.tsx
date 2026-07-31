"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-8 md:pt-24 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
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
              Senior Lead Producer, Base
            </span>{" "}
            at Coinbase.
          </p>
          <div className="mt-4 max-w-xl space-y-3 text-sm leading-relaxed text-ink/60">
            <p>
              Seasoned Integrated Producer and Project Manager with
              experience on both the brand and agency sides. I have a
              comprehensive understanding of the entire creative process from
              conception to completion, which includes strategy and brief
              development, as well as the trafficking and delivery of assets.
            </p>
            <p>
              My extensive global marketing and campaigns knowledge allows me
              to manage up to 32 markets simultaneously, drawing on my
              experience at companies such as Apple, Snapchat, MAL, Saatchi
              &amp; Saatchi, and R/GA.
            </p>
            <p>
              I am detail-oriented, driven, and passionate about my work. I
              approach challenges with solutions in mind, effectively guiding
              teams toward success and creating work that we can all be proud
              of.
            </p>
          </div>
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
