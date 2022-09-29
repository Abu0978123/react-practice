import React, { useState } from 'react'

export default function HooksRules() {
    const BioData = [

        {
            id:0, Name: "Abu Bakar", Roll: 33
        },
        {
            id:1, Name: "Afaq" , Roll: 53
        }, {
            id:3, Name: "Khan", Roll: 22
        },
        {
            id:4, Name: "Zubair" , Roll: 49
        }, {
            id:5, Name: "Shoaib", Roll: 17
        },
        {
            id:6, Name: "Osama" , Roll: 1
        }
    ]
    const [stt , settState] =  useState(BioData);
    function done(){
        settState([]);
    }
  return (
    <div>
    {
        stt.map((ArryMap)=>{
              return <h1> Name: {ArryMap.Name} and my Roll: {ArryMap.Roll} and my ID is {ArryMap.id}</h1>

        })
        
    }
    <button className="btn btn-info" onClick={done} > Click Me</button>
    </div>
  )
}
