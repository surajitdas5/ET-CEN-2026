import Greet from "../components/Greet";
function Intro(){
    let name = "John";
  let age = 20;
  let h1 = <h1>This is a heading tag</h1>

  // console.log(h1)
//   console.log("Hello")

  // function Greet(){
  //   console.log("Hello World!")
  // }

  // let user = {
  //   name: "John Smith",
  //   age: 20,
  //   email: "johnsmith@example.com",
  //   mobile: 7845236589
  // }
  // let user1 = {
  //   name: "Jane Smith",
  //   age: 19,
  //   email: "jane@example.com",
  //   mobile: 7845236574
  // }

  let users = [
    { name: "John Doe", age: 30, mobile: 7845235896, email: "john@gmail.com" },
    { name: "Jane Doe", age: 32, mobile: 7845235452, email: "jane@gmail.com" },
    { name: "Albert", age: 23, mobile: 7845235458, email: "albert@gmail.com" },
    { name: "Clark", age: 20, mobile: 7845235123, email: "clark@gmail.com" }
  ]

  return (
    <div>
      {/* <h1>Hello World!</h1>
      <h2>Learning React</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum voluptatum atque laborum assumenda, eos commodi minima aspernatur dolor nostrum? Ut mollitia nam minima.</p>
      <h1>Name: {name}, Age : {age}</h1>
      <h2>{1+1}</h2>
      {h1} */}

      {/* {Greet()} */}
      {/* <Greet></Greet> */}
      {/* <br />
      <hr />
      <input type="text" /> */}
      {/* <img src="" /> */}

      {/* <Greet name="John Doe" age="20" email="john@example.com" />
      <Greet name="Jane Doe" age="18" email="jane@example.com" /> */}
      {/* <Greet user={user} />
      <Greet user={user1} /> */}

      <div className="container my-5 d-flex gap-3 flex-wrap">
      {
        // users.map( (user, index) => (
        //   <Greet user={user} key={index} />
        // ))
        users.map( (user) => (
          <Greet user={user} key={user.email} />
        ))
      }
      </div>
    </div>
  )
}

export default Intro