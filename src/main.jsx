import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'


const MainPage = React.lazy(() => import('./pages/mainpage/MainPage'));
const DetailsPage = React.lazy(() => import('./pages/detailspage/DetailsPage'));


const router = createBrowserRouter([
  {path:'/', element: <MainPage />},
  {path: '/details/:id', element: <DetailsPage />}

])

  const loading = <h1>Loading...</h1>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense  fallback={loading} >
        <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
