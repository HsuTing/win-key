import Navbar from '@/sections/Navbar'
import About from '@/sections/About'
import Business from '@/sections/Business'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export async function generateMetadata({ params }) {
  const TITLE = {
    en: 'Win Key Recycle Industrial Corp.',
    'zh-TW': '允貿環保科技有限公司',
    ja: '允貿環保科技有限公司',
  }

  return {
    title: TITLE[params.lang ?? 'en'],
    // description: '',
  }
}

export default function Page() {
  return (
    <>
      <Navbar />
      <About />
      <Business />
      <Contact />
      <Footer />
    </>
  )
}
