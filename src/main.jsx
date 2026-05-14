import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Apps from './pages/apps/Apps'
import InstallApps from './pages/installApps/InstallApps'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/> ,
      children: [
       {
          path: '/apps',
          element: <Apps/>
        },
        {
          path: '/installedApps',
          element:<InstallApps/>
        }
      ],
      errorElement: <h2>This page is not found</h2>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h2 className='text-amber-600'>Hello</h2>
    <RouterProvider router={router} />
  </StrictMode>,
)
