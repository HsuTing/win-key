import React from 'react'
import cx from 'classnames'

interface CardProps {
  image?: string
  imgPlaceholder?: React.ReactNode
  isImgCovered?: boolean
  children?: React.ReactNode
}
const Card = ({ image, imgPlaceholder, isImgCovered, children }: CardProps) => {
  return (
    <div className='overflow-hidden flex items-center border border-gray-200 rounded-lg bg-white shadow md:flex-col md:max-w-xl'>
      <div
        className={cx(
          'flex shrink-0 justify-center items-center w-28 h-full bg-center bg-no-repeat md:w-full md:h-auto md:aspect-square md:rounded-none',
          isImgCovered ? 'bg-cover' : 'bg-contain'
        )}
        style={{ ...(image && { backgroundImage: `url(${image})` }) }}
      >
        {imgPlaceholder && !image && imgPlaceholder}
      </div>
      <div className='flex flex-col justify-between gap-2 p-4'>{children}</div>
    </div>
  )
}

export default React.memo(Card)
