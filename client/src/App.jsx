import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SignUp from './components/SignUp/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignUp />
    </div>
  )
}

export default App
