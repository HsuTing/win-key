"use client";

import React from "react";
import Title from "@/components/Title";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Recruit = () => {
  const { t, i18n } = useTranslation(["recruit", "translation"]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title>{t("translation:recruit")}</Title>
      </div>

      <div className="max-w-3xl mx-auto mb-12 px-4">
        <p className="text-xl leading-relaxed text-left">
          {t("content")
            .split("\n")
            .map((line, index, lines) => (
              <React.Fragment key={index}>
                {line}

                {index < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
        </p>
      </div>
    </section>
  );
};

export default React.memo(Recruit);
