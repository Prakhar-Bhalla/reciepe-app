import { useState } from "react";
import "./Form.css";

export const Form = () => {
    const [form,setForm] = useState();
    const reflectChange = (event) => {
        const {value,name} = event.target;
        setForm({
            ...form,
            [name] : value
        })
    }
    
    const addRec = async(event) => {
        event.preventDefault();
        fetch("http://localhost:3005/receipe", {
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                "content-type" : "application/json"
            }
        })
    }

    return <form onSubmit={addRec}>
    <input name="title" placeholder="Enter Name" onChange={reflectChange}/>
    <input name="ingredients" placeholder="Input ingredients" onChange={reflectChange}/>
    <input name="timeToCook" placeholder="Time to cook in minutes" onChange={reflectChange} type="number"/>
    <input name="image" placeholder="Image link" onChange={reflectChange}/>
    <input name="instruction" placeholder="Instructions" onChange={reflectChange}/>
    <input type="submit"/>
    </form>
}