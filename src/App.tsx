import { useEffect, useState } from "react"
import { AddStudent } from "./compontants/AddStudent"
import { StudentTable } from "./compontants/StudentTable"
import {  Student } from "./utils/data";
import { fetchStudents } from "./api/students";

function App() {
 const [students , setStudent]= useState<Student[]>([]);
 useEffect(()=>{
    fetchStudents().then((data)=>setStudent(data));
 },[])
  return (
    <>
     <StudentTable students = {students}/>
     <AddStudent  students = {students} setStudent={setStudent} />
    </>
  )
}

export default App
