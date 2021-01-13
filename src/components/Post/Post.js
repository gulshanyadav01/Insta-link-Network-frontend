import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getPost } from "../store/Actions/post"; 


const Post = ({ getPost, post:{ post, loading, }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost])

    return (
        <div>
            test
        </div>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired


}
const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post); 
