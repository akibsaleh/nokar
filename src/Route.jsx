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
import BrandProducts from './Components/BrandProducts/BrandProducts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://nokar-shop-server.vercel.app/brands-thumb'),
      },
      {
        path: '/add-products',
        element: <AddProducts />,
        loader: () => fetch('https://nokar-shop-server.vercel.app/brands-name'),
      },
      {
        path: '/add-brands',
        element: <AddBrands />,
      },
      {
        path: '/products/:brand_name',
        element: <BrandProducts />,
        loader: ({ params }) => fetch(`https://nokar-shop-server.vercel.app/products/${params.brand_name}`),
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`https://nokar-shop-server.vercel.app/product/${params.id}`),
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
