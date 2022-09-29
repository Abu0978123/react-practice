import React, { useState } from "react";
export default function App()
{
const [name , setName] = useState("Ali");
const [roll , setRoll] = useState(41);
const updateName =()=>{
    setName("Abubakar")
    setRoll(66);
}
return(
    <>
        <h1>My Name is {name}</h1>
        <h1>My roll is {roll}</h1>
        <button type="button" onClick={updateName}>Click me</button>
    </>
)
}