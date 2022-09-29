import React, { useState } from "react";

function HooksChalange()
{
    let newTime = new Date().toLocaleTimeString();
    const [ctime , settime] = useState(newTime);
    const update = () =>{
     newTime = new Date().toLocaleTimeString();
     settime(newTime);

    }
    // const [curr , setcurr] = useState(newTime);
    return(
        <> 
        <h1>{ctime}</h1>
        <div class="d-grid">
  <button type="button" class="btn btn-primary btn-block" onClick={update}>Click Me</button>
</div>
        </>
    );
};
export default HooksChalange;