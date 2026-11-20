import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    title: "ご相談・現地確認",
    desc: "スクラップの買取り・査定、または必要とされる金属インゴットの規格・希望数量をヒアリング。",
  },
  {
    title: "国際物流・通関手配",
    desc: "バーゼル条約や各国の法令を遵守し、日本とアジア拠点間の安全な輸出入・通関手続きを代行・管理。",
  },
  {
    title: "アジア各拠点での適正精錬・加工",
    desc: "台湾（允基企業）の甲級プラントやタイ・東南アジアの自社／提携工場にて、高度な選別・溶融・精錬を実施。",
  },
  {
    title: "高品位インゴットの製造・品質管理",
    desc: "厳格な成分分析と品質検査を経て、国際規格・JIS規格に適合した金属インゴット・合金を製造。",
  },
  {
    title: "日本国内及びグローバル供給",
    desc: "製造されたインゴットを允貿日本を通じて日本国内メーカーへ納品、またはグローバル市場へ供給。",
  },
];

const BASES = [
  {
    title: "台湾精錬拠点（允基企業）",
    main: "甲級廃棄物清除・処理ライセンス保有",
    desc: "大型反射炉・湿式精錬設備・二次合金製造",
  },
  {
    title: "タイ・東南アジア提携拠点",
    main: "允興（タイ）自社工場 ＆ 提携プラント",
    desc: "破砕選別・溶融・インゴット成型",
  },
];

export default function Flow() {
  return (
    <section id="flow" style={{ background: "#ffffff" }}>
      <div className="wm-sec">
        <SectionHeading
          eyebrow="CIRCULAR SUPPLY CHAIN"
          title="日・アジア循環リサイクル＆サプライチェーン"
        />

        <div className="fl">
          <div className="fl-rail">
            <span className="fl-tag fl-tag--recycle">
              RECYCLE<span className="fl-tag__arrow"> ↓</span>
            </span>
            <div className="fl-line fl-line--recycle" />
            <div className="fl-box fl-box--recycle">
              <div className="fl-box__title">スクラップ買取り</div>
              <div className="fl-box__desc">工場端材・廃棄物</div>
            </div>
            <div className="fl-line fl-line--recycle" />
            <span className="fl-arrow fl-arrow--recycle" aria-hidden="true">
              ▼
            </span>
          </div>

          <div className="fl-center">
            <div className="fl-box fl-box--recycle fl-box--inline">
              <div className="fl-box__title">スクラップ買取り</div>
              <div className="fl-box__desc">工場端材・廃棄物</div>
            </div>
            <div className="fl-stem fl-stem--inline" />
            <div className="fl-hq">
              <div className="fl-hq__name">允貿日本株式会社（大阪窓口）</div>
              <div className="fl-hq__sub">台湾・允基企業 日本総代理</div>
              <div className="fl-hq__roles">
                スクラップ現地査定・回収 ｜ 金属インゴット販売窓口
              </div>
            </div>
            <div className="fl-stem fl-stem--tall" />
            <div className="fl-logistics">
              <div className="fl-logistics__title">通関・国際物流手配</div>
              <div className="fl-logistics__desc">
                バーゼル条約・各国法規準拠
              </div>
            </div>
            <div className="fl-stem" />
            <div className="fl-bases">
              {BASES.map(({ title, main, desc }) => (
                <div key={title} className="fl-base">
                  <div className="fl-base__title">{title}</div>
                  <div className="fl-base__body">
                    <div className="fl-base__main">{main}</div>
                    <div className="fl-base__desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="fl-stem" />
            <div className="fl-output">
              高度選別・溶融・精錬加工 → 高品位インゴット製造
            </div>
            <div className="fl-stem fl-stem--inline" />
            <div className="fl-box fl-box--supply fl-box--inline">
              <div className="fl-box__title">高品位インゴット</div>
              <div className="fl-box__desc">銅・錫・アルミ・亜鉛</div>
            </div>
          </div>

          <div className="fl-rail">
            <span className="fl-arrow fl-arrow--supply" aria-hidden="true">
              ▲
            </span>
            <div className="fl-line fl-line--supply" />
            <div className="fl-box fl-box--supply">
              <div className="fl-box__title">高品位インゴット</div>
              <div className="fl-box__desc">銅・錫・アルミ・亜鉛</div>
            </div>
            <div className="fl-line fl-line--supply" />
            <span className="fl-tag fl-tag--supply">
              SUPPLY<span className="fl-tag__arrow"> ↑</span>
            </span>
          </div>
        </div>

        <ol className="fl-steps">
          {STEPS.map(({ title, desc }, i) => (
            <li key={title} className="fl-step">
              <span className="fl-step__no">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <span className="fl-step__title">{title}</span>
              <span className="fl-step__desc">{desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
