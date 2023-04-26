import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Gilda_Display } from 'next/font/google'

const gildaDisplay = Gilda_Display({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--gilda-display-font'
})


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
