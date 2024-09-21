import React from 'react'
import cx from 'classnames'

interface TitleProps {
  children: React.ReactNode
}
const Title = ({ children }: TitleProps) => {
  return (
    <h2
      className={cx(
        'flex justify-center gap-4 my-12 items-center text-2xl font-bold md:text-3xl',
        'before:block before:w-6 before:h-[1px] before:bg-sc',
        'after:block after:w-6 after:h-[1px] after:bg-sc'
      )}
    >
      {children}
    </h2>
  )
}

export default React.memo(Title)
