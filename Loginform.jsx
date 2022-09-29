import React, { useState } from 'react'

export default function Loginform() {
    const [name , setname]= useState("");
    const [opt , setopt]= useState("");
    const [tnc , settnc]= useState("Empty");
    function getdata(e)
    {
        console.warn(name,opt,tnc)
        e.preventDefault()
    }

  return (
    <div>
        <form action="/action_page.php" onSubmit={getdata}>
  <div class="form-group">
    <label for="name" >Name:</label>
    <input type="text" class="form-control" id="email" onChange={(e)=>setname(e.target.value)}/>
  </div>Category:
  <div class="form-group">
    <select onChange={(e)=>setopt(e.target.value)}>
        <option>Selection Option </option>
        <option> Maths</option>
        <option>Urdu</option>
    </select>
  </div>
  <div class="checkbox">
    <label><input type="checkbox" onChange={(e)=>settnc(e.target.checked="Checkedd")}/> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default" >Submit</button>
</form>
    </div>
  )
}
