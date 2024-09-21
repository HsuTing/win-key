'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'

const SECTIONS = ['about', 'business', 'contact']
interface NavLinkProps {
  href: string
  active?: boolean
  children: React.ReactNode
}
const NavLink = ({ children, href, active }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={cx(
        'inline-flex p-4 border-b-4 text-pm-contrast hover:bg-pm-contrast/50 transition-colors ease-linear capitalize',
        active ? 'border-b-pm-light' : 'border-b-transparent'
      )}
    >
      {children}
    </a>
  )
}

interface NavbarProps {
  activeSection: string
}
const Navbar = ({ activeSection }: NavbarProps) => {
  const { t } = useTranslation()
  return (
    <nav className='bg-pm-dark border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      {SECTIONS.map(section => (
        <NavLink
          href={`#${section}`}
          active={activeSection === section}
          key={section}
        >
          {t(section)}
        </NavLink>
      ))}
    </nav>
  )
}

export default React.memo(Navbar)
