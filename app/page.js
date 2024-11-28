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
    description:
      '允基企業有限公司於西元1995年創立於台灣中部。主要從事各類有色金屬加工、買賣。強項在於各式工業廢棄物、邊角料處理，以促進再生循環經濟。我們擁有二十年以上的豐富經驗，並且備有非常堅強的產銷團隊。工廠設於台灣及泰國，與世界各國公司進行貿易，其中又以亞太地區為主，歐美亦有交易案例。',
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
