import { Providers } from "./providers";
import "./globals.css";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh-TW" }, { lang: "ja" }];
}

export default async function RootLayout({ children, params }) {
  return (
    <html lang={(await params)?.lang ?? "en"}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
