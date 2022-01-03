import { useEffect, useState } from "react"
import { nanoid } from "nanoid";

export const List = ({sendData}) => {
    const [list,setList] = useState([]);
    useEffect(() => {
        const getData = async() => {
            let res = await fetch("http://localhost:3005/receipe");
            let data = await res.json();
            setList([...data]);
        }
        getData();
    },[]);

    const senddata = (event) => {
        sendData(event.target.childNodes[0].innerText);
    }

    return <div>
        {list.map((el) => {
            let id = nanoid(7);
            return <div onClick={senddata} key={id} style={{backgroundColor: "aquamarine", margin: "10px"}}>
                <p style={{display: "none"}}>{el.id}</p>
                <p>Title: {el.title}</p>
                <p>Cooking time: {el.timeToCook}</p>
            </div>
        })}
    </div>
}