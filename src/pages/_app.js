import 'tailwindcss/tailwind.css'
import { ProviderContextRouter } from '../hook/useRouter'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderContextRouter>
      <Component {...pageProps} />
    </ProviderContextRouter>
  )
}

export default MyApp
