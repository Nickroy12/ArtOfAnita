
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import { NavBar } from './components/Navbar'
// import { Slider } from './components/Slider'
// import { Home } from './components/Home'
import AppLayout from './components/layout/AppLayout'
import { Home } from './components/Home'
import { ProductDetails } from './components/Detaills'
import { ProductList } from './components/CardList'



const App =() => {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<AppLayout/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path: "/product/:id",
            element: <ProductDetails/>
          },
          {
            path:"/category/:categoryName",
            element: <ProductList />
          }

        ]
      }
    ]
  )

  return <RouterProvider router={router}/>

}

export default App
