import type { ReactNode } from "react";
import { IBM_Plex_Mono, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./winmorejp.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--wm-font-sans",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--wm-font-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--wm-font-mono",
  display: "swap",
});

export default function WinMoreJapanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
