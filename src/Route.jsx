import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Pages/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import MyCart from './Components/Pages/MyCart';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import AddProducts from './Components/Pages/AddProducts';
import Products from './Components/Products/Products';
import AddBrands from './Components/Pages/AddBrands';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/add-products',
        element: <AddProducts />,
        loader: () => fetch('https://nokar-shop-server.vercel.app/brands'),
      },
      {
        path: '/add-brands',
        element: <AddBrands />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:product_id',
        element: <ProductDetails />,
      },
      {
        path: 'my-cart',
        element: <MyCart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
