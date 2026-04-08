import LoginForm from "./LoginForm"

// function LoginCard({ isLoggedIn, toggleLogIn }){
//     return (
//         <>
//             <h3>Login Here</h3>
//             <LoginForm isLoggedIn={isLoggedIn} toggleLogIn={toggleLogIn} />
//         </>
//     )
// }

function LoginCard(){
    return (
        <>
            <h3>Login Here</h3>
            <LoginForm />
        </>
    )
}

export default LoginCard