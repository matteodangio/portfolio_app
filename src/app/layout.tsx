import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
