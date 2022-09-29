import React ,{memo} from 'react'


 const Memo =(props)=> {
    console.warn(`inner component `, props.data);
  return (
    <div >
        <h1>Home Component </h1>
    </div>
  )
}
export default memo(Memo);
