import { useState, useEffect } from "react"
import Loading from "../components/Loading"
import { useMyRouter } from '../hook/useRouter'

function Home() {
  const [loading, setLoading] = useState(true)
  const { router } = useMyRouter()
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('visited')) {
      return router.push('/surah')
    }

    setLoading(false)
  }, [hasVisited])

  const isHasVisited = () => {
    localStorage.setItem('visited', 'true')
    setHasVisited(true)
    setLoading(true)
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <GetStarted isHasVisited={isHasVisited}/>
  )
}

function GetStarted({ isHasVisited }) {
  return (
    <div className='w-full relative h-screen bg-smartphone bg-no-repeat bg-cover xs:bg-contain xs:bg-center 2xs:bg-repeat bg-white lg:bg-laptop '>
      <div className='lg:w-1/2  w-full sm:bg-white absolute right-0 top-0 bottom-0 flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-bold text-purple-dark xs:text-white xs:absolute xs:top-10'>Quran App</h1>
        <p className='text-sm text-gray-500 mt-1 xs:text-white xs:p-1 xs:absolute xs:top-20'>Learn Quran and recite once everyday</p>
        <button onClick={isHasVisited} className='bg-yellow-400 text-white font-semibold p-3 rounded-xl mt-4'>Get Started</button>
      </div>
    </div>
  )
}


export default Home