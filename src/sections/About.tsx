"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Icons from "@/components/Icons";
import ceo from "@/images/about/ceo.jpg";
import signature from "@/images/about/signature.png";

const AFFILIATED_COMPANIES = [
  {
    name: "允貿環保科技有限公司",
    Icon: Icons.Globe,
    iconClassName: "h-8 w-8 text-green-600 mr-3",
  },
  {
    name: "允興投資股份有限公司",
    Icon: Icons.Building,
    iconClassName: "h-8 w-8 text-blue-600 mr-3",
  },
  {
    name: "允興(泰國)股份有限公司",
    Icon: Icons.Users,
    iconClassName: "h-8 w-8 text-purple-600 mr-3",
    noFax: true,
  },
];

const CONTACTS = [Icons.Phone, Icons.Phone, Icons.Mail];

const About = () => {
  const { t } = useTranslation(["about", "translation"]);

  return (
    <>
      <Banner
        title={t("translation:about")}
        image="https://picsum.photos/1200/900"
      />

      <Element name="ceo-message">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title>{t("translation:ceo-message")}</Title>

            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-[#005e9e]/10 to-[#005e9e]/5 rounded-3xl p-6 h-full flex items-center">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full">
                    <div className="aspect-[4/5]">
                      <Image
                        src={ceo}
                        alt={t("ceoMessage.ceoName")}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t("ceoMessage.ceoName")}
                      </h3>
                      <p className="text-gray-600">
                        {t("ceoMessage.ceoTitle")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-6 relative h-full flex flex-col justify-center">
                <div className="bg-gray-50 p-8 rounded-xl relative">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t("ceoMessage.content")}
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t("ceoMessage.content2")}
                  </p>

                  <div className="border-l-4 border-[#005e9e] pl-6 mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t("ceoMessage.content3")}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Image
                      src={signature}
                      alt={t("ceoMessage.ceoName")}
                      className="h-36 w-auto object-contain opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="company-profile">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title>{t("translation:company-profile")}</Title>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50 w-32">
                          {t("companyProfile.companyInfoTitle.name")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {t("companyProfile.companyInfo.name")}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50">
                          {t("companyProfile.companyInfoTitle.established")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {t("companyProfile.companyInfo.established")}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50">
                          {t("companyProfile.companyInfoTitle.address")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {t("companyProfile.companyInfo.address")}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50">
                          {t("companyProfile.companyInfoTitle.representative")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {t("companyProfile.companyInfo.representative")}
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50 align-top">
                          {t("companyProfile.companyInfoTitle.business")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <div className="space-y-1">
                            {Array.from({ length: 4 }).map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <Icons.CheckCircle className="w-4 h-4 text-[#005e9e] flex-shrink-0" />
                                <span>
                                  {t(
                                    `companyProfile.companyInfo.business.${index}`,
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50 align-top">
                          {t("companyProfile.companyInfoTitle.contact")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          <div className="space-y-2">
                            {Array.from({ length: 3 }).map((_, index) => {
                              const Icon = CONTACTS[index];

                              return (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
                                  <Icon className="w-4 h-4 text-[#005e9e] flex-shrink-0" />
                                  <span className="font-mono text-sm">
                                    {t(
                                      `companyProfile.companyInfo.contact.${index}`,
                                    )}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 bg-gray-50">
                          統一編號
                        </td>
                        <td className="px-6 py-4 text-gray-700 font-mono">
                          {t("companyProfile.companyInfo.taxId")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="history">
        <section className="py-20 bg-white">
          <Title>{t("translation:history")}</Title>

          <p className="whitespace-pre-line">{t("歷史沿革內容")}</p>
        </section>
      </Element>

      <Element name="affiliates">
        <section className="py-20 bg-gray-50">
          <Title>{t("translation:affiliates")}</Title>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AFFILIATED_COMPANIES.map(
                ({ name, Icon, iconClassName, noFax }, index) => (
                  <div key={name} className="space-y-4">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-h-[280px] flex flex-col">
                      <div className="flex items-center mb-4">
                        <Icon className={iconClassName} />

                        <h3 className="text-xl font-semibold text-gray-900">
                          {t(`affiliates.${index}.name`)}
                        </h3>
                      </div>
                      <div className="space-y-3 text-gray-600 flex-grow">
                        <div className="flex items-start">
                          <Icons.MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                          <div className="flex items-center gap-2">
                            <span>{t(`affiliates.${index}.address`)}</span>
                            <a
                              href="https://maps.google.com/?q=彰化縣芬園鄉芬園村芬草路二段205號2樓"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Icons.ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Icons.Phone className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{t(`affiliates.${index}.phone`)}</span>
                        </div>
                        {!noFax && (
                          <div className="flex items-center">
                            <Icons.Mail className="h-5 w-5 text-gray-400 mr-2" />
                            <span>{t(`affiliates.${index}.fax`)}</span>
                          </div>
                        )}
                        <div className="text-sm text-gray-500">
                          {t(`affiliates.${index}.taxId`)}
                        </div>
                      </div>
                    </div>
                    {/* Photo Container */}
                    <div className="bg-gray-100 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-sm">照片區域</div>
                        <div className="text-xs mt-1">允興投資股份有限公司</div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default React.memo(About);
