import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { getPosts } from "../store/Actions/post"
import PostItem from "./PostItem"; 
import PostForm from "./PostForm"
import { GoPrimitiveDot } from "react-icons/go"

const Posts = ({ getPosts,  post: {posts, loading,  }}) => {

   useEffect(() => {
       getPosts()
   }, [getPosts])

   

    return (
        <div className = " w-full flex justify-between mt-16">
            <div className = "w-3/5">
                <div>
                    <h1 className = "font-extrabold m-4 text-royalblue-500"><GoPrimitiveDot className = "w-8 h-8 text-royalblue-500 inline"/> Time Line </h1>
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
                <h1 className = "font-extrabold  text-royalblue-500"><GoPrimitiveDot className = "w-8 h-8 text-royalblue-500 inline"/> News </h1>
                    <div className = "w-72 h-32 ml-2 bg-gulshan-dascar rounded">
                        hello 
                    </div>
                    <div className = "w-72 h-32 ml-2 mt-4 bg-gulshan-dascar rounded">
                        hello 
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
