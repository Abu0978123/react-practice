import React, { useState } from 'react';
const UseState=()=>
{
    const [data , setdata]=useState(0);
    function update()
    {
        setdata(data+1)
    }
    console.warn("___________");
return(

        <>
       <h1>{data}</h1>
       <button className='btn btn-primary' onClick={update}>Click Me</button>
        </>
    );
}
export default UseState;