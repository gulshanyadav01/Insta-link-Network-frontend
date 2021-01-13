import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { AiOutlineLike } from "react-icons/ai"; 
import { addLike, removeLike, deletePost } from "../store/Actions/post";
import { AiOutlineDislike } from "react-icons/ai";
import Logo from "../../asset/images/gulshan1.png"  


const Post = ({ auth,addLike, removeLike, deletePost,   post: { _id, name, text, avatar, user, likes, comments, date  } }) => {
    return (
        <div>
    <div className = "w-6/12 ml-4 mt-4 h-auto bg-white rounded-lg shadow">
        <div className = "ml-4 mt-3 ">

               
                    <div className = "flex">
                            <img src = {Logo} alt = {name} className = "w-12 h-12 mt-2 rounded-full"/>
                            <h1 className = "font-bold capitalize ml-2 mt-2">{name}</h1>
                    </div>
                            {/* <hr className = "w-full h-0.5 bg-gray-100"></hr> */}
                    <div className = "w-full ml-3 mt-3 h-auto">
                            <h1 >{text}</h1>
                    </div>
                            {/* <hr className = "w-full h-0.5 bg-gray-100"></hr> */}
                    <div className = "flex mt-2">
                        <div className = "flex  w-full h-12 ">
                            <div className = "flex">
                                    <button className = " w-16 h-8 bg-blue-200 rounded text-royalblue-700 hover:bg-royalblue-300" onClick = {() => addLike(_id)}><AiOutlineLike className = "w-8 h-8 ml-3  text-royalblue-500 inline"/>{likes.length} </button> 
                            </div>
                            <div className = "flex ">
                                    <button className = "w-16 h-8 bg-blue-200 hover:bg-royalblue-300 ml-1 rounded " onClick = {() => removeLike(_id)}><AiOutlineDislike className = "w-8 h-8 ml-3  text-royalblue-500 inline"/></button> 
                                    <button className = "w-20 h-8 bg-blue-200 ml-1 rounded hover:bg-royalblue-400 "><Link to = {`/post/${_id}`} className = "font-bold text-xs ">Comment</Link></button>
                                    {
                                        !auth.loading && user === auth.user._id && (
                                            <button className = " w-16 h-8  ml-1 bg-red-400 hover:bg-red-600 rounded font-bold text-xs" onClick = {() => deletePost(_id)}>Delete</button>
                                        )
                                    }

                            </div>

                        </div>
                    </div>
        </div>
                
    </div>
            
            
            
            
        </div>
    )
}

Post.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike:PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired



}
const mapStateToProps = state => ({
    auth: state.authReducer,
    
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost}) (Post);
