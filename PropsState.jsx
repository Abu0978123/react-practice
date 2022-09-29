import React, { useState } from 'react'

export default function PropsState(props) {
    const [name, setName]=useState("ABu Bakar");
   function update()
    {
        setName(props.name)
    }
  return (
    <div>Hello {name}
    <button className='btn btn-primary' onClick={update}>Click me </button>
    </div>
  )
}
