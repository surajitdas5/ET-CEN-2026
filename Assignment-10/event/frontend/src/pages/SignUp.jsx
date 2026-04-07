import { useState } from "react"
import axiosClient from "../../apiClient";

function SignUp(){
    const [ formData, setFormData ] = useState({ name: "", mobile: "", email: "", password:"" });
    const [ message, setMessage ] = useState("")
    const [error, setError ] = useState(false)

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
            let res = await axiosClient.post("/users", formData)
            console.log(res)
            setError(false)
            setMessage("Account Created. Login to continue")
            setFormData({ name: "", mobile: "", email: "", password:"" })
        } catch (error) {
            console.log(error.response)
            setError(true)
            setMessage("Something went wrong. "+error?.response?.data?.message)
        }
    }

    return (
        <div className="row">
            <div className="col-md-5 mx-auto">
                <h2 className="text-center">Sign Up</h2>
                <p className={error ? "text-danger" : "text-success"}>{message}</p>
                <form method="post" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <input 
                        type="text"
                        name="mobile"
                        placeholder="Mobile"
                        className="form-control mb-2"
                        onChange={handleChange}
                        value={formData.mobile}
                        required
                    />
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

                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                </form>
            </div>
        </div>
    )
}

export default SignUp