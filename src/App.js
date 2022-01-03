import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/ListView';
import { Info } from './components/Info';
import { useState } from 'react';

function App() {
  const [data,setData] = useState();
  const sendData = async(id) => {
    let res = await fetch(`http://localhost:3005/receipe/${id}`);
    let rec = await res.json();
    setData(rec);
  }
  return (
    <div>
    <div style={{display: "flex", justifyContent: "space-around"}}>
    <div style={{width: "200px"}}>
      <Form/>
    </div>
    <div style={{width: "500px", height: "300px", overflow: "scroll", border: "1px solid crimson"}}>
      <List sendData={sendData}/>
    </div>
    </div>
    <div style={{width : "1000px", margin : "30px auto", border : "1px solid black"}}>
    </div>
      <Info data={data}/>
    </div>
  );
}

export default App;
