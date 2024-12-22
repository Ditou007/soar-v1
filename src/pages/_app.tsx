import 'soar/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'soar/redux/store'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import BrowserRouter
import { routes } from 'soar/routes'
const BrowserRouter = dynamic(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false } // Disable SSR for BrowserRouter
)

import { Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import NotFound from 'soar/Components/Views/NotFound'
import Loading from 'soar/Components/Views/LoadingPage'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route, index) => {
              const RouteElement = route.element
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Suspense fallback={<Loading />}>
                      <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                      >
                        <RouteElement />
                      </SnackbarProvider>
                    </Suspense>
                  }
                />
              )
            })}
            {/* Fallback for unmatched routes */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}
