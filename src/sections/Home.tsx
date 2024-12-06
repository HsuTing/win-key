'use client'
import React from 'react'
import { Element } from 'react-scroll'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { useTranslation } from 'react-i18next'

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
          <div className='container p-8 bg-pm-contrast/60 text-center text-pm-dark md:max-w-5/6 rounded'>
            <h1 className='mb-6 capitalize text-6xl font-bold'>{t('name')}</h1>
            <p>{t('description')}</p>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default React.memo(Home)
