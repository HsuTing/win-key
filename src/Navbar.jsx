import React from 'react'
import cx from 'classnames'

const SECTIONS = ['about', 'business', 'contact']

const NavLink = ({ children, href, active }) => {
  return (
    <a
      href={href}
      className={cx(
        'inline-flex p-4 border-b-4 text-pm-contrast hover:bg-pm-contrast/50 transition-colors ease-linear',
        active ? 'border-b-pm-light' : 'border-b-transparent'
      )}
    >
      {children}
    </a>
  )
}

const Navbar = ({ activeSection }) => {
  return (
    <nav className='bg-pm-dark border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
      {SECTIONS.map(section => (
        <NavLink
          href={`#${section}`}
          active={activeSection === section}
          key={section}
        >
          {section}
        </NavLink>
      ))}
    </nav>
  )
}

export default React.memo(Navbar)
