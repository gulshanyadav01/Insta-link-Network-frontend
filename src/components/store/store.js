import { applyMiddleware } from "redux"

import { createStore} from "redux"; 
import {composeWithDevTools} from "redux-devtools-extension"; 
import thunk from "redux-thunk"; 
import rootReducer from "./Reducers/index"; 

const initialState = {}; 

const middleware = [thunk]; 

const store =  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); 

export default store;
