import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/layout/HomePage'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './redux/productSlicer'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state)=> state.productSlicer.data);
  useEffect(()=>{
    dispatch(fetchProduct());
  },[])
  console.log(selector)
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
        },
        {
          path: "/addtocart",
          element: <Cart/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
