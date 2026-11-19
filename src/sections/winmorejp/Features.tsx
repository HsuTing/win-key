import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    no: "01",
    title: "日本国内での迅速・柔軟な対応",
    body: "大阪拠点を軸に、日本全国の現場へ迅速に対応。スクラップの現地査定や成分サンプリング、金属インゴットの調達相談まで、日本法人としてスムーズに完結します。",
  },
  {
    no: "02",
    title: "台湾・タイ・東南アジアを結ぶ精錬加工ネットワーク",
    body: "中核となる台湾・允基企業の精錬プラントをはじめ、タイ工場や東南アジアの提携加工拠点を活用。品目やロット、処理要件に応じて最適なリサイクル・精錬ルートを選択可能です。",
  },
  {
    no: "03",
    title: "国際法規に準拠した適正処理と安定供給",
    body: "バーゼル条約および各国法令を厳格に遵守。台湾の「甲級廃棄物清除・処理許可」等に基づくトレーサビリティの確保されたルートで、高品質な二次合金・インゴットの安定供給を実現します。",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ background: "#ffffff" }}>
      <div className="wm-sec">
        <SectionHeading eyebrow="WHY WIN MORE" title="私たちの役割・選ばれる理由" />
        <div className="wm-features">
          {FEATURES.map(({ no, title, body }) => (
            <article key={no} className="wm-feature">
              <span className="wm-feature__no">{no}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
