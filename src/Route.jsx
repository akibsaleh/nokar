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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateProducts from './Components/Pages/UpdateProduct';

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
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
        loader: () => fetch('https://nokar-shop-server.vercel.app/brands-name'),
      },
      {
        path: '/add-brands',
        element: (
          <PrivateRoute>
            <AddBrands />
          </PrivateRoute>
        ),
      },
      {
        path: '/products/:brand_name',
        element: (
          <PrivateRoute>
            <BrandProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://nokar-shop-server.vercel.app/products/${params.brand_name}`),
      },
      {
        path: '/products',
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://nokar-shop-server.vercel.app/product/${params.id}`),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://nokar-shop-server.vercel.app/product/${params.id}`),
      },
      {
        path: 'my-cart',
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
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
