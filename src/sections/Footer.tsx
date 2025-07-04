"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const INFO = [
  { title: "ceo", info: "莊百慶" },
  { title: "TEL", info: "049-2522313", href: "tel:0492522313" },
  { title: "FAX", info: "049-2510477", href: "fax:049-2510477" },
  {
    title: "Email",
    info: "WINSINGJP@gmail.com",
    href: "mailto:winsingjp@gmail.com",
  },
  { title: "taxId", info: "016273391" },
];

const Footer = () => {
  const { t } = useTranslation(["footer", "translation"]);
  return (
    <footer className="bg-zinc-900 text-pm-contrast">
      <div className="container py-16 grid md:grid-cols-2 gap-x-16 gap-y-4">
        <div>
          <h2 className="mb-4 font-bold uppercase">{t("translation:name")}</h2>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            {INFO.map(({ title, info, href }) => {
              return (
                <React.Fragment key={title}>
                  <span className="opacity-75 font-light">{t(title)}</span>
                  {href ? (
                    <a className="!text-inherit hover:underline" href={href}>
                      {t(info)}
                    </a>
                  ) : (
                    <span>{t(info)}</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <iframe
          className="min-h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.4947949811576!2d120.63109990000001!3d24.0136109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693a055371193b%3A0x214c46d92e41cfa9!2zNTAy5b2w5YyW57ij6Iqs5ZyS6YSJ6Iqs6I2J6Lev5LqM5q61MjA16Jmf!5e0!3m2!1szh-TW!2stw!4v1726949930276!5m2!1szh-TW!2stw"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="py-8 bg-pm text-center">
        ©Win Key Recycle Industry LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);
