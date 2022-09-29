import React ,{Component} from "react";

class ClassState extends Component{
    constructor(props)
    {
//         super();
//         this.state={
//             data:"Abu bakar"
//         }
//     }
//  apple() {

//     this.setState({
//         data:"Umair"
//     })
// }
//     render()
//     {
// return(
// <React.Fragment>
//     <h1>
//        Hello {this.state.data}
//     </h1>
//     <button className="btn btn-primary" onClick={()=>this.apple()}>Click on</button>
// </React.Fragment>
// )
// }
super(props);
this.state = {
  count: 0
};
}

render() {
return (
  <div>
    <h1>You clicked {this.state.count} times</h1>
    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
      Click me
    </button>
  </div>
);
}
}

export default ClassState;