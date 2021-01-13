import React, { Fragment, useEffect } from "react"; 
import Navbar from "./components/Layout/Navbar"; 
import Landing from "./components/Layout/Landing"; 
import  { Provider } from "react-redux"; 
import  store  from "./components/store/store";
import Alert from "./components/Layout/alert"; 
import { loadUser } from "./components/store/Actions/auth"
import setAuthToken from "./utils/setAuthToken";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute"; 
import CreateProfile from  "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import Register from "./components/auth/Register"; 
import Login from "./components/auth/Login";
import Upbar from "./components/Layout/Upbar";
import Profiles from "./components/Profiles/Profiles"; 
import Profile from "./components/Profile/Profile"
import Posts from "./components/posts/Posts" 
import Post from "./components/Post/Post"

if(localStorage.token){
  setAuthToken(localStorage.token);
}




const  App = () =>  {
  useEffect(() => {
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store = {store}>
      <Router>
          <Switch>
            <div className = "flex flex-wrap">
                  <div className ="w-2/12 h-screen bg-gulshan-50 " >
                    <Navbar/>
                  </div>
                  <div className = "w-10/12 h-auto bg-gulshan-50">
                  <Alert/>
                    {/* <Upbar/> */}
                    <Route exact path = "/profiles" component = {Profiles}/>
                    <PrivateRoute exact path = "/dashboard" component = {Dashboard}/>
                    
                    <PrivateRoute exact path = "/createprofile" component = {CreateProfile}/>
                    <PrivateRoute exact path = "/edit-profile" component = {EditProfile}/>
                    <PrivateRoute exact path = "/add-experience" component = {AddExperience}/>
                    <PrivateRoute exact path = "/add-education" component = {AddEducation}/>
                    <PrivateRoute exact path = "/posts" component = {Posts}/>
                    <Route exact path = "/register" component = {Register}/>
                    <Route exact path = "/login" component = {Login}/>
                    <Route exact path = "/profile/:userId" component = {Profile}/>
                    <Route exact path  = "/post/:id" component = {Post}/>
                </div>
            </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App
