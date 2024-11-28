'use client'

import React from 'react'
import { useTranslation } from 'next-i18next'
import { Element } from 'react-scroll'
import Banner from '@/components/Banner'
import Title from '@/components/Title'
import Card from '@/components/Card'

const BUSINESSES = [
  { name: '貴金屬', img: 'https://picsum.photos/500?ramdom=1' },
  { name: '非鐵金屬', img: 'https://picsum.photos/500?ramdom=2' },
  { name: '產業廢棄物', img: 'https://picsum.photos/500?ramdom=3' },
  { name: '國際貿易', img: 'https://picsum.photos/500?ramdom=4' },
]

const Business = () => {
  const { t } = useTranslation(['business', 'translation'])
  return (
    <Element name='business'>
      <Banner
        title={t('translation:business')}
        image='https://picsum.photos/1200/900'
      />
      <div className='container pb-16'>
        <Title>{t('業務內容')}</Title>
        <div className='grid gap-4 md:grid-cols-4'>
          {BUSINESSES.map(({ name, img }) => (
            <Card
              key={name}
              className='md:text-center'
              title={t(name)}
              image={img}
              isImgCovered
            />
          ))}
        </div>
        <Title>SDGs</Title>
        <Title>{t('營業執照')}</Title>
      </div>
    </Element>
  )
}

export default React.memo(Business)
