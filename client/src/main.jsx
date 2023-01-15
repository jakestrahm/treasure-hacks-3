import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import ErrorPage from './pages/error-page'
import MainPage from './pages/main-page'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Settings from './pages/Settings'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/SignUp",
        element: <SignUp />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Setting",
        element: <Settings />
    }


]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
