import type { Metadata } from "next";
import RedirectToJa from "@/sections/winmorejp/RedirectToJa";

const TARGET = "/winmore-jp/ja";

export const metadata: Metadata = {
  title: "允貿日本株式会社 — Win More Japan",
  robots: { index: false },
  alternates: { canonical: TARGET },
};

// GitHub Pages cannot send a 301, so the short URL redirects on the client.
export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <RedirectToJa to={TARGET} />
      <p>
        <a href={TARGET}>允貿日本株式会社のページへ移動します</a>
      </p>
    </>
  );
}
