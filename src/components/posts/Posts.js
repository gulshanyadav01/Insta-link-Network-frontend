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
        <div>
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
    )
}

Posts.propTypes = {

}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts }) (Posts);
