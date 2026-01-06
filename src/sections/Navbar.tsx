"use client";
import React, { useRef, useCallback } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { scroller } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Icons from "@/components/Icons";
import logo from "@/images/logo.jpg";

const icons = {
  "ceo-message": Icons.Users,
  "company-profile": Icons.Building,
  history: Icons.History,
  affiliates: Icons.Network,
  "business-content": Icons.Briefcase,
  sdgs: Icons.Leaf,
  license: Icons.Certificate,
};

const Navbar = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const SECTIONS = [
    {
      section: "about",
      items: ["ceo-message", "company-profile", "history", "affiliates"],
    },
    {
      section: "business",
      items: ["business-content", "sdgs", "license"],
    },
    {
      section: "contact",
    },
    {
      section: "recruit",
    },
  ];
  const LANGUAGE = [
    {
      title: "English",
      code: "en",
    },
    {
      title: "中文",
      code: "zh-TW",
    },
    {
      title: "日本語",
      code: "ja",
    },
  ] as const;

  function switchLang(lang: (typeof LANGUAGE)[number]["code"]) {
    history.replaceState(null, "", `/${lang}`);
    i18n.changeLanguage(lang);
  }

  const [secionOption, setSecionOption] = React.useState<null | string>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const goTo = useCallback(
    (target, disableScroll) => {
      if (pathname !== `/${i18n.language}`) router.push(`/${i18n.language}`);

      if (disableScroll) return;

      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          offset: -80,
          duration: 500,
        });
      }, 500);
    },
    [pathname, i18n],
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pm-dark border-gray-200 z-50 drop-shadow-lg">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-20 h-20 cursor-pointer"
          onClick={() => goTo("home", false)}
        >
          <Image src={logo} alt="logo" fill />
        </div>

        <div
          className="md:inline-flex hidden items-start flex-col justify-center ursor-pointer ml-4 cursor-pointer"
          onClick={() => goTo("home", false)}
        >
          <span className="text-3xl font-bold text-white hover:text-white/90 transition-colors">
            允基企業有限公司
          </span>
          <span className="text-sm text-white/80 font-medium">
            Win Key Recycle Industrial Corp.
          </span>
        </div>

        <div className="grow" />

        {SECTIONS.map(({ section, items }) => (
          <div
            key={section}
            className="sm:inline-flex hidden p-4 content-center items-center flex-wrap border-b-4 border-b-transparent !text-pm-contrast hover:bg-pm-contrast/50 transition-colors ease-linear capitalize cursor-pointer relative"
            onMouseEnter={() => {
              if (!items) return;

              clearTimeout(timeoutRef.current);
              setSecionOption(section);
            }}
            onMouseLeave={() => {
              if (!items) return;

              clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(setSecionOption, 300, null);
            }}
            onClick={() => {
              if (section === "recruit")
                router.push(`/${section}/${i18n.language}`);
              else goTo(section, !!items);
            }}
          >
            {t(section)}

            {items && (
              <Icons.ChevronDown
                className={`w-4 h-4 transition-transform ${section === secionOption ? "rotate-180" : ""}`}
              />
            )}

            {section === secionOption && (
              <div
                className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px] z-50"
                onMouseEnter={() => {
                  clearTimeout(timeoutRef.current);
                  setSecionOption(section);
                }}
                onMouseLeave={() => {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = setTimeout(setSecionOption, 300, null);
                }}
              >
                {items?.map((item) => {
                  const Icon = icons[item];

                  return (
                    <div
                      key={item}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#005e9e]/10 transition-colors whitespace-nowrap"
                      onClick={() => {
                        setSecionOption(null);
                        goTo(item, false);
                      }}
                    >
                      <Icon className="w-4 h-4 text-[#005e9e]" />

                      <span>{t(item)}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        <button className="group relative p-4 w-16 h-20 !bg-transparent">
          <Icons.Globe className="text-pm-contrast cursor-pointer" />
          <div className="hidden group-hover:block absolute right-0 my-4 w-44 overflow-hidden bg-white z-10 divide-y divide-gray-100 rounded shadow">
            {LANGUAGE.map(({ title, code }) => (
              <a
                key={code}
                href={`/${code}`}
                className={cx(
                  "block px-4 py-2 text-pm-dark hover:bg-gray-100",
                  i18n.language === code ? "font-bold" : "",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  switchLang(code);
                }}
              >
                {title}
              </a>
            ))}
          </div>
        </button>

        <button className="sm:hidden block group relative p-4 w-16 h-20 !bg-transparent">
          <Icons.Menu className="text-pm-contrast cursor-pointer" />

          <div className="hidden group-hover:block absolute right-0 my-4 w-44 overflow-hidden bg-white z-10 divide-y divide-gray-100 rounded shadow">
            {SECTIONS.map(({ section, items }) =>
              !items ? (
                <div
                  key={section}
                  className="flex items-center space-x-3 px-4 py-2 text-pm-dark whitespace-nowrap"
                  onClick={() => {
                    if (section === "recruit")
                      router.push(`/${section}/${i18n.language}`);
                    else goTo(section, false);
                  }}
                >
                  <span>{t(section)}</span>
                </div>
              ) : (
                <div
                  key={section}
                  className={
                    {
                      about: "group/about",
                      business: "group/business",
                    }[section]
                  }
                >
                  <div className="flex items-center justify-between cursor-pointer block px-4 py-2 text-pm-dark">
                    <div>{t(section)}</div>

                    <Icons.ChevronDown
                      className={
                        {
                          about:
                            "w-5 h-5 group-hover/about:rotate-180 transition-transform duration-300",
                          business:
                            "w-5 h-5 group-hover/business:rotate-180 transition-transform duration-300",
                        }[section]
                      }
                    />
                  </div>

                  <div
                    className={
                      {
                        about:
                          "flex flex-col max-h-0 overflow-hidden group-hover/about:max-h-80 transition-all duration-300 ease-in-out",
                        business:
                          "flex flex-col max-h-0 overflow-hidden group-hover/business:max-h-80 transition-all duration-300 ease-in-out",
                      }[section]
                    }
                  >
                    {items.map((item) => {
                      const Icon = icons[item];

                      return (
                        <div
                          key={item}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#005e9e]/10 transition-colors whitespace-nowrap"
                          onClick={() => goTo(item, false)}
                        >
                          <Icon className="w-4 h-4 text-[#005e9e]" />

                          <span>{t(item)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ),
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
