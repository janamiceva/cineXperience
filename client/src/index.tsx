import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Elements, StripeProvider } from 'react-stripe-elements'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider, createTheme } from '@mui/material'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const theme = createTheme();
const publicKey = process.env.REACT_APP_STRIPE_PUBLICKEY as string

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StripeProvider apiKey={publicKey}>
        <Elements>
          <SnackbarProvider autoHideDuration={3000} maxSnack={2}>
            <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </BrowserRouter>
          </SnackbarProvider>
        </Elements>
      </StripeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
reportWebVitals()
