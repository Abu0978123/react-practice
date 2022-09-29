import React from "react";

function ControlComp(){
    const shot = () =>{
        alert("Great Shot");
    }



return( 
    <>
        <div> <h1>ControlComponent 
        <input type="text" defaultValue="" placeholder="Enter Your Name"  className="w-100"/> 
        </h1>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={shot}>Sign in</button>
    </>
);
}

export default ControlComp;