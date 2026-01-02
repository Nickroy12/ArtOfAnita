import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import { NavBar } from './components/Navbar'
// import { Slider } from './components/Slider'
// import { Home } from './components/Home'
import AppLayout from './components/layout/AppLayout';
import { Home } from './components/Home';
import { ProductDetails } from './components/Details';
import { ProductList } from './components/CardList';
import { SubCategory } from './components/subCategory';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/subCategory/:cateName',
          element: <SubCategory />,
        },
        {
          path: '/category/:categoryName',
          element: <ProductList />,
        },
        {
          path: '/category/:categoryName/:subCategoryName',
          element: <ProductList />,
        },
        {
          path: '/product/:id',
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
