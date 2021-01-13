import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { getPosts } from "../store/Actions/post"
import PostItem from "./PostItem"; 
import PostForm from "./PostForm"
import { AiFillFlag } from "react-icons/ai"
import { BsNewspaper } from "react-icons/bs"
import  Logo  from "../../asset/images/gulshan1.png"

const Posts = ({ getPosts,  post: {posts, loading,  }}) => {

   useEffect(() => {
       getPosts()
   }, [getPosts])

   

    return (
        <div className = " w-full flex justify-between mt-16">
            <div className = "w-3/5">
                <div>
                    <h1 className = "font-extrabold m-4 text-royalblue-500"><AiFillFlag className = "w-6 h-6 text-orange-600 inline"/> Time Line </h1>
                    <PostForm/>
                </div>
                    {
                        loading ? <div> Loading ....</div> :
                        <div className = "w-full">
                            {
                                posts.map((post) =>{
                                    return(
                                        <PostItem key = {post._id} post = {post}/>
                                    )
                                })
                            }
                
                        </div>
                    }

                </div>
               
                <div className = " flex-column mt-4">
                    <div>
                         <h1 className = "font-extrabold  text-royalblue-500"><BsNewspaper className = "w-6 h-6 text-scarlet-500 ml-2 inline"/> News </h1>
                    </div>
                    <div className = "mt-4">
                        <div className = "w-72 h-32 ml-2 bg-gulshan-dascar rounded">
                            <div className = "mt-2">
                                <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 rounded-full"/>
                            </div>
                           
                        </div>
                        <div className = "w-72 h-32 ml-2 bg-gulshan-dascar rounded">
                            <div className = "m-2">
                                <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 rounded-full"/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

Posts.propTypes = {

}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts }) (Posts);
