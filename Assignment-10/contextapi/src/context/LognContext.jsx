import { createContext, useContext, useState  } from "react";

export const LoginContext = createContext()

export function LoginProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function toggleLogIn(){
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogIn }}>
            {children}
        </LoginContext.Provider>
    )
}

export function useLogin(){
    return useContext(LoginContext)
}