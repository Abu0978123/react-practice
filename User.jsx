import React, { Component } from 'react'

export default class User extends Component {
    componentWillUnmount()
    {
        alert("User Component deleted")
    }
    render() {
        return (
            <div>
               <h1>
               <ol>
               <li>Abu bakar</li>
                <li>abubakar0978123@gmail.com</li>
                <li>03119010814</li>
                </ol>
                </h1> 
            </div>
        )
    }
}


