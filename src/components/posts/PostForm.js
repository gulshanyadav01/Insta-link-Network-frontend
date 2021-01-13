import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addPost } from "../store/Actions/post"; 
import Logo from "../../asset/images/gulshan1.png"; 


const PostForm = ({ addPost }) => {
    const [text, setText ] = useState("");  
    return (
        <div className = "w-6/12 h-auto m-4 bg-white shadow rounded-lg  ">
            {/* <h1 className = "font-bold">Say Something </h1> */}
            <form onSubmit = {(e) => {e.preventDefault();
             addPost({text})
             setText("");
             }}>
             <div className = "flex m-2">
                 <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 ml-2 rounded-full"/>
                 <textarea
                cols = "50"
                rows ="2"
                className = "rounded mt-4 ml-1"
                onChange = {(e) => setText(e.target.value)} 
                placeholder = "say something "
                value = {text} />
             </div>
             <hr className = "w-full h-0.5 bg-gray-100"></hr> 
                <button className = " w-16 h-8 m-2 bg-blue-300 hover:bg-royalblue-500 rounded">Add</button>
            </form>
           
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(PostForm); 
