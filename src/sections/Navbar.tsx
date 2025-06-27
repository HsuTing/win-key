'use client'
import React from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Icons from '@/components/Icons'
import logo from '@/images/logo.jpg'

const Navbar = () => {
  const { t } = useTranslation()

  const SECTIONS = ['about', 'business', 'contact']
  const LANGUAGE = [
    {
      title: 'English',
      code: 'en',
    },
    {
      title: '中文',
      code: 'zh-TW',
    },
    {
      title: '日本語',
      code: 'ja',
    },
  ] as const

  function switchLang(lang: (typeof LANGUAGE)[number]['code']) {
    history.replaceState(null, '', `/${lang}`)
    i18n.changeLanguage(lang)
  }

  return (
    <nav className='sticky top-0 bg-pm-dark border-gray-200 z-50 drop-shadow-lg'>
      <div className='flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Link
        className='relative w-20 h-20 cursor-pointer'
        to='home'
        smooth={true}
        offset={-80}
        duration={500}
      >
        <Image src={logo} alt='logo' fill />
      </Link>

      <Link
        className='inline-flex items-start flex-col justify-center ursor-pointer ml-4'
        to='home'
        smooth={true}
        offset={-80}
        duration={500}
      >
        <span className="text-3xl font-bold text-white hover:text-white/90 transition-colors">允基企業有限公司</span>
        <span className="text-sm text-white/80 font-medium">Win Key Recycle Industry LLC</span>
      </Link>

      <div className='grow' />

      {SECTIONS.map(section => (
        <Link
          to={section}
          spy
          smooth
          offset={-80}
          className='inline-flex p-4 content-center flex-wrap border-b-4 border-b-transparent !text-pm-contrast hover:bg-pm-contrast/50 transition-colors ease-linear capitalize cursor-pointer'
          activeClass='!border-b-pm-light'
          key={section}
        >
          {t(section)}
        </Link>
      ))}

      <button className='group relative p-4 w-16 h-20 !bg-transparent'>
        <Icons.Globe className='text-pm-contrast cursor-pointer' />
        <div className='hidden group-focus-within:block absolute right-0 my-4 w-44 overflow-hidden bg-white z-10 divide-y divide-gray-100 rounded shadow'>
          {LANGUAGE.map(({ title, code }) => (
            <a
              key={code}
              href={`/${code}`}
              className={cx(
                'block px-4 py-2 text-pm-dark hover:bg-gray-100',
                i18n.language === code ? 'font-bold' : ''
              )}
              onClick={e => {
                e.preventDefault()
                switchLang(code)
              }}
            >
              {title}
            </a>
          ))}
        </div>
      </button>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
