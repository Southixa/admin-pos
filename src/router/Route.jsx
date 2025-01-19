import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../view/login/Login'
import Home from '../view/home/Home'
import Product from '../view/product/Product'
import History from '../view/history/History'
import Staff from '../view/staff/Staff'
import AddProduct from '../view/product/AddProduct'
import Category from '../view/product/Category'
import AddCategory from '../view/product/AddCategory'
import EditCategory from '../view/product/EditCategory'
import Authentication from '../components/Authentication'
import { HistoryDetail } from '../view/history/HistoryDetail'

const RouterPath = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Authentication>
                    <Home />
                </Authentication>
            ),
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/product",
            element: (
                <Authentication>
                    <Product />
                </Authentication>
            ),
        },
        {
            path: "/product/add",
            element: (
                <Authentication>
                    <AddProduct />
                </Authentication>
            ),
        },
        {
            path: "/product/category",
            element: (
                <Authentication>
                    <Category/>
                </Authentication>
            ),
        },
        {
            path: "/product/category/add",
            element: (
                <Authentication>
                    <AddCategory/>
                </Authentication>
            ),
        },
        {
            path: "/product/category/:id",
            element: (
                <Authentication>
                    <EditCategory />
                </Authentication>
            ),
        },
        {
            path: "/history",
            element: (
                <Authentication>
                    <History />
                </Authentication>
            ),
        },
        {
            path: "/history/detail/:id",
            element: (
                <Authentication>
                    <HistoryDetail />
                </Authentication>
            ),
        },
        {
            path: "/staff",
            element: (
                <Authentication>
                    <Staff />
                </Authentication>
            ),
        }
    ])

  return <RouterProvider router={router} />
}

export default RouterPath