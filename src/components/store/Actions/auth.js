import {REGISTER_FAIL, 
    REGISTER_SUCCESS, 
    USER_LOADED,
    AUTH_ERROR, 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
} from "./Types"; 
import axios from "axios"; 
import {setAlert} from "./alert"; 
import setAuthToken from "../../../utils/setAuthToken";


// LOAD USER 
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);

    }
    try {
        const res = await axios.get("http://localhost:5000/api/auth/"); 
        dispatch({
            type:USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:AUTH_ERROR,

        })
        
    }
}

// Register User 
export const register = ({name, email, password, history }) => async dispatch =>  {
    
    // const config = {
    //     headers: {
    //         "Content-Type":"application/json"
    //     }
    // }
    // const body = JSON.stringify({name, email, password}); 
    try{
        const newUser = {
            name,
            email,
            password
        }
        const res  = await axios.post("http://localhost:5000/api/users", newUser); 
        // console.logif(isAuthenticated){
        //      console.log("hi")
        //     return <Redirect to = "/dashboard" />
        // }(res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        }); 
        dispatch(loadUser());
        dispatch(setAlert("register successfully", 'success')); 
        history.push("/posts")

    }
    catch(err){
        // console.log(err.message); 
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))); 
        }
        dispatch({
            type: REGISTER_FAIL

        })
    }


}


// login user 
export const login  = ({ email, password }) => async dispatch =>  {
    
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({ email, password}); 
    try{
       
        const res  = await axios.post("http://localhost:5000/api/auth", body, config); 
        // console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        }); 
        dispatch(loadUser());
        dispatch(setAlert("login successfully", 'success')); 

    }
    catch(err){
        // console.log(err.message); 
        const errors = err.response.data.errors; 
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger'))); 
        }
        dispatch({
            type: LOGIN_FAIL

        })
        dispatch(setAlert("login fail" ,"fail")); 
    }


}


// Logout / clear profile 

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
    dispatch(setAlert("logout successfully", 'success')); 
    
    dispatch({
        type:CLEAR_PROFILE
    })
    // dispatch(setAlert("logout fail", "fail")); 
}