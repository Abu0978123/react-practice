import React, { useState } from "react";
// import "./App.css";
const Hooks = () =>{
    // const state = useState();
    const [count , setcount] = useState(0);
    const fun=() => 
    {setcount(count + 1)}
    return(
        
        <React.Fragment>

            <div className="d-grid gap-2">
            
            <h1>{count}</h1>
<button
 id="btn" className = "btn btn-success" 
onClick={fun} >
Click Me
</button>
</div>
        </React.Fragment>

    )
};

export default Hooks;