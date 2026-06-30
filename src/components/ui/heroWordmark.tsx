"use client";

import Image, { type ImageProps } from "next/image";
import { useTheme } from "next-themes";

type HeroWordmarkProps = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height"
> & {
  srcLight: string;
  srcDark: string;
  alt: string;
};

export default function HeroWordmark({
  srcLight,
  srcDark,
  alt,
  className,
  ...props
}: HeroWordmarkProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <Image
        key={isDark ? "dark" : "light"}
        src={isDark ? srcDark : srcLight}
        alt={alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1280px) 640px, (min-width: 768px) 42vw, 86vw"
        draggable={false}
        className="h-auto w-full object-contain"
        {...props}
      />
    </div>
  );
}
