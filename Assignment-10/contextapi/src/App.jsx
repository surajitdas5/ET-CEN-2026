import { useState } from 'react'
import './App.css'
import Navbar from './comonents/Navbar'
import Login from './pages/Login'
import { LoginProvider } from './context/LognContext'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // function toggleLogIn(){
  //   setIsLoggedIn(!isLoggedIn)
  // }

  return (
    // <>
    //   <Navbar isLoggedIn={isLoggedIn} />
    //   <Login  isLoggedIn={isLoggedIn} toggleLogIn={toggleLogIn} />
    // </>
    <>
      <LoginProvider>
        <Navbar />
        <Login />
      </LoginProvider>
    </>
  )
}

export default App
