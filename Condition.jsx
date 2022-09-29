// import { useState } from "react";

function Condition()
{
    // const [Login , ] = useState(10)
    const Login = 3;
    return(
        <>{
            Login===1?
           <h1>Student Component1</h1>
           :Login===2?<h1>Student Component2</h1>
           :<h1>Student Component for all</h1>
           
        }
        </>
    )
}
export default Condition;