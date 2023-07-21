import { ReactElement } from 'react'
import Head from 'next/head'

import Header from '../components/Header'

import '../styles/globals.css'

interface MyAppProps {
  Component: React.FC;
  pageProps: ReactElement;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <title>Cyberpunk | Dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
