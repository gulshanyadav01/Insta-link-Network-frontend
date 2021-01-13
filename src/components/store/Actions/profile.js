import axios from "axios"; 
import {setAlert} from "./alert"; 
import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    ACCOUNT_DELETED,
    CLEAR_PROFILE,
    GET_PROFILES,
    GET_REPOS
} from "./Types";

// GET THE CURRENT USER 

export const getCurrentProfile = () => async dispatch => {
    dispatch({
        type:CLEAR_PROFILE
    })
    try{
        const res = await axios.get("http://localhost:5000/api/profile/me"); 
        
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        }); 

    }catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        })

    }
}

// get all profiles 
export const getProfiles = () => async dispatch => {
    try{
        const res = await axios.get("http://localhost:5000/api/profile");
        dispatch({
            type:GET_PROFILES,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

// get profile by id 
export const getProfileById = (userId) => async dispatch => {
    console.log("hi")
    try{
        const res = await axios.get(`http://localhost:5000/api/profile/user/${userId}`)
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })

    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}
 
// get github repos
export const getGithubRepos = username => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:5000/api/profile/github/${username}`)
        dispatch({
            type:GET_REPOS,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })

    }
}


// create or update the profile
export const createProfile = (formData, history, edit = false) => async dispatch  => {
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res = await axios.post("http://localhost:5000/api/profile/",formData, config); 
        dispatch({
            type:GET_PROFILE,
            payload: res.data

        }); 
        dispatch(setAlert(edit ? "profile updated" : "profile created")); 
        if(!edit){
            history.push("/dashboard"); 
        }
        if(edit){
            history.push("/dashboard")
        }
    } catch (err) {
        const errors = err.response.data.errors; 

        if(errors){
            errors.forEach(error => dispatch(setAlert(err.msg, "danger"))); 
        }

        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        }) 
        
    }


}


// ADD EXPERINCE 
export const addExprience = (formData, history) => async dispatch => {
    try{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res  = await axios.put("http://localhost:5000/api/profile/experience", formData, config); 
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        }); 
        dispatch(setAlert("experience added", 'success')); 
        history.push("/dashboard"); 
    }catch(err){
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "danger"))); 

        }
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        }); 

    }
}


// ADD educatoin 
export const addEducation = (formData, history) => async dispatch => {
    console.log('add education')
    try{
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }
        const res  = await axios.put("http://localhost:5000/api/profile/education", formData, config); 
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        }); 
        dispatch(setAlert("education added", 'success')); 
        history.push("/dashboard"); 

    }catch(err){
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "danger"))); 

        }
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        }); 

    }
}


// delete experience 

export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/profile/experience/${id}`)
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        }); 
        dispatch(setAlert("experience removed", 'success')); 

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        }); 
        
    }
}

// delete education 

export const deleteEducation = id => async dispatch => {
    console.log("hello")
    try {
        const res = await axios.delete(`http://localhost:5000/api/profile/education/${id}`)
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        }); 
        dispatch(setAlert("education  removed", 'success')); 


    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        }); 
        
    }
}


// delete account and profile 

export const deleteAccount = (history) => async dispatch => {
    console.log("delete account"); 
    if(window.confirm("are you sure this cannot be undone")){
        try {
                 await axios.delete(`http://localhost:5000/api/profile/`)
            dispatch({
                type:CLEAR_PROFILE
            }); 
            dispatch({
                type:ACCOUNT_DELETED
            })
            

            dispatch(setAlert("you account has been deleted", 'success')); 
            history.push("/login"); 
        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg: error.response.statusText, status: error.response.status}
            }); 
            
        }

    }
    
}


