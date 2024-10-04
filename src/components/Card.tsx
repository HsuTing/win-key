import React from 'react'
import cx from 'classnames'

interface CardProps {
  className?: string
  title?: string
  image?: string
  imgPlaceholder?: React.ReactNode
  isImgCovered?: boolean
  children?: React.ReactNode
}
const Card = ({
  className,
  title,
  image,
  imgPlaceholder,
  isImgCovered,
  children,
}: CardProps) => {
  return (
    <div
      className={cx(
        'overflow-hidden flex items-stretch border rounded-lg bg-white shadow md:flex-col md:max-w-xl',
        imgPlaceholder && !image ? 'border-gray-200' : '',
        className
      )}
    >
      <div
        className={cx(
          'flex shrink-0 justify-center items-stretch w-28 min-h-28 text-white md:w-full md:min-h-auto md:aspect-square',
          image && !isImgCovered ? '' : 'bg-pm-light'
        )}
      >
        {imgPlaceholder && !image ? (
          imgPlaceholder
        ) : (
          <img
            className={cx(
              'w-full',
              isImgCovered ? 'object-cover' : 'object-contain'
            )}
            src={image}
          />
        )}
      </div>
      <div className='flex flex-col justify-center gap-2 p-4 w-full text-sm'>
        {title && <h3 className='font-bold'>{title}</h3>}
        {children}
      </div>
    </div>
  )
}

export default React.memo(Card)
