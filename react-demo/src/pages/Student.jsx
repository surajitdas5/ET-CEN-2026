import { useState } from "react"
import StudentAdd from "../components/StudentAdd"
import StudentDisplay from "../components/StudentDisplay"

function Student(){
    let [ students, setStudents ] = useState([])
    function addStudent(newStudent){
        setStudents([...students, newStudent])
    }
    function deleteStudent(roll){
        let newS = students.filter( s => s.roll != roll)
        setStudents(newS)
    }
    return(
        <div className="container my-4">
            <h1 className="text-center text-primary">Manage Your Students</h1>
            <StudentAdd addStudent={addStudent} />
            <StudentDisplay students={students} deleteStudent={deleteStudent} />
        </div>
    )
}

export default Student