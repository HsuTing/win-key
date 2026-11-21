"use client";
import { FormEvent, useState } from "react";
import { sendForm } from "@/utils/form";
import SectionHeading from "./SectionHeading";

const SOURCE = "winmore_jp";

const TYPES = [
  { value: "ingot", label: "資材購入・調達相談" },
  { value: "scrap", label: "スクラップ・原料の売却・査定" },
  { value: "other", label: "その他" },
];

// The shared Google Form only has name/company/email/tel/content, so the
// inquiry source and type are folded into `content` until dedicated fields exist.
function toSharedForm(form: HTMLFormElement): FormData {
  const data = new FormData(form);
  const types = data
    .getAll("type")
    .map((value) => TYPES.find((t) => t.value === value)?.label ?? value);
  const message = String(data.get("message") ?? "").trim();
  const content = [
    `[${SOURCE}]`,
    `ご相談種別：${types.length ? types.join("、") : "未選択"}`,
    "",
    message || "（内容なし）",
  ].join("\n");

  const payload = new FormData();
  payload.set("name", String(data.get("name") ?? ""));
  payload.set("company", String(data.get("company") ?? ""));
  payload.set("email", String(data.get("email") ?? ""));
  payload.set("tel", String(data.get("tel") ?? "").trim() || "-");
  payload.set("content", content);
  return payload;
}

function Required() {
  return <span className="ct-required">必須</span>;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("loading");
    const result = await sendForm(toSharedForm(form));
    setStatus(result);

    if (result === "done") form.reset();
  }

  return (
    <section id="contact" className="wm-contact">
      <div className="wm-sec wm-sec--row">
        <div className="wm-contact__intro">
          <SectionHeading eyebrow="CONTACT" title="お問い合わせ" />
          <p className="wm-contact__lead">
            スクラップの査定・売却、金属インゴットの調達、廃棄物の処理など、お気軽にご相談ください。担当者より折り返しご連絡いたします。
          </p>
          <div className="wm-contact__phone">
            <span className="wm-contact__phone-label">
              お電話でのお問い合わせ
            </span>
            <a href="tel:05035926022">050-3592-6022</a>
          </div>
        </div>

        <form className="ct-form" onSubmit={handleSubmit}>
          <div className="ct-grid">
            <div className="ct-field">
              <label htmlFor="f-company" className="ct-label">
                貴社名 <Required />
              </label>
              <input id="f-company" name="company" required className="ct-input" />
            </div>
            <div className="ct-field">
              <label htmlFor="f-name" className="ct-label">
                ご担当者様名 <Required />
              </label>
              <input id="f-name" name="name" required className="ct-input" />
            </div>
            <div className="ct-field">
              <label htmlFor="f-email" className="ct-label">
                メールアドレス <Required />
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                required
                className="ct-input"
              />
            </div>
            <div className="ct-field">
              <label htmlFor="f-tel" className="ct-label">
                お電話番号 <span className="ct-optional">任意</span>
              </label>
              <input id="f-tel" name="tel" type="tel" className="ct-input" />
            </div>
          </div>

          <fieldset className="ct-fieldset">
            <legend>ご相談種別（複数選択可）</legend>
            <div className="ct-types">
              {TYPES.map(({ value, label }) => (
                <label key={value} className="ct-type">
                  <input
                    type="checkbox"
                    name="type"
                    value={value}
                    className="ct-check"
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="ct-field">
            <label htmlFor="f-msg" className="ct-label">
              お問い合わせ内容
            </label>
            <textarea id="f-msg" name="message" rows={6} className="ct-textarea" />
          </div>

          <div className="ct-privacy">
            <label htmlFor="f-privacy">
              <input
                id="f-privacy"
                type="checkbox"
                name="privacy_agree"
                required
                className="ct-check"
              />
              <span>
                <a
                  href="https://drive.google.com/file/d/1IcMl2X8V70OSAfM796s52pkesFCW_cyn/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  プライバシーポリシー
                </a>
                に同意する
              </span>
              <Required />
            </label>
            <p>
              ご入力いただいた個人情報は、お問い合わせへの回答および関連するご連絡のみに利用し、法令に基づく場合を除き第三者へ提供することはありません。
            </p>
          </div>

          <div className="ct-actions">
            <button
              type="submit"
              className="ct-submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "送信中…" : "送信する"}
            </button>
            <p className="ct-status-wrap" role="status" aria-live="polite">
              {status === "done" && (
                <span className="ct-status ct-status--done">
                  送信しました。担当者より折り返しご連絡いたします。
                </span>
              )}
              {status === "error" && (
                <span className="ct-status ct-status--error">
                  送信に失敗しました。お手数ですがお電話でお問い合わせください。
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
