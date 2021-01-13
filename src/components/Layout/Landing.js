import React from 'react'
import Register from "../auth/Register"; 
import Login from "../auth/Login"
import {Route } from "react-router-dom"; 
const  Landing = () =>  {
    return (
        <div >
            <h1 className ="bg-gulshan-50 text-gulshan-100 shadow-lg rounded">Landing Page is Ok </h1>
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/login" component = {Login} />
        </div>
    )
}

export default Landing
