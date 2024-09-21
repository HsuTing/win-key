'use client'

import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

interface BannerProps {
  title: string
  image: string
  /** Fake placeholder */
  lazyImage?: string
}
const Banner = ({ title, image, lazyImage }: BannerProps) => {
  return (
    <div className='relative bg-pm'>
      <ParallaxBanner className='w-screen h-[200px] md:h-[300px] grayscale'>
        {lazyImage && <ParallaxBannerLayer image={lazyImage} speed={-20} />}
        <ParallaxBannerLayer image={image} speed={-20} />
      </ParallaxBanner>

      <div className='absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm'>
        <h1 className='capitalize text-pm-contrast text-3xl font-bold md:text-6xl'>
          {title}
        </h1>
      </div>
    </div>
  )
}

export default React.memo(Banner)
