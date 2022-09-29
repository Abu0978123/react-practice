import React from 'react'

export default function Props(props) {
  return (
    <div>
   <h1> Hello {props.name} {props.email}</h1>
   <h2>Adress {props.other.adress}</h2>
    </div>
  )
}
