import React ,{Component} from "react";

export default class ClassProps extends Component
{

    render()
    {
        return(
            <>
                <h1>Hello Dear : {this.props.name} 😧</h1>
                <h1>Email: {this.props.email}</h1>
                <h1>Phone:{this.props.phone} </h1>
            </>
        )
    }
}
