import { useEffect, useRef, useState } from 'react'
import { useMyRouter } from "../../hook/useRouter";
import Layout from '../../layout'
import Loading from '../../components/Loading'
import Banner from '../../components/Banner';

export default function Surah() {
  const { query, loading } = useMyRouter()
  const [surah, setSurah] = useState([])
  const audioRef = useRef(), surahRef = useRef()

  useEffect(() => {
    if (query.id) {
      fetch(`https://api.quran.sutanlab.id/surah/${query.id}`).then(res => res.json()).then(surah => {
        document.title = `${surah.data.name.transliteration.id}`
        setSurah(surah.data)
      })
    }
    return () => setSurah([])
  }, [query])

  if (loading || surah.length == 0) {
    return <Loading />
  }

  const playAudio = (src, surah, curAyah) => {
    audioRef.current.src = `${src}`
    audioRef.current.play()
    let ayah = 0

    const filtering = (opsional = 0) => {
      return Array.from(surahRef.current.children).filter(currentAyah => currentAyah.dataset.id == ayah + opsional)[0]
    }

    if (curAyah.number.inSurah == 1) {
      filtering(1).children[1].children[0].classList.add('text-purple-dark')
    }

    audioRef.current.onended = () => {
      ayah++
      if (ayah < surah.verses.length && curAyah.number.inSurah == 1) {
        const src = surah.verses[ayah].audio.primary
        audioRef.current.src = `${src}`
        audioRef.current.play()

        filtering(1).children[1].children[0].classList.add('text-purple-dark')

        window.scrollTo({
          top: filtering().offsetTop,
          left: 0,
          behavior: "smooth"
        })

        filtering().children[1].children[0].classList.remove('text-purple-dark')
      }
      
      if (ayah === surah.verses.length) {
        filtering().children[1].children[0].classList.remove('text-purple-dark')
      }
    }

  }

  return (
    <Layout>
      <Banner>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl text-white'>{surah.name.transliteration.id}</h1>
          <span className='text-white text-lg'>{surah.name.translation.id}</span>
          <span className='block w-72 mt-2 mb-2 h-0.5 bg-gray-200'></span>
          <span className='text-white text-sm'>{surah.revelation.id} - {surah.verses.length} Ayat</span>
        </div>
      </Banner>
      <div className='flex flex-col items-end relative' ref={surahRef}>
        {
          surah.verses.map(ayah => {
            return (
              <div key={ayah.number.inSurah} data-id={ayah.number.inSurah} className='flex p-5 items-center cursor-pointer' onClick={() => playAudio(ayah.audio.primary, surah, ayah)}>
                <span className='order-2 ml-5 text-black w-6 text-center'>{ayah.number.inSurah}</span>
                <div className='order-1 text-right'>
                  <span className='text-xl block'>{ayah.text.arab}</span>
                  <p className='mt-4 text-left'>{ayah.text.transliteration.en}</p>
                  <div className='border-b-2 w-full absolute left-0 mt-5'></div>
                </div>
              </div>
            )
          })
        }
        <div className='absolute left-0 hidden'>
          <audio preload='true' controls src="" ref={audioRef}></audio>
        </div>
      </div>
    </Layout>
  )
}