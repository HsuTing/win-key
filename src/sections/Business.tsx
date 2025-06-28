"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Icons from "@/components/Icons";
import Image from "next/image";
import sdg from "@/images/business/SDGs_and_TWLogo.png";

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

const FOCUSED_SDGS = [
  {
    number: 6,
    color: "#26BDE2",
  },
  {
    number: 7,
    color: "#FCC30B",
  },
  {
    number: 8,
    color: "#A21942",
  },
  {
    number: 9,
    color: "#FD6925",
  },
  {
    number: 11,
    color: "#FD9D24",
  },
  {
    number: 12,
    color: "#BF8B2E",
  },
  {
    number: 13,
    color: "#3F7E44",
  },
  {
    number: 17,
    color: "#19486A",
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
                            className={
                              {
                                metal: "group/metal",
                                precious: "group/precious",
                                rare: "group/rare",
                              }[item.group]
                            }
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
                                className={
                                  {
                                    metal:
                                      "w-5 h-5 text-blue-300 group-hover/metal:rotate-180 transition-transform duration-300",
                                    precious:
                                      "w-5 h-5 text-blue-300 group-hover/precious:rotate-180 transition-transform duration-300",
                                    rare: "w-5 h-5 text-blue-300 group-hover/rare:rotate-180 transition-transform duration-300",
                                  }[item.group]
                                }
                              />
                            </div>

                            <div
                              className={
                                {
                                  metal:
                                    "max-h-0 overflow-hidden group-hover/metal:max-h-20 transition-all duration-300 ease-in-out",
                                  precious:
                                    "max-h-0 overflow-hidden group-hover/precious:max-h-20 transition-all duration-300 ease-in-out",
                                  rare: "max-h-0 overflow-hidden group-hover/rare:max-h-20 transition-all duration-300 ease-in-out",
                                }[item.group]
                              }
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

      <Element name="sdgs">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title>{t("translation:sdgs")}</Title>

            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                <Image
                  src={sdg}
                  alt="SDGs"
                  className="w-full h-auto rounded-lg"
                  width={903}
                  height={520}
                />

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <p key={index} className={index === 0 ? "" : "mt-6"}>
                      {t(`sdgs.description.${index}`)}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {t("sdgs.target")}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {FOCUSED_SDGS.map((sdg) => (
                  <div
                    key={sdg.number}
                    className={
                      "group/sdg relative h-48 w-full perspective-1000"
                    }
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover/sdg:rotate-y-180`}
                    >
                      <div
                        className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-6xl cursor-pointer"
                        style={{ backgroundColor: sdg.color }}
                      >
                        <div className="text-center">
                          <div className="text-8xl font-black mb-2">
                            {sdg.number}
                          </div>
                          <div className="text-sm font-medium px-2 leading-tight">
                            {t(`sdgs.${sdg.number}.title`)}
                          </div>
                        </div>
                      </div>

                      {/* Back Side - Description */}
                      <div
                        className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-lg p-4 flex items-center justify-center text-white"
                        style={{ backgroundColor: sdg.color }}
                      >
                        <p className="text-sm leading-relaxed text-center font-medium">
                          {t(`sdgs.${sdg.number}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="license">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title>{t("translation:license")}</Title>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative" style={{ aspectRatio: "210/297" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 rounded-lg shadow-2xl border-8 border-amber-200">
                    <div className="absolute inset-4 border-4 border-double border-amber-400 rounded-md">
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
                      <div className="bg-white rounded-lg shadow-inner p-6 w-full h-full flex flex-col items-center justify-center border-2 border-gray-200">
                        <Icons.FileText className="h-16 w-16 text-amber-600 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          營業執照
                        </h4>
                        <p className="text-gray-600 text-center text-sm mb-4">
                          請放置 A4 尺寸營業執照
                        </p>
                        <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                          <span className="text-gray-400 text-sm">
                            執照影像區域
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative" style={{ aspectRatio: "210/297" }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 rounded-lg shadow-2xl border-8 border-amber-200">
                    <div className="absolute inset-4 border-4 border-double border-amber-400 rounded-md">
                      <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-300 rotate-45 border border-amber-400"></div>
                    </div>

                    {/* Content area */}
                    <div className="h-full flex flex-col items-center justify-center p-8 relative z-10">
                      <div className="bg-white rounded-lg shadow-inner p-6 w-full h-full flex flex-col items-center justify-center border-2 border-gray-200">
                        <Icons.FileText className="h-16 w-16 text-amber-600 mb-4" />
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          相關證照
                        </h4>
                        <p className="text-gray-600 text-center text-sm mb-4">
                          請放置 A4 尺寸相關證照
                        </p>
                        <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                          <span className="text-gray-400 text-sm">
                            證照影像區域
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default React.memo(Business);
