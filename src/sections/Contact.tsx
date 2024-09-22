'use client'

import React, { useId } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '@/components/Banner'
import Title from '@/components/Title'
import Card from '@/components/Card'
import Icons from '@/components/Icons'

interface InputFiledProps {
  type?: string
  id: string
  label: string
  required?: boolean
  placeholder?: string
}
const InputFiled = ({
  type,
  id,
  label,
  required,
  placeholder,
}: InputFiledProps) => {
  return (
    <div>
      <label htmlFor={id} className='inline-block mb-2 text-sm uppercase'>
        {label}
        {required && '*'}
      </label>
      {type === 'file' ? (
        <input
          type='file'
          id={id}
          className='block w-full text-sm cursor-pointer'
          required={required}
        />
      ) : (
        <input
          type={type ?? 'text'}
          id={id}
          className='w-full text-sm'
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

const Contact = () => {
  const { t } = useTranslation(['contact', 'translation'])
  const id = useId()
  return (
    <section>
      <Banner
        title={t('translation:contact')}
        image='https://picsum.photos/1200/900'
      />
      <div
        className='container py-16
        flex flex-col lg:flex-row gap-16 lg:items-stretch'
      >
        <div className='flex flex-col gap-2 flex-1'>
          {t('引言')}
          <a href='tel:+8860492510477' className='flex'>
            <Icons.Phone className='mr-2 aspect-square w-4' />
            {t('translation:phone')}
          </a>
          <a href='mailto:'>
            <Icons.Mail className='mr-2 aspect-square w-4' />
          </a>
        </div>
        <hr className='w-48 h-1 mx-auto bg-gray-100 border-0 rounded lg:w-1 lg:h-auto' />
        <form className='flex flex-col gap-6 lg:basis-2/3'>
          <InputFiled id={`${id}-name`} label={t('姓名')} required />
          <InputFiled id={`${id}-company`} label={t('公司名稱')} />
          <InputFiled id={`${id}-email`} label='email' required />
          <InputFiled id={`${id}-tel`} type='tel' label={t('電話')} required />
          <InputFiled id={`${id}-file`} type='file' label={t('附件')} />
          <div className='flex items-center'>
            <input
              type='checkbox'
              id={`${id}-policy`}
              className='mr-2 w-4 h-4'
            />
            <label htmlFor={`${id}-policy`} className='text-sm'>
              {t('同意隱私權政策')}
            </label>
          </div>
          <button type='submit' className='btn'>
            {t('送出')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default React.memo(Contact)
