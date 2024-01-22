import { createBrowserRouter } from 'react-router-dom'

import Home from './routes/home'
import PageLayout from './components/layout'

import 'bootstrap/dist/css/bootstrap.min.css'

import Error from './error'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      {
        path: "about",
        // element: <About />,
      },
      
    ]
  }
])