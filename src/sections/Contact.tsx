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
  const { t } = useTranslation(["contact", "translation"]);
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
      alert(t("表單錯誤訊息"));
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
          {t("引言")}
          <a href="tel:+0492522313" className="inline-flex">
            <Icons.Phone className="mr-2 aspect-square w-4" />
            {t("translation:phone")}
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
          <Input name="name" label={t("姓名")} required />
          <Input name="company" label={t("公司名稱")} />
          <Input name="email" label="email" type="email" required />
          <Input name="tel" label={t("電話")} type="tel" required />
          <Textarea name="content" label={t("聯繫內容")} required />
          {/* <Input id={`${id}-file`} type='file' label={t('上傳附件')} /> */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id={`${id}-policy`}
              className="mr-2 w-4 h-4"
              required
            />
            <label htmlFor={`${id}-policy`} className="text-sm">
              {t("同意隱私權政策")}
            </label>
          </div>
          <button type="submit" className="btn">
            {t("送出")}
          </button>

          {status === "loading" && (
            <div className="absolute inset-0 flex justify-center items-center bg-white/60">
              <div className="loading-circle w-20 border-8" />
            </div>
          )}

          {status === "done" && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white/60">
              <Icons.Check className="mb-4 w-20 text-green-600" />
              {t("表單已成功送出")}
            </div>
          )}
        </form>
      </div>
    </Element>
  );
};

export default React.memo(Contact);
