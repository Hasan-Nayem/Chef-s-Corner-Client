import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Registration from './Components/Registration/Registration.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Recipe from './Components/Recipe/Recipe';
import AuthProvider from './providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import Loader from './Components/Loader/Loader';
import Blog from './Components/Blog/Blog';
import PDF from './Components/PDF/PDF';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/",
        loader: () => fetch('https://assignment-10-server-jade.vercel.app/all-chef'),
        element : <Home></Home>,
      },
      {
        path: "/chef/:id",
        loader : ({params}) => fetch(`https://assignment-10-server-jade.vercel.app/chef/${params.id}`),
        element: <PrivateRoutes> <Recipe></Recipe> </PrivateRoutes>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/pdf',
        element: <PDF></PDF>,
      }
    ],
    errorElement : <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />  
    </AuthProvider>
  </React.StrictMode>,
)
