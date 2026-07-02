"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

type HeroWordmarkProps = {
  srcLight: string;
  srcDark: string;
  alt: string;
  className?: string;
};

export default function HeroWordmark({
  srcLight,
  srcDark,
  alt,
  className,
}: HeroWordmarkProps) {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      {/* Parallax on scroll */}
      <motion.div style={{ y: parallaxY }} className="will-change-transform">
        {/* Entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Infinite floating animation */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group"
          >
            <Image
              src={srcLight}
              alt={alt}
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1280px) 640px, (min-width: 768px) 42vw, 86vw"
              draggable={false}
              className="block h-auto w-full object-contain transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:opacity-80 dark:hidden"
            />

            <Image
              src={srcDark}
              alt={alt}
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1280px) 640px, (min-width: 768px) 42vw, 86vw"
              draggable={false}
              className="hidden h-auto w-full object-contain transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:opacity-80 dark:block"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
