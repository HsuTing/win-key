'use client'

import React from 'react'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'
import { Link } from 'react-scroll'

const SECTIONS = ['about', 'business', 'contact']

interface NavbarProps {
  activeSection: string
}
const Navbar = ({ activeSection }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <nav className='sticky top-0 bg-pm-dark border-gray-200 dark:bg-gray-900 dark:border-gray-700 z-50'>
      {SECTIONS.map(section => (
        <Link
          to={section}
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
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
