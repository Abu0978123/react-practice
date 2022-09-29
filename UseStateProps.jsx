import React, { useState } from 'react'

export default function UseStateProps() {
   const [name, setName] = useState(true);
   const [print, setPrint] = useState(false);
 function update(val)
 {
    setName(val.target.value)
    // setPrint(false)
 }
  return (
    <div className='App'>
    {
        print?
        <h1> {name}</h1>
        :null
    }
     <input type="text" onChange={update}/>
     <button className='btn btn-primary' onClick={()=>setPrint(true)}>click for change </button> 
     </div>
   
  )
}