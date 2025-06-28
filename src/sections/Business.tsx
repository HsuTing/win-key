"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Icons from "@/components/Icons";

const BUSINESSES = [
  {
    name: "金屬",
    image:
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [{ group: "metal" }, { group: "precious" }, { group: "rare" }],
  },
  {
    name: "塑膠",
    image:
      "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: true,
    items: [{}, {}, {}],
  },
  {
    name: "一般、有害事業廢棄物",
    image:
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [{}, {}, {}, {}],
  },
  {
    name: "再生資源國際貿易",
    image:
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800",
    items: [{}, {}, {}, {}],
  },
];

const Business = () => {
  const { t } = useTranslation(["business", "translation"]);

  return (
    <>
      <Banner
        title={t("translation:business")}
        image="https://picsum.photos/1200/900"
      />

      <Element name="business-content">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title>{t("translation:business-content")}</Title>

            <div className="grid md:grid-cols-2 gap-8">
              {BUSINESSES.map(({ name, image, items }, index) => (
                <div
                  key={name}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group h-96"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/80"></div>
                  <div className="relative p-8 text-white h-full flex flex-col">
                    <h3 className="text-3xl font-bold mb-6">
                      {t(`business-content.${index}.name`)}
                    </h3>
                    <p className="mb-8 text-blue-100 text-lg">
                      {t(`business-content.${index}.description`)}
                    </p>

                    <div className="space-y-6 flex-1">
                      {items.map((item, itemIndex) =>
                        !("group" in item) ? (
                          <div key={itemIndex} className="flex items-center">
                            <Icons.CheckCircle className="w-6 h-6 text-blue-300 mr-4" />
                            <span className="text-blue-100 text-lg">
                              {t(
                                `business-content.${index}.items.${itemIndex}.title`,
                              )}
                            </span>
                          </div>
                        ) : (
                          <div
                            key={item.group}
                            className={`group/${item.group}`}
                          >
                            <div className="flex items-center justify-between cursor-pointer hover:text-white transition-colors">
                              <div className="flex items-center">
                                <Icons.CheckCircle className="w-5 h-5 text-blue-300 mr-3" />
                                <h4 className="font-semibold text-blue-100 text-xl">
                                  {t(
                                    `business-content.${index}.items.${itemIndex}.title`,
                                  )}
                                </h4>
                              </div>
                              <Icons.ChevronDown
                                className={`w-5 h-5 text-blue-300 group-hover/${item.group}:rotate-180 transition-transform duration-300`}
                              />
                            </div>

                            <div
                              className={`max-h-0 overflow-hidden group-hover/${item.group}:max-h-20 transition-all duration-300 ease-in-out`}
                            >
                              <p className="text-base text-blue-200 pl-8 pt-2 border-l-2 border-blue-400 ml-8">
                                {t(
                                  `business-content.${index}.items.${itemIndex}.description`,
                                )}
                              </p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      <Title>{t("永續發展目標 SDGs")}</Title>

      <Title>{t("營業執照")}</Title>
    </>
  );
};

export default React.memo(Business);
