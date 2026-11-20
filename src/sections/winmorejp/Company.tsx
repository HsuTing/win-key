import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="co-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const pending = <span className="co-pending">　（取得予定）</span>;

const ROWS: { label: string; value: ReactNode; mono?: boolean }[] = [
  { label: "会社名", value: "允貿日本株式会社（WIN MORE JAPAN CO., LTD.）" },
  { label: "所在地", value: "〒554-0023 大阪府大阪市此花区春日出南2-3-7" },
  { label: "法人番号", value: "8120001281826", mono: true },
  {
    label: "許認可・届出",
    value: (
      <List
        items={[
          "古物商　大阪府公安委員会　第62105R080651号",
          "金属くず商　大阪府公安委員会　第672号",
          <>特定金属買受業{pending}</>,
          <>産業廃棄物収集運搬業（積替え保管を含む）{pending}</>,
        ]}
      />
    ),
  },
  {
    label: "役員",
    value: (
      <div className="co-stack">
        <span>海外代表取締役会長　荘 百慶</span>
        <span>代表取締役社長　楊 寰霖</span>
      </div>
    ),
  },
  {
    label: "連絡先",
    value: (
      <div className="co-stack">
        <span>
          TEL：<a href="tel:05035926022">050-3592-6022</a>
        </span>
        <span>
          EMAIL：<a href="mailto:winmorejp@win-key.co">winmorejp@win-key.co</a>
        </span>
      </div>
    ),
  },
  {
    label: "事業内容",
    value: (
      <List
        items={[
          "非鉄金属インゴット（銅・錫・アルミ・亜鉛等）の輸出入及び国内販売",
          "非鉄金属スクラップ・貴金属原料の売買及び輸出入",
          "各種産業廃棄物・再生資源の有効利用コンサルティング",
          "台湾・允基（ウィンキー）の日本総代理業務",
        ]}
      />
    ),
  },
  {
    label: "関連会社",
    value: (
      <List
        items={[
          <a key="win-key" href="/ja">
            台湾・允基企業有限公司（Win Key Recycle Industrial Corp.）
          </a>,
          "台湾・允興投資有限公司（Win Hsing Investment Co., Ltd.）",
          "台湾・允貿環保科技有限公司（Win More Environmental Protection Technology Co., Ltd.）",
          "タイ・Win Sing（Thailand）Co., Ltd.",
          "Win Key Global Holdings Co., Ltd.",
        ]}
      />
    ),
  },
];

export default function Company() {
  return (
    <section id="company" style={{ background: "#f4f6f8" }}>
      <div className="wm-sec wm-sec--row">
        <div className="wm-company__title">
          <SectionHeading eyebrow="COMPANY" title="会社概要" />
        </div>
        <div className="wm-company__body">
          <table className="co-table">
            <tbody>
              {ROWS.map(({ label, value, mono }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td className={mono ? "wm-mono" : undefined}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
