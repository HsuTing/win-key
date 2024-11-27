export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh-TW' }, { lang: 'ja' }, { lang: '' }]
}

export { default, generateMetadata } from '../page'
