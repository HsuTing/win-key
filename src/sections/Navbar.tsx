'use client'

import React from 'react'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'
import { Link } from 'react-scroll'
import Image from 'next/image'

const SECTIONS = ['about', 'business', 'contact']

interface NavbarProps {
  activeSection: string
}
const Navbar = ({ activeSection }: NavbarProps) => {
  const { t } = useTranslation()
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
    </nav>
  )
}

export default React.memo(Navbar)
