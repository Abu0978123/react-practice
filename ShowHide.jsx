import React, { useState } from "react";

function ShowHide()
{
const [status, setStatus] =  useState(false);


return(
    <>
    {
         status? 
         <h1>Hello World..</h1>
          :null
    }
    <h1>
    {/* <button className="btn btn-primary" onClick={()=>setStatus(false)}>Hide</button>
    <button className="btn btn-primary" onClick={()=>setStatus(true)}>Show</button>
     */
    }

    <button className="btn btn-primary" onClick={()=>setStatus(!status)}>ShowHide</button>

    </h1>
    </>
)
}
export default ShowHide;