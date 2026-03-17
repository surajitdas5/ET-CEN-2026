// function Greet(props){
// function Greet({name, age}){
function Greet({user}){
    // console.log("Hello World!")
    // let {name, age } =  props
    // console.log(props)
    let {name, age, email, mobile } =  user

    // internal style
    const myStyle = {
        color: 'red',
        fontSize: '30px',
        textDecoration: 'underline'
    }

    return(
        <>
            {/* <h1>Hello World in browser!</h1> */}
            {/* <div className="user-card"> */}
            <div className="card">
                <div className="card-body">
                    <h1 style={myStyle}>{name}</h1>
                    {/* inline style */}
                    <h4 style={{color: 'blue', fontSize: '22px'}}>Age: {age}</h4>
                    <p className="mb-0">Mobile: {mobile}</p>
                    <p className="mb-0">Email: {email}</p>
                </div>
            </div>
        </>
    )
}

export default Greet