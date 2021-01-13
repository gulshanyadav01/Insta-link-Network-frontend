import axios from "axios"; 
import { setAlert } from './alert'; 
import { 
    ADD_POST,
    DELETE_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    GET_POST
} from  "./Types";

// get posts 
export const getPosts = () => async dispatch => {
    try{
        const res = await axios.get("http://localhost:5000/api/post/")
        dispatch({
            type: GET_POSTS,
            payload: res.data

        })
        
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })

    }
}


//ADD  LIKES 
export const addLike = (postId) => async dispatch => {
    try{
        const res = await axios.put(`http://localhost:5000/api/post/like/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {postId, likes: res.data}

        })
        
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })

    }
}


//remove   LIKES 
export const removeLike  = (postId) => async dispatch => {
    try{
        const res = await axios.put(`http://localhost:5000/api/post/unlike/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {postId, likes: res.data}

        })
        
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })

    }
}

// delete posts 

export const deletePost = postId => async dispatch => {
    console.log("hi i am delete post")
    try{
        await axios.delete(`http://localhost:5000/api/post/${postId}`); 
        dispatch({
            type: DELETE_POST,
            payload: postId
        })
        dispatch(setAlert("Post removed", "success"));

    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })
       

    }
}

//  create post 

export const  addPost = formData => async dispatch => {
    console.log("hello bhai i am add post")
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    try{
        const res = await axios.post("http://localhost:5000/api/post", formData, config ); 
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
        dispatch(setAlert("Post Created", "Success")); 

    }catch(err){
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })


    }
}

//get single post by id 
export const getPost = (id) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:5000/api/post/${id}`)

        dispatch({
            type: GET_POST,
            payload: res.data

        })
        
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status}
        })

    }
}


