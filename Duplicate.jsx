import React, { Component } from 'react'

export default class Duplicate extends Component {
    constructor()
    {
        super();
        this.state={
            data : 0
        }
       
    }
    apple()
    {
        // this.setState({data: "Saleem"})
        this.setState({data: this.state.data+1})
    }
  
  render() {
    console.warn("___________");
    return (
      <div> <h1>{this.state.data}</h1>
      <button className='btn btn-primary' onClick={()=> this.apple()}>Click me for class</button>
      </div>
      
    )
  }
}
