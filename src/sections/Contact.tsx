'use client'

import React, { FormEvent, useId } from 'react'
import { useTranslation } from 'react-i18next'
import Banner from '@/components/Banner'
import Title from '@/components/Title'
import Card from '@/components/Card'
import Icons from '@/components/Icons'
import { sendForm } from '@/utils/form'

interface InputFiledProps {
  type?: string
  name: string
  label: string
  required?: boolean
  placeholder?: string
}
const InputFiled = ({
  type,
  name,
  label,
  required,
  placeholder,
}: InputFiledProps) => {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className='block mb-2 text-sm uppercase'>
        {label}
        {required && '*'}
      </label>
      {type === 'file' ? (
        <input
          type='file'
          id={id}
          name={name}
          className='block w-full text-sm cursor-pointer'
          required={required}
        />
      ) : (
        <input
          type={type ?? 'text'}
          id={id}
          name={name}
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await sendForm(new FormData(e.target as HTMLFormElement))
  }

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
        <form
          className='flex flex-col gap-6 lg:basis-2/3'
          onSubmit={handleSubmit}
        >
          <InputFiled name='name' label={t('姓名')} required />
          <InputFiled name='company' label={t('公司名稱')} />
          <InputFiled name='email' label='email' type='email' required />
          <InputFiled name='tel' label={t('電話')} type='tel' required />
          {/* <InputFiled id={`${id}-file`} type='file' label={t('附件')} /> */}
          <div className='flex items-center'>
            <input
              type='checkbox'
              id={`${id}-policy`}
              className='mr-2 w-4 h-4'
              required
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
