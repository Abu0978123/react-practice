import React,{useContext} from 'react'
import { MyName , Class } from './App'


export default function ContextC() {

  
    const myName = useContext(MyName)
    const myClass = useContext(Class)
    return (
       <h1>
        my name is {myName} and i am studing in last {myClass}
        </h1>
        
    );
}
