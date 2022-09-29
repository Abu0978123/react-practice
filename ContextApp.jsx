import React, { createContext } from 'react'
import ContextA from './ContextA'

const MyName = createContext();
const Class = createContext();

export default function App() {
  return (
    <div>
    <MyName.Provider value ={"Abu Bakar "}>
    <Class.Provider value={"BSIT SEC B"}>
      <ContextA/>
      </Class.Provider>
      </MyName.Provider>
    </div>
  )
}
export {MyName ,Class};
