"use client";
import React, { FormEvent, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Icons from "@/components/Icons";
import { sendForm } from "@/utils/form";
import Input from "@/components/inputs/Input";
import Textarea from "@/components/inputs/Textarea";

const Contact = () => {
  const { t, i18n } = useTranslation(["contact", "translation"]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const id = useId();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setStatus("loading");

    const result = await sendForm(new FormData(e.target as HTMLFormElement));
    setStatus(result);

    if (result === "error") {
      alert(t("error"));
    }
  }

  return (
    <Element name="contact">
      <Banner
        title={t("translation:contact")}
        image="https://picsum.photos/1200/900"
      />
      <div
        className="container py-16
        flex flex-col lg:flex-row gap-16 lg:items-stretch"
      >
        <div className="flex flex-col gap-2 flex-1">
          {t("introduction")}
          <a href="tel:+0492522313" className="inline-flex">
            <Icons.Phone className="mr-2 aspect-square w-4" />
            +0492522313
          </a>
          <a href="mailto:winsingjp@gmail.com" className="inline-flex">
            <Icons.Mail className="mr-2 aspect-square w-4" />
            winsingjp@gmail.com
          </a>
        </div>
        <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded lg:w-1 lg:h-auto" />
        <form
          className="relative flex flex-col gap-6 lg:basis-2/3"
          onSubmit={handleSubmit}
        >
          <Input name="name" label={t("name")} required />
          <Input name="company" label={t("companyName")} />
          <Input name="email" label={t("email")} type="email" required />
          <Input name="tel" label={t("phone")} type="tel" required />
          <Textarea name="content" label={t("content")} required />
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`${id}-policy`}
              className="mr-2 w-4 h-4"
              required
            />

            <label htmlFor={`${id}-policy`} className="cursor-pointer select-none">
              {t("agreePolicy.0")}
            </label>

            <a
              href={
                {
                  "zh-TW":
                    "https://docs.google.com/document/d/1e-InhtnJAp-CDI7vWnV-aG9nA_Y2mvmw-X-_2agiAqI/edit?tab=t.0",
                  en: "https://docs.google.com/document/d/1e-InhtnJAp-CDI7vWnV-aG9nA_Y2mvmw-X-_2agiAqI/edit?tab=t.1vtjbz1njexi",
                  ja: "https://docs.google.com/document/d/1e-InhtnJAp-CDI7vWnV-aG9nA_Y2mvmw-X-_2agiAqI/edit?tab=t.og2yboq7z0m",
                }[i18n.language]
              }
              target="_blank"
            >
              {t("agreePolicy.1")}
            </a>
          </div>
          <button type="submit" className="btn">
            {t("submit")}
          </button>

          {status === "loading" && (
            <div className="absolute inset-0 flex justify-center items-center bg-white/60">
              <div className="loading-circle w-20 border-8" />
            </div>
          )}

          {status === "done" && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/60">
              <Icons.Check className="mb-4 w-20 text-green-600" />
              {t("success")}
            </div>
          )}
        </form>
      </div>
    </Element>
  );
};

export default React.memo(Contact);
