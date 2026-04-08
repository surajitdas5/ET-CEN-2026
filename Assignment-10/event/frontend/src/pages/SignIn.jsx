import { useState } from "react"
import axiosClient from "../../apiClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignIn(){
    const [ formData, setFormData ] = useState({ email: "", password:"" });
    const [ message, setMessage ] = useState("")
    const [error, setError ] = useState(false)
    let navigate = useNavigate();
    const { login } = useAuth()

    function handleChange(e){
        let { name, value } =e.target
        setFormData({...formData, [name]: value })
    }
    console.log(formData)

    async function handleSubmit(e){
        e.preventDefault()
        setMessage("")
        setError(false)
        try {
            let res = await axiosClient.post("/users/login", formData)
            let data = res.data
            login(data)
            console.log(res)
            setError(false)
            setFormData({  email: "", password:"" })
            navigate("/")
        } catch (error) {
            console.log(error.response)
            setError(true)
            setMessage(error?.response?.data?.message)
        }
    }

    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                <h2 className="text-center">Sign In</h2>
                <p className={error ? "text-danger" : "text-success"}>{message}</p>
                <form method="post" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />

                    <input type="submit" className="btn btn-primary" value="Sign In" />
                </form>
            </div>
        </div>
    )
}

export default SignIn