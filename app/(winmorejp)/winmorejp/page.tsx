import type { Metadata } from "next";
import Header from "@/sections/winmorejp/Header";
import Hero from "@/sections/winmorejp/Hero";
import Features from "@/sections/winmorejp/Features";
import Services from "@/sections/winmorejp/Services";
import Flow from "@/sections/winmorejp/Flow";
import Company from "@/sections/winmorejp/Company";
import Contact from "@/sections/winmorejp/Contact";
import Footer from "@/sections/winmorejp/Footer";

export const metadata: Metadata = {
  title: "允貿日本株式会社 — Win More Japan",
  description:
    "允貿日本株式会社は、台湾で30年以上の実績を持つ「允基企業」の日本公式窓口です。非鉄金属スクラップ・産業廃棄物の回収処理から、高純度金属インゴットの輸出入・安定供給まで対応します。",
};

export default function Page() {
  return (
    <div className="wm">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Flow />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
