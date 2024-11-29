'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import i18n from 'i18next'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'
import { Link } from 'react-scroll'
import Image from 'next/image'
import Icons from '@/components/Icons'

const SECTIONS = ['about', 'business', 'contact']

interface NavbarProps {
  activeSection: string
}
const Navbar = ({ activeSection }: NavbarProps) => {
  const { t } = useTranslation()
  const router = useRouter()

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
    <nav className='sticky top-0 flex bg-pm-dark border-gray-200 z-50 drop-shadow-lg'>
      <Link
        className='relative w-16 h-16 cursor-pointer'
        to='home'
        smooth={true}
        offset={-60}
        duration={500}
      >
        <Image src='/images/logo.jpg' alt='logo' fill />
      </Link>

      {SECTIONS.map(section => (
        <Link
          to={section}
          spy
          smooth
          offset={-60}
          className='inline-flex p-4 border-b-4 border-b-transparent !text-pm-contrast hover:bg-pm-contrast/50 transition-colors ease-linear capitalize cursor-pointer'
          activeClass='!border-b-pm-light'
          key={section}
        >
          {t(section)}
        </Link>
      ))}
      <div className='grow' />
      <a
        className='group relative p-4 w-16 h-16'
        href='#'
        onClick={e => e.preventDefault()}
      >
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
      </a>
    </nav>
  )
}

export default React.memo(Navbar)
