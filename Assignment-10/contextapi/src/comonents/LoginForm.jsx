// function LoginForm({ isLoggedIn, toggleLogIn }){
//     return (
//         <>
//         <button onClick={toggleLogIn}>
//             { isLoggedIn ? "Log Out" : "Log In"}
//         </button>
//         </>
//     )
// }

import { useLogin } from "../context/LognContext"

function LoginForm(){
    const { isLoggedIn, toggleLogIn } = useLogin();
    return (
        <>
        <button onClick={toggleLogIn}>
            { isLoggedIn ? "Log Out" : "Log In"}
        </button>
        </>
    )
}

export default LoginForm