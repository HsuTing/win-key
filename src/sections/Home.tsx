"use client";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import Icons from "@/components/Icons";
import Image from "next/image";
import { Link } from "react-scroll";

const Home = () => {
  const { t } = useTranslation(["home"]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
    "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
  ];

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Element name="home">
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#005e9e]">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/162568/factory-steel-mill-industry-162568.jpeg')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-left">
                {t("title")}
              </h2>

              <div className="max-w-3xl mb-12">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed text-left">
                  {t("subtitle").split("\n").map((line, index, lines) => (
                    <React.Fragment key={index}>
                      {line}

                      {index < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="contact"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button className="bg-[#005e9e] hover:bg-[#004a7f] text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <span>{t("cta")}</span>
                    <Icons.ArrowRight className="w-5 h-5" />
                  </button>
                </Link>

                <Link
                  to="about"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors backdrop-blur-sm bg-transparent">
                    {t("learnMore")}
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="relative w-full max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {t("slideTitle")}
                </h3>

                <div
                  className="relative w-full h-80 rounded-2xl overflow-hidden"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))",
                    background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
                  }}
                >
                  <div className="relative z-10 w-full h-full bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0">
                        <Image
                          src={slides[currentSlide]}
                          alt={t(`slide.${currentSlide}.title`)}
                          className="w-full h-full object-cover transition-opacity duration-500"
                          fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <Icons.ChevronLeft className="w-6 h-6" />
                      </button>

                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <Icons.ChevronRight className="w-6 h-6" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentSlide
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t(`slides.${currentSlide}.title`)}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {t(`slides.${currentSlide}.description`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <Icons.ChevronDown className="w-8 h-8" />
        </div>
      </section>
    </Element>
  );
};

export default React.memo(Home);
