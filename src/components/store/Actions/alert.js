import {SET_ALERT, REMOVE_ALERT} from "./Types"; 
import uuid from "react-uuid"; 

export const setAlert = (msg, alertType) => dispatch =>  {
    const id = uuid(); 
    dispatch({
        type:SET_ALERT,
        payload:{msg, alertType, id }
    })
    
    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), 5000); 

}