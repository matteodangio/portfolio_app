import { Variants } from "motion";
import { smoothEase } from "./motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: smoothEase,
      },
    },
  };
  
  export const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  
  export const worksContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  export const heroVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };

  
  export const imageIn = {
    hidden: { opacity: 0, y: 26, scale: 0.965, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };
  
  export const navList = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.25,
      },
    },
  };
  
  export const navItem = {
    hidden: { opacity: 0, x: 22 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
  };

  export const contentVariants: Variants = {
    hidden: { opacity: 0, height: 0, y: -8 },
    show: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -8,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };
export const techStackContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};


export const panelVariants = {
  open: {
    height: "auto",
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  closed: {
    height: 0,
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};