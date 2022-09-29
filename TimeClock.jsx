import React, { useState } from "react";

const TimeClock = () => 
{
let newTime = new Date().toLocaleTimeString();
const [cTime , setTime] = useState();

const Update = () =>
{
newTime = new Date().toLocaleTimeString();
setTime(newTime);
}

setInterval(Update, 1000);
return(
<>
<h1>{cTime}</h1>
{/* <div class="d-grid">
  <button type="button" class="btn btn-primary btn-block" onClick={Update}>Click Me</button>
  </div> */}
</>
)
};

export default TimeClock;