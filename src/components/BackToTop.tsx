'use client'
import React from 'react'
import cx from 'classnames'
import { Button } from 'react-scroll'
import Icons from './Icons'

interface BackToTopProps {
  className?: string
}
const BackToTop = ({ className }: BackToTopProps) => {
  return (
    <Button
      className={cx(
        className,
        'bg-pm-light drop-shadow opacity-1 transition-opacity'
      )}
      activeClass='opacity-0'
      to='home'
      spy
      smooth
      offset={typeof window !== 'undefined' ? -window.innerHeight : 0}
    >
      <Icons.Up className='w-8' />
      ᴛᴏᴘ
    </Button>
  )
}

export default React.memo(BackToTop)
