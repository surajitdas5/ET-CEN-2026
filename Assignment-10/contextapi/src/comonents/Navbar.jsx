// function Navbar({ isLoggedIn }){
//     return (
//         <nav>
//             <h2>
//                 Navbar -  
//                 {
//                     isLoggedIn && "Welcome John"
//                 }
//             </h2>
//         </nav>
//     )
// }

import { useLogin } from "../context/LognContext"

function Navbar(){
    const { isLoggedIn } = useLogin()
    return (
        <nav>
            <h2>
                Navbar -  
                {
                    isLoggedIn && "Welcome John"
                }
            </h2>
        </nav>
    )
}

export default Navbar