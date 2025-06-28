"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Icons from "@/components/Icons";
import ceo from "@/images/about/ceo.jpg";
import signature from "@/images/about/signature.png";

const AFFILIATED_COMPANIES = [
  {
    name: "允貿環保科技有限公司",
    logo: "",
    phone: "049-2260388",
    fax: "049-2260398",
    vat: "90151719",
  },
  { name: "允興投資股份有限公司", vat: "90142450" },
  { name: "允興(泰國)股份有限公司" },
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
        <Title>{t("translation:history")}</Title>
        <p className="whitespace-pre-line">{t("歷史沿革內容")}</p>
      </Element>

      <Element name="affiliates">
        <Title>{t("translation:affiliates")}</Title>
        <div className="grid gap-4 md:grid-cols-3">
          {AFFILIATED_COMPANIES.map(({ name, logo, phone, fax, vat }) => (
            <Card
              key={name}
              image={logo}
              imgPlaceholder={<Icons.Briefcase className="p-6" />}
              title={t(name)}
            >
              <p>{t(`${name}地址`)}</p>
              {phone && (
                <p>
                  TEL <a href={`tel:${phone}`}>{t(`${name}電話`)}</a>
                </p>
              )}
              {fax && (
                <p>
                  FAX <a href={`fax:${fax}`}>{t(`${name}傳真`)}</a>
                </p>
              )}
              {vat && (
                <p>
                  {t("統一編號")} {vat}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Element>
    </>
  );
};

export default React.memo(About);
