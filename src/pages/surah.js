import Layout from '../layout'
import { useMyRouter } from '../hook/useRouter'
import Banner from '../components/Banner'

function Surah({ alQuran: { data } }) {
  const { router } = useMyRouter()

  const toSurah = (surah) => {
    router.push(`${router.pathname}/${surah}`)
  }

  return (
    <Layout>
      <Banner>
        <div className='absolute left-5 top-5 text-white'>
          <h2>Last Read</h2>
          <span className='mt-6 block text-2xl'>
            Al-Fatihah
          </span>
        </div>
      </Banner>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          data.map(surah => {
            return (
              <div className='p-2 flex justify-around items-center border-b-2 cursor-default' key={surah.number} onClick={() => toSurah(surah.number)}>
                <span className='text-sm cursor-pointer'>{surah.number}</span>
                <div className='flex flex-col items-center'>
                  <span className='font-semibold cursor-pointer'>{surah.name.transliteration.id}</span>
                  <span className='text-sm text-gray-500'>{surah.revelation.id}</span>
                </div>
                <span className='text-purple font-bold cursor-pointer'>{surah.name.short}</span>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await (await fetch('https://api.quran.sutanlab.id/surah')).json()
  return {
    props: {
      alQuran: data
    }
  }
}

export default Surah