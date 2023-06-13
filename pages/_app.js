import LandingPage from '@/core/components/layouts/LandingPage'
import AppWrapper from '@/core/components/sections/AppWrapper'
import AppThemeProvider from '@/core/providers/AppThemeProvider'
import { wrapper } from '@/core/store/redux/store'
import { Provider } from 'react-redux'
import Head from 'next/head'

export default function App({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)

  console.log('Initial state ', store.getState())

  return (
    <Provider store={store}>
      <AppThemeProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <LandingPage>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </LandingPage>
      </AppThemeProvider>
    </Provider>
  )
}
