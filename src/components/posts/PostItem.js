import React, {  useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"; 
import { connect } from "react-redux"; 
import { addLike, removeLike, deletePost } from "../store/Actions/post";
import Logo from "../../asset/images/gulshan1.png"  
import { FaHeart } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"
import Comments from "../Post/Comments"; 
import { BsThreeDots } from "react-icons/bs"; 
import { MdDelete } from "react-icons/md"
import {BsBookmarkFill } from "react-icons/bs"
// bg-gulshan-postimagediv


const Post = ({ auth,addLike, removeLike, deletePost ,  post: { _id, name, text, avatar, user, likes, comments, date, image  } }) => {
    const [showComment, setShowComment] = useState(false); 
    const [showDiv, setShowDiv] = useState(false); 

    return (
    <div>
    <div className = "w-full ml-4 mt-8 h-auto bg-gulshan-dascar rounded-lg shadow border-l-2 border-gulshan-dascar hover:border-l-2 hover:border-limegreen-500 ">
                    <div className = " bg-gulshan-dascar h-16 flex justify-between rounded-t-lg">
                            <div className = "flex m-2">
                                <Link to = {`/profile/${user}`}><img src = {Logo} alt = {name} className = "w-12 h-12 mt-2 rounded-full"/></Link>
                                <h1 className = "font-bold text-royalblue-600 capitalize ml-2 mt-2">{name}</h1>
                            </div>
                            {
                                showDiv &&  !auth.loading && user === auth.user._id && (
                                    <div className = "w-2/5 mt-8 ml-24 rounded shadow-xl relative h-52 bg-gulshan-inner">
                                     
                                        <button className = "w-full h-10 rounded bg-gulshan-dascar hover:bg-black text-scarlet-500 font-bold hover:font-bold" onClick = {() => deletePost(_id)}><MdDelete className = "inline w-8 h-8" />DeletePost </button>
                                        <button className = "w-full h-10 mt-1 rounded bg-gulshan-dascar hover:bg-black text-limegreen-500 font-bold hover:font-bold" onClick = {() => deletePost(_id)}><BsBookmarkFill className = "inline w-8 h-8" />SavePost </button>
                                    </div>
                                )
                            }
                            <div className = ''>
                                     {
                                        !auth.loading && user === auth.user._id && (
                                            <BsThreeDots className = "w-6 h-6 mr-3 cursor-pointer text-gulshan-fontc " onClick = {() => {
                                                setShowDiv(!showDiv)
                                                
                                            }}/>
                                        )
                                    }
                              
                            </div>
                          
                    </div>
                    <div className = "h-auto">
                            <h1 className = "ml-4 mr-4 text-royalblue-300" >{text}</h1>
                            {image && <img src = {image} alt = {text}  className = "w-full object-fill"/>}
                    </div>
                    <div className = "flex">
                        <div className = "flex  w-full h-12 rounded-b-lg  bg-gulshan-postimagebot">
                            <div className = "flex">
                                    <button  onClick = {() => addLike(_id)}><FaHeart className = "w-6 h-6 ml-3  text-red-500 inline hover:text-red-700"/> </button> 
                                    <h1 className = "ml-1 mt-3 font-bold text-sm hover:text-royalblue-500 text-gulshan-fontc">{`likes(${likes.length})`} </h1>
                            </div>
                            <div className = "flex ">
                                    <BiCommentDetail className = "w-6 h-6 mt-4 ml-12 cursor-pointer text-gulshan-fontc hover:text-royalblue-500" onClick = {() => { setShowComment(!showComment)}} />
                                    <h1 className = "ml-1 mt-3 cursor-pointer mr-1 text-gulshan-fontc font-bold hover:text-royalblue-500" onClick = {() => { setShowComment(!showComment)}} > comments</h1>
                                    {/* {
                                        !auth.loading && user === auth.user._id && (
                                            <button className = " w-16 h-8  ml-1 bg-red-400 hover:bg-red-600 rounded font-bold text-xs" onClick = {() => deletePost(_id)}>Delete</button>
                                        )
                                    } */}
                            </div>   
                        </div>
                    </div>
        
                 <div>
                        {showComment &&  comments.length > 0 &&   (
                        <div>
                            <Comments comments = {comments} />
                        </div>)}
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
    profile:state.profile
    
})

export default connect(mapStateToProps, { addLike, removeLike,  deletePost}) (Post)