import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from "react-redux"; 
// import { addPost } from "../store/Actions/post"; 
import Logo from "../../asset/images/gulshan1.png"; 
import { FaTelegram } from "react-icons/fa"


const CommentForm = ({ addPost }) => {
    const [text, setText ] = useState("");  
    return (
        <div className = "w-full h-auto rounded-lg  bg-gulshan-inputdiv   ">
            {/* <h1 className = "font-bold">Say Something </h1> */}
            <form onSubmit = {(e) => {e.preventDefault();
             addPost({text})
             setText("");
             }}>
             <div className = "flex ml-2 mt-2 mb-2">
                 <img src = {Logo} alt = "hello" className = "w-8 h-8 mt-2 rounded-full"/>
                 <textarea
                cols = "46"
                rows ="1"
                className = "rounded mt-4 ml-2 bg-gulshan-inputdiv"
                onChange = {(e) => setText(e.target.value)} 
                placeholder = "comment ..."
                value = {text} />
                 <div className = "bg-gulshan-inputdivlow flex rounded-b-lg">
                    <button className = " ml-8 mt-2 mb-2"><FaTelegram className = "w-8 h-8 inline text-royalblue-400 hover:text-royalblue-600" /></button>
                </div>

                 </div>
               
                {/* </div> */}
                {/* <div className = "bg-gulshan-inputdivlow flex rounded-b-lg">
                    <button className = "  m-2  "><FaTelegram className = "w-8 h-8 inline text-royalblue-400 hover:text-royalblue-600" /></button>
                </div> */}
            
            </form>
           
        </div>
    )
}

// CommentForm.propTypes = {
//     addPost: PropTypes.func.isRequired
// }

export default CommentForm 
