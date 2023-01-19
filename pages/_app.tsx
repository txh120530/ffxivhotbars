import '@/styles/globals.css'
import {useEffect} from 'react'
import type { AppProps } from 'next/app'
import {RoleProvider} from '../store/RoleContext';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);

  return (
    <RoleProvider>
      <Component {...pageProps} />
    </RoleProvider>
  )
}
