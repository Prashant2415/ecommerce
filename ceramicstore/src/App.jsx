import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/layout/HomePage'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Shop from './components/pages/Shop'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/product",
          element: <Product/>
        },
        {
          path: "/shop",
          element: <Shop/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
