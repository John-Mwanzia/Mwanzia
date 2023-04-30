import Canvas from '@/Components/Canvas';
import '@/styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'

export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    type: 'dark',
   
  })
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>

      <Component {...pageProps} />
    
    </NextUIProvider>
  );
}
