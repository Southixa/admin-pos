import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../view/login/Login'
import Home from '../view/home/Home'
import Product from '../view/product/Product'
import History from '../view/history/History'
import Staff from '../view/staff/Staff'
import AddProduct from '../view/product/AddProduct'

const RouterPath = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/product",
            element: <Product />,
        },
        {
            path: "/product/add",
            element: <AddProduct />,
        },
        {
            path: "/history",
            element: <History />,
        },
        {
            path: "/staff",
            element: <Staff />,
        }
    ])

  return <RouterProvider router={router} />
}

export default RouterPath