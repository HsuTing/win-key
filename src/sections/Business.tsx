"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Image from "next/image";

const BUSINESSES = [
  { name: "金屬", img: "" },
  { name: "塑膠", img: "" },
  { name: "一般、有害事業廢棄物", img: "" },
  { name: "國際貿易", img: "" },
];

const Business = () => {
  const { t } = useTranslation(["business", "translation"]);
  return (
    <Element name="business">
      <Banner
        title={t("translation:business")}
        image="https://picsum.photos/1200/900"
      />
      <div className="container pb-16">
        <Title>{t("業務內容")}</Title>
        <div className="grid gap-4 md:grid-cols-4">
          {BUSINESSES.map(({ name, img }) => (
            <Card
              key={name}
              className="md:text-center"
              title={t(name)}
              image={img}
              isImgCovered
            >
              <p className="whitespace-pre-line text-left">
                {t(`${name}內容`)}
              </p>
            </Card>
          ))}
        </div>
        <Title>{t("永續發展目標 SDGs")}</Title>
        <img src="/images/business/SDGs_and_TWLogo.png" alt="sdgs" />
        <p className="my-8 whitespace-pre-line">
          {t("永續發展目標 SDGs 內容")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <img src="/images/business/sdg06.svg" alt="sdg" />
          <img src="/images/business/sdg07.svg" alt="sdg" />
          <img src="/images/business/sdg08.svg" alt="sdg" />
          <img src="/images/business/sdg09.svg" alt="sdg" />
          <img src="/images/business/sdg11.svg" alt="sdg" />
          <img src="/images/business/sdg12.svg" alt="sdg" />
          <img src="/images/business/sdg13.svg" alt="sdg" />
          <img src="/images/business/sdg17.svg" alt="sdg" />
        </div>

        <Title>{t("營業執照")}</Title>
      </div>
    </Element>
  );
};

export default React.memo(Business);
