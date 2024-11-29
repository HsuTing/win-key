'use client'
import React from 'react'
import { Element } from 'react-scroll'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { useTranslation } from 'next-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <Element name='home'>
      <div className='relative bg-pm'>
        <ParallaxBanner className='w-screen h-screen'>
          <ParallaxBannerLayer
            image='https://picsum.photos/1200/900?random=1'
            speed={-20}
          />
        </ParallaxBanner>

        <div className='absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm'>
          <h1 className='capitalize text-pm-contrast font-bold'>{t('name')}</h1>
        </div>
      </div>
    </Element>
  )
}

export default React.memo(Home)
