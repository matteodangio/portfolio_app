"use client";

import Image, { type ImageProps } from "next/image";

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
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <Image
        src={srcLight}
        alt={alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1280px) 640px, (min-width: 768px) 42vw, 86vw"
        draggable={false}
        className="h-auto w-full object-contain dark:hidden"
        {...props}
      />
      <Image
        src={srcDark}
        alt={alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1280px) 640px, (min-width: 768px) 42vw, 86vw"
        draggable={false}
        className="hidden h-auto w-full object-contain dark:block"
        {...props}
      />
    </div>
  );
}
