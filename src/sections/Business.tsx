'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '@/components/Banner'
import Title from '@/components/Title'
import Card from '@/components/Card'

const Business = () => {
  const { t } = useTranslation(['business', 'translation'])
  return (
    <section>
      <Banner
        title={t('translation:business')}
        image='https://picsum.photos/1200/900'
      />
      <div className='container pb-16'>
        <Title>{t('業務內容')}</Title>
        <div className='grid gap-4 md:grid-cols-4'>
          <Card image='https://picsum.photos/500?ramdom=1'>
            <h3 className='font-bold'>{t('貴金屬')}</h3>
          </Card>
          <Card image='https://picsum.photos/500?ramdom=2'>
            <h3 className='font-bold'>{t('非鐵金屬')}</h3>
          </Card>
          <Card image='https://picsum.photos/500?ramdom=3'>
            <h3 className='font-bold'>{t('產業廢棄物')}</h3>
          </Card>
          <Card image='https://picsum.photos/500?ramdom=4'>
            <h3 className='font-bold'>{t('國際貿易')}</h3>
          </Card>
        </div>
        <Title>SDGs</Title>
        <Title>{t('營業執照')}</Title>
      </div>
    </section>
  )
}

export default React.memo(Business)
