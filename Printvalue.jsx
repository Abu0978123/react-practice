import React, { useState } from "react";

function Printvalue()
{
const [data, setData] =  useState(true);
const [print, setPrint] =  useState(false);

function getData(val)
{
    console.warn(val.target.value);
    setData(val.target.value);
    setPrint(false)
}
return(
    
    <>
    <h1>
        <div className="App">
            {
                print?
                <h1>{data}</h1>
                :null
            }
           <input type="text" onChange={getData} ></input> 
           <button className="btn btn-info" onClick={()=>setPrint(true)}></button>
        </div>
        </h1>
    </>
)
}

export default Printvalue;