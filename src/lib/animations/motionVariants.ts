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
