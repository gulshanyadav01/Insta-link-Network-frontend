import React from 'react'
import PropTypes from 'prop-types'
import Comment from "./Comment"; 
import CommentForm from './CommentForm';

const Comments = ({comments}) => {
    return (
        <div>
            <div className = "w-full h-auto">
                <CommentForm/>
                <div>
                    {
                        comments.map((comment) => {
                            return(
                                
                                <Comment text = {comment.text} user = {comment.user} />
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
        
    )
}

Comment.propTypes = {

}

export default Comments; 
