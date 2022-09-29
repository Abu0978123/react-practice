import React from "react";
class ClassState2 extends React.Component{
    constructor()
{
        super();
        this.state={
            // data:"Abu bakar"
            data:1
        }
    }
 apple() {

    this.setState({
        // data:"Professor Abu bakar"
        data:this.state.data+1
    })
}
    render()
    {
return(
<>
    <h1>
      Counting == {this.state.data}
    </h1>
    <button className="btn btn-primary"
     onClick={()=>this.apple()}>
     Click on</button>
</>
)
}}
export default ClassState2;