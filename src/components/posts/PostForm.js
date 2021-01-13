import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addPost } from "../store/Actions/post"; 
import Logo from "../../asset/images/gulshan1.png"; 
import { FaTelegram } from "react-icons/fa"


const PostForm = ({ addPost }) => {
    const [text, setText ] = useState("");  
    return (
        <div className = "w-full h-auto m-4 bg-gulshan-inputdiv shadow rounded-lg  ">
            {/* <h1 className = "font-bold">Say Something </h1> */}
            <form onSubmit = {(e) => {e.preventDefault();
             addPost({text})
             setText("");
             }}>
             <div className = "flex m-2">
                 <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 ml-2 rounded-full"/>
                 <textarea
                cols = "45"
                rows ="2"
                className = "rounded mt-4 ml-2 bg-gulshan-inputdiv"
                onChange = {(e) => setText(e.target.value)} 
                placeholder = "Write Something .... "
                value = {text} />
             </div>
                <div className = "bg-gulshan-inputdivlow flex rounded-b">
                    <button className = "  m-2  "><FaTelegram className = "w-8 h-8 inline text-royalblue-400 hover:text-royalblue-600" /></button>
                    <div className = "w-24 h-8 m-2 px-1 py-1 rounded-2xl border border-royalblue-500 hover:bg-orange-500">
                        <h1 className = "text-sm text-gulshan-fontc hover:font-bold hover:text-black " >who can see</h1>
                    </div>

                </div>
            </form>
           
        </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(PostForm); 
