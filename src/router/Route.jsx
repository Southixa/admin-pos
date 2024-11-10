import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../view/login/Login'
import Home from '../view/home/Home'

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
    ])

  return <RouterProvider router={router} />
}

export default RouterPath