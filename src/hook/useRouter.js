import { useRouter } from 'next/router'
import { useContext, createContext, useEffect, useState } from 'react'

const RouterContext = createContext([])

function ProviderRouter() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(router.query.hasOwnProperty('id')) {
      setLoading(false)
    }
  })

  return {
    router,
    query: router.query,
    loading
  }
}

export const ProviderContextRouter = ({ children }) => {
  const router = ProviderRouter()
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
}

export const useMyRouter = () => useContext(RouterContext)

