import SectionHeading from "./SectionHeading";

// Spec: 再生プラスチック原料 is an optional item that can be switched off.
const SHOW_PLASTIC = true;

const INGOTS = [
  { sym: "Cu", name: "銅", desc: ["高純度再生銅インゴット", "硫酸銅（化成品）"] },
  { sym: "Sn", name: "錫", desc: ["高純度錫インゴット、鉛フリーはんだ向け原料"] },
  {
    sym: "Al",
    name: "アルミニウム",
    desc: ["各種アルミ合金インゴット（ダイカスト用・展伸用）"],
  },
  { sym: "Zn", name: "亜鉛", desc: ["高純度亜鉛インゴット", "酸化亜鉛（化成品）"] },
  { sym: "Ni", name: "ニッケル", desc: ["ニッケル地金、ニッケル含有原料"] },
  { sym: "Pb", name: "鉛", desc: ["再生鉛インゴット"] },
];

const PRECIOUS = [
  { sym: "Au", name: "金" },
  { sym: "Ag", name: "銀" },
  { sym: "Pt", name: "プラチナ" },
  { sym: "Pd", name: "パラジウム" },
];

const RARE = [
  ...PRECIOUS,
  { sym: "Bi", name: "ビスマス" },
  { sym: "Sb", name: "アンチモン" },
  { sym: "Co", name: "コバルト" },
];

function Chips({ items }: { items: { sym: string; name: string }[] }) {
  return (
    <div className="wm-chips">
      {items.map(({ sym, name }) => (
        <div key={sym} className="wm-chip">
          <div className="wm-chip__sym">{sym}</div>
          <div className="wm-chip__name">{name}</div>
        </div>
      ))}
    </div>
  );
}

function Item({
  title,
  desc,
  last,
  children,
}: {
  title: string;
  desc: string;
  last?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={last ? "wm-item wm-item--last" : "wm-item"}>
      <div className="wm-item__title">{title}</div>
      <div className="wm-item__desc">{desc}</div>
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "#f4f6f8" }}>
      <div className="wm-sec">
        <SectionHeading eyebrow="PRODUCTS & SERVICES" title="取扱品目" />
        <div className="wm-cards">
          <div className="wm-card">
            <div className="wm-card__head wm-card__head--supply">
              <span className="wm-card__label">供給｜SUPPLY</span>
              <h3>金属インゴット・製品販売</h3>
              <p>
                自社グループの精錬拠点および国際ネットワークを通じて、高品質な金属原料を安定供給いたします。
              </p>
            </div>
            <div className="wm-card__body">
              <p className="wm-card__group">非鉄金属インゴット</p>
              {INGOTS.map(({ sym, name, desc }) => (
                <div key={sym} className="wm-ingot">
                  <span className="wm-ingot__sym">{sym}</span>
                  <span className="wm-ingot__name">{name}</span>
                  <div className="wm-ingot__desc">
                    {desc.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
              <p className="wm-card__group wm-card__group--after">貴金属地金</p>
              <Chips items={PRECIOUS} />
            </div>
          </div>

          <div className="wm-card">
            <div className="wm-card__head wm-card__head--recycle">
              <span className="wm-card__label">回収｜RECYCLE</span>
              <h3>スクラップ・原料買取・再生加工処理</h3>
              <p>
                工場端材から廃棄物まで、公正な品位査定に基づく買取りと適正な資源化を行います。
              </p>
            </div>
            <div className="wm-card__body">
              <Item
                title="非鉄金属スクラップ"
                desc="銅、銅合金、雑線、アルミ屑、ニッケル屑など"
              />
              <Item
                title="貴金属・レアメタル屑"
                desc="電子基板端材、貴金属含有スクラップ、廃触媒"
              >
                <Chips items={RARE} />
              </Item>
              <div className="wm-focus">
                <div className="wm-focus__head">
                  <span className="wm-focus__title">錫・半田スクラップ</span>
                  <span className="wm-focus__badge">重点買取品目</span>
                </div>
                <div className="wm-focus__desc">
                  錫含有スラッジ・錫ドロス・はんだ滓
                </div>
              </div>
              <Item
                title="産業廃棄物・汚泥"
                desc="メッキスラッジ（銅・非鉄金属含有汚泥）、研磨粉、金属粉屑、炉滓（スラグ）"
              />
              <Item
                title="廃バッテリー、リチウムイオン電池"
                desc="リチウム入りブラックマス"
              />
              {SHOW_PLASTIC && (
                <Item
                  title="再生プラスチック原料"
                  desc="PP、PE などの再生樹脂端材・ペレット"
                  last
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
