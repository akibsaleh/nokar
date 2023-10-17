import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Pages/Home';
import Brand from './Components/Pages/Brand';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import MyCart from './Components/Pages/MyCart';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

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
        path: '/brand/:name',
        element: <Brand />,
      },
      {
        path: '/brand/:name/:product_id',
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
