import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Login from './pages/login'
import ErrorPage from './pages/error-page'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    // {
    //     path: "users/:userId",
    //     element: <Users />
    // }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)
