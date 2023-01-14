import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import SignUp from './components/SignUp/SignUp'
import Item from './components/Item'
import Login from './components/Login/Login'
import ItemList from './components/ItemList'

import NavBar from './components/NavBar/NavBar'
const SAMPLE_ITEMS = [
    {
        userId: 0,
        id: "uid1",
        importance: 1,
        name: "item 1",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 1",
        dueDate: Date.now() + 1000
    },

    {
        userId: 1,
        id: "uid2",
        importance: 2,
        name: "item 2",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 2",
        dueDate: Date.now() + 2000
    },

    {
        userId: 2,
        id: "uid3",
        importance: 3,
        name: "item 3",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 3",
        dueDate: Date.now() + 3000
    },

    {
        userId: 3,
        id: "uid4",
        importance: 4,
        name: "item 4",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 4",
        dueDate: Date.now() + 4000
    },

    {
        userId: 4,
        id: "uid5",
        importance: 5,
        name: "item 5",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 5",
        dueDate: Date.now() + 5000
    },


    {
        userId: 5,
        id: "uid6",
        importance: 6,
        name: "item 6",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 6",
        dueDate: Date.now() + 6000
    },

    {
        userId: 6,
        id: "uid7",
        importance: 7,
        name: "item 7",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 7",
        dueDate: Date.now() + 7000
    },

    {
        userId: 7,
        id: "uid8",
        importance: 8,
        name: "item 8",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 8",
        dueDate: Date.now() + 8000
    },

    {
        userId: 8,
        id: "uid9",
        importance: 9,
        name: "item 9",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 9",
        dueDate: Date.now() + 9000
    },

    {
        userId: 9,
        id: "uid10",
        importance: 10,
        name: "item 10",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 10",
        dueDate: Date.now() + 10000
    },


    {
        userId: 10,
        id: "uid11",
        importance: 11,
        name: "item 11",
        complete: false,
        categories: [
            "first cat",
            "second cat"
        ],
        description: "descrip 11",
        dueDate: Date.now() + 11000
    },
]
const ITEM = {
    userId: 10,
    id: "uid11",
    importance: 11,
    name: "item 11",
    complete: false,
    categories: [
        "first cat",
        "second cat"
    ],
    description: "descrip 11",
    dueDate: Date.now() + 11000
}


function App() {
    return (
        <>
            <NavBar />
            <Item />
            <SignUp />
            {/* <Login /> */}
        </>
    )
}

export default App
