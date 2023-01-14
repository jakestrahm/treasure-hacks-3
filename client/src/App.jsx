import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'

function App() {
    return (
        <>
            <NavBar />
            <SignUp />
            {/* <Login /> */}
        </>
    )
}

export default App
