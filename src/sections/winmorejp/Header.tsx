import Image from "next/image";
import logo from "@/images/about/affiliates/WIN MORE LOGO.jpg";

const NAV = [
  { href: "#features", label: "私たちの強み" },
  { href: "#services", label: "取扱品目" },
  { href: "#flow", label: "循環フロー" },
  { href: "#company", label: "会社概要" },
];

export default function Header() {
  return (
    <header className="wm-header">
      <div className="wm-header__in">
        <a href="#top" className="wm-brand">
          <Image src={logo} alt="Win More ロゴ" width={44} height={44} priority />
          <div className="wm-brand__text">
            <span className="wm-brand__name">允貿日本株式会社</span>
            <span className="wm-brand__sub">台湾・允基企業 日本総代理</span>
          </div>
        </a>
        <nav aria-label="メイン" className="wm-nav">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="#contact" className="wm-btn wm-btn--primary">
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
