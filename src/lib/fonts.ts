import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const zodiak = localFont({
  src: [
    {
      path: "../fonts/zodiak/Zodiak-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/zodiak/Zodiak-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/zodiak/Zodiak-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/zodiak/Zodiak-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});