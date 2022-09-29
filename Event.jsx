import React, { useState } from "react";

function Event()
{
const [cnmae , setname] = useState("CurrentName");
    const Update = () =>{
        setname("Its Done :anguished");

    }

    return(
        <>
        <div className="d-grid">
  <button type="button" className="btn btn-primary btn-block" onMouseMove={Update}>{cnmae}</button>
  </div>
        </>
    )
}

export default Event;