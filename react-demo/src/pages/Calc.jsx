import { useState, useRef } from 'react';

function Calc(){
    let numOneRef = useRef(null);
    let numTwoRef = useRef(null);
    let [sum, setSum] = useState(0);
    function handleSubmit(e){
        e.preventDefault();
        // console.log(numOneRef);
        let a = numOneRef.current.value
        let b = numTwoRef.current.value

        if(a == "" || b == ""){
            alert("Both the inputs are required")
            return
        } else if(isNaN(a) || isNaN(b)){
            alert("Both the inputs should be numbers")
            return
        }

        a = Number(a)
        b = Number(b)

        setSum(a+b);

        numOneRef.current.value = ""
        numTwoRef.current.value = ""

    }

    return(
        <div className="row my-4">
            <div className="col-md-6 mx-auto">
                <h1 className="text-center text-primary">Add Two Numbers</h1>
                <form method="POST" onSubmit={handleSubmit}>
                    <input ref={numOneRef} type="text" placeholder="First Number" className="form-control mb-2" />
                    <input ref={numTwoRef} type="text" placeholder="Second Number" className="form-control mb-2" />
                    <input type="submit" value="Add"  className="btn btn-primary" />
                </form>

                <p>Sum = {sum}</p>
            </div>
        </div>
    )
}

export default Calc;