import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from './Home/Home';
import About from './Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <About />,
      }
    ]

  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
