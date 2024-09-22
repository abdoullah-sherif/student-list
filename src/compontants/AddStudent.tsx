import {  Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, useEffect,  useState } from "react";
import {  Student } from "../utils/data";
import { createStudent } from "../api/students";

interface Props {
    students: Student[],
    setStudent: Dispatch<React.SetStateAction<Student[]>>

}
const initialValue= { id: 111, name: "", age: "", email: "", class: "" }

export const AddStudent = ({ students, setStudent }: Props) => {

    const [formData,setFormData] = useState(initialValue);


    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name] :e.target.value})
     

    }

    const submitHanlder =async () => {
    
        const data = await createStudent(formData);
        setStudent([...students, data]);
        setFormData(initialValue);
       
    }
    useEffect(()=>{
        if(formData.name==="ADMIN"){
            alert("invalid name");
        }
    },[formData.name]);



    return (
        <Paper sx={{ width: 300, padding: 5, marginTop: 1, gap: 1, display: "flex", flexDirection: "column" }}>
            <TextField value={formData.name} onChange={handleChange} id="outlined-basic" label="Full Name" name="name" variant="outlined" />
            <TextField value={formData.age} onChange={handleChange} id="outlined-basic" label="Age" name="age" variant="outlined" />

            <TextField value={formData.email}  onChange={handleChange} id="outlined-basic" label="Email" name="email" variant="outlined" />

            <TextField value={formData.class} onChange={handleChange} id="outlined-basic" label="Class" name="class" variant="outlined" />
            <Button onClick={submitHanlder} variant="contained">SUBMIT</Button>
        </Paper>
    );
}