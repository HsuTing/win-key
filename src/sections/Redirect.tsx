'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import i18n from 'i18next'

const Redirect = () => {
  const router = useRouter()
  const LANGUAGE = ['en', 'zh-TW', 'ja'] as const
  useEffect(() => {
    router.replace(`/${i18n.language in LANGUAGE ? i18n.language : 'en'}`)
  })
  return <></>
}

export default React.memo(Redirect)
