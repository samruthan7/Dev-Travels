"use client";

import dynamic from "next/dynamic";
import { MotionConfig, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { WebglFallback } from "@/components/three/WebglFallback";
import { useWebglSupport } from "@/hooks/useWebglSupport";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <WebglFallback />,
});

const stars = [
  "radial-gradient(1.5px 1.5px at 12% 18%, #fff, transparent)",
  "radial-gradient(1px 1px at 28% 32%, #fff, transparent)",
  "radial-gradient(1.5px 1.5px at 44% 12%, #fff, transparent)",
  "radial-gradient(1px 1px at 63% 26%, #fff, transparent)",
  "radial-gradient(1.5px 1.5px at 78% 14%, #fff, transparent)",
  "radial-gradient(1px 1px at 90% 36%, #fff, transparent)",
  "radial-gradient(1px 1px at 8% 44%, #fff, transparent)",
  "radial-gradient(1px 1px at 55% 40%, #fff, transparent)",
].join(",");

export function Hero() {
  const webgl = useWebglSupport();

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-midnight">
        {/* Night sky */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `${stars}, radial-gradient(60% 50% at 70% 20%, rgba(80,110,200,0.28), transparent 70%), linear-gradient(180deg, #0a1020 0%, #0f1b33 60%, #12151c 100%)`,
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Moon */}
        <div
          aria-hidden="true"
          className="absolute right-[14%] top-[16%] -z-10 size-16 rounded-full bg-ink/90 shadow-[0_0_80px_20px_rgba(160,185,255,0.25)] sm:size-20"
        />

        {/* Mountain layers */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 -z-10 h-[42%] w-full"
        >
          <path
            d="M0 220 L140 130 L260 200 L420 90 L560 190 L720 110 L880 200 L1040 100 L1200 190 L1320 140 L1440 210 V400 H0 Z"
            fill="#16264a"
            opacity="0.75"
          />
          <path
            d="M0 280 L120 210 L260 270 L400 180 L540 265 L700 190 L860 270 L1000 200 L1160 275 L1300 220 L1440 280 V400 H0 Z"
            fill="#0f1b33"
          />
          <path
            d="M0 340 L160 290 L320 335 L500 275 L680 340 L860 285 L1040 340 L1220 295 L1440 345 V400 H0 Z"
            fill="#0a1020"
          />
        </svg>

        {/* 3D glass travel pass */}
        <div className="pointer-events-none absolute inset-x-0 top-[12%] h-[48%] sm:top-[10%] sm:h-[55%]">
          {webgl ? <HeroScene /> : <WebglFallback />}
        </div>

        {/* Text */}
        <div className="relative mx-auto mt-auto flex w-full max-w-7xl flex-col gap-8 px-5 pb-12 pt-[60vh] sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">
              Dev Travels &middot; Tambaram, Chennai
            </p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your journey, planned with care.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="max-w-md"
          >
            <p className="leading-relaxed text-mist">
              Tirupati darshan, temple tours, domestic and international holidays, honeymoon
              packages and car rentals. Tell us where you want to go and we will help plan it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/reach-us" size="lg">
                Plan my trip
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
