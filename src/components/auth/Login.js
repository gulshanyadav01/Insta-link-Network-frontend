import React, {useState} from 'react';
import { connect } from "react-redux"; 
import {setAlert}  from "../store/Actions/alert"; 
import PropTypes from "prop-types"
import {login} from "../store/Actions/auth"; 
import { Redirect } from 'react-router-dom';

 const Login = ({setAlert, login, isAuthenticated}) => {

     const [formData, setFormData] = useState({
        
         email:"",
         password:"",
         password2:"", 
     })
     const onChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})       
     }
     const { email, password, password2} = formData; 
     
     const onSubmit = (e) => {
         e.preventDefault(); 
         if(password !== password2){
             console.log("not match");
            setAlert("password do not match", 'danger');  
         }
         else{
            //  console.log(formData);
             login({ email, password}); 
         }
         
     }
     
     // redirect if logged in 
     if(isAuthenticated){
         return <Redirect to = "/posts" />
     }
     

    return (
        <div className = "mx-auto my-auto w-72 h-72 mt-32">
            <form onSubmit = {onSubmit} >
             <div className = "w-72 h-auto bg-white shadow-lg rounded">
                <div className = "mt-8 mb-4 ml-20 ">
                    <h1 className = "font-bold text-mango-600 underline">Login Yourself</h1>
                </div>
                
                <div>
                    <input 
                        className = "focus:ring-red-400 focus:ring-2 px-2 py-2 m-2 w-11/12"
                        type = "email"
                        placeholder = 'enter your email'
                        name = "email" 
                        value = {email}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                  
                   <input 
                        className = "focus:ring-red-400 focus:ring-2 px-2 py-2 m-2 w-11/12"
                        type = "password"
                        placeholder = 'enter your password'
                        name = "password" 
                        value = {password}
                        onChange = {(e) => onChange(e)}
                        
                    /> 
                   
                </div> 
                <div>
                    <input 
                        className = "focus:ring-red-400 focus:ring-2 px-2 py-2 m-2 w-11/12"
                        type = "password"
                        placeholder = 'enter your password again'
                        name = "password2" 
                        value = {password2}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                    <input 
                        className = " px-2 font-bold  py-2 m-2 w-11/12"
                        type = "submit"
                        value = "submit" 
                        
                    /> 
                </div>
                </div> 
            </form>
        </div>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = (state ) => ({

    isAuthenticated: state.authReducer.isAuthenticated
})


export default connect(mapStateToProps, {setAlert, login})(Login); 