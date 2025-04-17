import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/home'
import ErrorPage from '@/pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]) 