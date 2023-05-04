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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
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
        element: <Recipe></Recipe>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
