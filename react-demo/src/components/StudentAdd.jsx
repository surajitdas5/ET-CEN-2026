import { useRef } from "react"

function StudentAdd({ addStudent }){
    let rollRef = useRef(null);
    let nameRef = useRef(null);
    let cgpaRef = useRef(null);
    function handleSubmit(e){
        e.preventDefault();
        let roll = rollRef.current.value
        let name = nameRef.current.value
        let cgpa = cgpaRef.current.value

        let newStudent = {
            roll: roll,
            name: name,
            cgpa: cgpa
        }

        addStudent(newStudent)


        rollRef.current.value = ""
        nameRef.current.value = ""
        cgpaRef.current.value = ""
    }
    return(
        <form method="post" onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-md-3">
                    <input ref={rollRef} className="form-control" type="text" placeholder="Roll" required />
                </div>
                <div className="col-md-3">
                    <input ref={nameRef} className="form-control" type="text" placeholder="Name" required />
                </div>
                <div className="col-md-3">
                    <input ref={cgpaRef} className="form-control" type="text" placeholder="CGPA" required />
                </div>
                <div className="col-md-3">
                    <input  className="form-control btn btn-primary" type="submit" />
                </div>
            </div>
        </form>
    )
}

export default StudentAdd