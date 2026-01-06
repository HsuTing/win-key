import Navbar from "@/sections/Navbar";
import About from "@/sections/About";
import Business from "@/sections/Business";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Home from "@/sections/Home";
import Recruit from "@/sections/Recruit";
import BackToTop from "@/components/BackToTop";
import { META } from "@/constants/meta";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh-TW" }, { lang: "ja" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "zh-TW" | "ja" };
}) {
  return META[params.lang];
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Recruit />
      <Footer />
    </>
  );
}
