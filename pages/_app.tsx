import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Gilda_Display } from 'next/font/google'
import { motion } from 'framer-motion';
import Script from 'next/script';

const gildaDisplay = Gilda_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--gilda-display-font'
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>

      <Layout>
        <Component {...pageProps} />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </Layout >
    </main >
  )
}
