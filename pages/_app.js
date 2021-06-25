import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>What Restaurant?</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
