'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { Element } from 'react-scroll'
import Banner from '@/components/Banner'
import Title from '@/components/Title'
import Card from '@/components/Card'
import Icons from '@/components/Icons'

const AFFILIATED_COMPANIES = [
  {
    name: '允貿環保科技有限公司',
    phone: '+886932541705',
    logo: 'https://cloud.tipo.gov.tw/S282/pic/20160227/070/010/008/pic_070010008_20110105_1.jpg',
  },
  { name: '允興投資股份有限公司' },
  { name: '允興(泰國)股份有限公司' },
]

const About = () => {
  const { t } = useTranslation(['about', 'translation'])
  return (
    <Element name='about'>
      <Banner
        title={t('translation:about')}
        image='https://picsum.photos/1200/900'
      />
      <div className='container pb-16'>
        <Title>{t('代表介紹')}</Title>
        <img
          className='mx-auto mb-8 w-[300px] aspect-[3/4] p-1 rounded ring-2 ring-gray-300 dark:ring-gray-500 md:float-left md:mr-8 md:w-[200px]'
          src='https://picsum.photos/500'
          alt='Bordered avatar'
        />
        {t('代表致詞內容')}

        <Title>{t('企業關聯公司')}</Title>
        <div className='grid gap-4 md:grid-cols-3'>
          {AFFILIATED_COMPANIES.map(({ name, phone, logo }) => (
            <Card
              key={name}
              image={logo}
              imgPlaceholder={<Icons.Briefcase className='p-6' />}
              title={t(name)}
            >
              <p>{t(`${name}地址`)}</p>
              {phone && (
                <p>
                  <a href={`tel:${phone}`}>{t(`${name}電話`)}</a>
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default React.memo(About)
