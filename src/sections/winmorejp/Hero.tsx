const ELEMENTS = [
  { no: 29, sym: "Cu", name: "銅", color: "#e8a36f" },
  { no: 50, sym: "Sn", name: "錫", color: "#c8d3dc" },
  { no: 13, sym: "Al", name: "アルミニウム", color: "#a9b8c8" },
  { no: 30, sym: "Zn", name: "亜鉛", color: "#8fb3d1" },
  { no: 28, sym: "Ni", name: "ニッケル", color: "#c4c9b0" },
  { no: 27, sym: "Co", name: "コバルト", color: "#7fa8e8" },
  { no: 82, sym: "Pb", name: "鉛", color: "#8d99ab" },
  { no: 79, sym: "Au", name: "金", color: "#f0c64e" },
  { no: 47, sym: "Ag", name: "銀", color: "#eef1f5" },
  { no: 78, sym: "Pt", name: "プラチナ", color: "#d6dce6" },
  { no: 46, sym: "Pd", name: "パラジウム", color: "#c9c2b4" },
];

export default function Hero() {
  return (
    <section id="top" className="wm-hero">
      <div className="wm-hero__in">
        <div className="wm-hero__copy">
          <p className="wm-hero__eyebrow">WIN MORE JAPAN CO., LTD.</p>
          <h1>
            <span className="wm-nowrap">世界を結ぶ、</span>
            <br />
            <span className="wm-nowrap">資源循環のパートナー</span>
            <span className="wm-hero__sub">
              台湾・允基（ウィンキー）日本総代理
            </span>
          </h1>
          <p className="wm-hero__lead">
            允貿日本株式会社は、台湾で30年以上の実績を持つ「允基企業」の日本公式窓口です。非鉄金属スクラップ・産業廃棄物の回収処理から、高純度金属インゴットの輸出入・安定供給まで、日本・台湾・東南アジアをはじめ世界各地を結ぶネットワークでお応えします。
          </p>
          <div className="wm-hero__ctas">
            <a href="#contact" className="wm-btn wm-btn--primary">
              お問い合わせ・ご相談
            </a>
            <a href="#company" className="wm-btn wm-btn--ghost">
              会社概要を見る
            </a>
          </div>
        </div>
        <div className="wm-elements" aria-hidden="true">
          {ELEMENTS.map(({ no, sym, name, color }) => (
            <div key={sym} className="wm-element" style={{ color }}>
              <span className="wm-element__no">{no}</span>
              <span className="wm-element__sym">{sym}</span>
              <span className="wm-element__name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
