import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'

const description =
  "Can't decide what to eat? Let us generate a random restaurant near you"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hangry! What restaurant?</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://what.restaurant" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
