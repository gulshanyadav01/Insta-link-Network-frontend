import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { addLike, removeLike, deletePost } from "../store/Actions/post";
import Logo from "../../asset/images/gulshan1.png"  
import { FaHeart } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"


const Post = ({ auth,addLike, removeLike, deletePost,   post: { _id, name, text, avatar, user, likes, comments, date  } }) => {
    return (
    <div>
    <div className = "w-full ml-4 mt-8 h-auto bg-gulshan-dascar rounded-lg shadow">
                {/* <div className = "ml-4 mt-3 "> */}

               
                    <div className = "bg-gulshan-postimagediv h-16 rounded-t-lg">
                            <div className = "flex m-2">
                                <img src = {Logo} alt = {name} className = "w-12 h-12 mt-2 rounded-full"/>
                                <h1 className = "font-bold text-royalblue-600 capitalize ml-2 mt-2">{name}</h1>
                            </div>
                          
                    </div>
                            {/* <hr className = "w-full h-0.5 bg-gray-100"></hr> */}
                    <div className = "h-auto     ">
                            <h1 className = "ml-4 mr-4 text-gulshan-fontc" >{text}</h1>
                    </div>
                            {/* <hr className = "w-full h-0.5 bg-gray-100"></hr> */}
                    <div className = "flex">
                        <div className = "flex  w-full h-12 rounded-b-lg  bg-gulshan-postimagebot">
                            <div className = "flex">
                                    <button  onClick = {() => addLike(_id)}><FaHeart className = "w-6 h-6 ml-3  text-red-500 inline hover:text-red-700"/> </button> 
                                    <h1 className = "ml-1 mt-3 font-bold text-sm hover:text-royalblue-500 text-gulshan-fontc">{`likes(${likes.length})`} </h1>
                            </div>
                            <div className = "flex ">
                                    {/* <button className = "w-16 h-8 bg-blue-200 hover:bg-royalblue-300 ml-1 rounded " onClick = {() => removeLike(_id)}><AiOutlineDislike className = "w-8 h-8 ml-3  text-royalblue-500 inline"/></button>  */}
                                    <BiCommentDetail className = "w-6 h-6 mt-4 ml-12 text-gulshan-fontc hover:text-royalblue-500"/>
                                    <button className = "m-1"><Link to = {`/post/${_id}`} className = "font-bold text-sm hover:text-royalblue-600  ">Comment</Link></button>
                                    {/* {
                                        !auth.loading && user === auth.user._id && (
                                            <button className = " w-16 h-8  ml-1 bg-red-400 hover:bg-red-600 rounded font-bold text-xs" onClick = {() => deletePost(_id)}>Delete</button>
                                        )
                                    } */}

                            </div>

                        </div>
                    </div>
        {/* </div> */}
                
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
