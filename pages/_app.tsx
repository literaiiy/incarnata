import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>A Minimalistic Spotify Now Playing Widget – Incarnata</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
