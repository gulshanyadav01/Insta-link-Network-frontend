import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addPost } from "../store/Actions/post"; 
import Logo from "../../asset/images/gulshan1.png"; 
import { FaTelegram } from "react-icons/fa"
import { BiImageAdd } from "react-icons/bi"
// import FileUpload from "./FileUpload"; 


const PostForm = ({ addPost }) => {
    const [text, setText ] = useState("");  
    const [selectFile, setSelectFile ] = useState(); 

    const [showFile, setShowFile] = useState(); 

    const fileSelectHandler = (event) => {
        setSelectFile(event.target.files[0]); 
        
    }

    const Submit = (e) => {
        e.preventDefault(); 
        const fd = new FormData();
        // if(selectFile){
            fd.append("image", selectFile, selectFile.name); 
        // } 
        // if(text){
            fd.append("text", text); 
        // }
       
       
        addPost(fd); 
        setText("");
        setSelectFile();
    }


    return (
        <div className = "w-full h-auto m-4 bg-gulshan-inputdiv shadow rounded-lg border-l-2 border-gulshan-dascar hover:border-l-2 hover:border-limegreen-500 ">

            <form onSubmit = {Submit}>
             <div className = "flex m-2">
                 <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 rounded-full"/>
                 <div>
                    <textarea
                    cols = "50"
                    rows ="2"
                    className = "rounded mt-4 ml-2 bg-gulshan-inputdiv"
                    onChange = {(e) => setText(e.target.value)} 
                    placeholder = "Write Something .... "
                    value = {text} />
                    {showFile && 
                    <div className = "relative  bg-gulshan-dascar w-ful h-64 rounded shadow flex">
                    <input type = "file" accept = "./jpg,.png,.jpeg" className = " text-orange-500 m-1 mt-1" onChange =  {fileSelectHandler} />
                    {/* <img src = {Logo} alt = "preview" className = " m-1 w-3/5 h-60 "/> */}
            
                </div>}
                 </div>
                 

             </div>
                <div className = "bg-gulshan-inputdivlow flex rounded-b-lg">
                    <button className = "m-2"><FaTelegram className = "w-8 h-8 inline text-royalblue-400 hover:text-royalblue-600" /></button>
                    <div className = "w-8 h-8 mt-2 rounded-full bg-orange-600  ">
                        <BiImageAdd className = "w-6 h-6 ml-1 mt-1 text-black cursor-pointer  " onClick = {() => {setShowFile(!showFile)}}/>
                    </div>
                    <div className = "w-24 h-8 m-2 px-1 py-1 rounded-2xl  bg-gulshan-blur border border-royalblue-500 hover:bg-gulshan-blu">
                        <h1 className = "text-sm text-royalblue-500 font-bold hover:font-bold hover:text-royalblue-500 " >who can see</h1>
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
