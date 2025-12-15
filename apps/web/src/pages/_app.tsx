import type { AppProps } from 'next/app'
import Providers from '@/providers/Providers'
import { Toaster } from '@workspace/ui/components/sonner'
import '@workspace/ui/globals.css'
import '../app/font.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Toaster richColors position="bottom-right" />
      <Component {...pageProps} />
    </Providers>
  )
}
