import '../styles/global.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  )
}