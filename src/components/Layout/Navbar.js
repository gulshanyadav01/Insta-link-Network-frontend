import React from 'react'
import {Link } from "react-router-dom"; 
import {connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import {logout} from "../../components/store/Actions/auth"; 
import {GoDashboard} from "react-icons/go"
import {FaPeopleCarry } from "react-icons/fa"
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { GoRocket } from "react-icons/go"
import Logo from "../../asset/images/gulshan1.png";
import { CgFeed } from "react-icons/cg"; 
// import {alert} from "./alert";
// import Alert from "./alert"; 

const  Navbar = ({auth: {isAuthenticated, loading}, logout})  => {

    const Logout = () => {
        logout(); 
    }
    const guestLink = (
        <div>
            <h1  className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FaPeopleCarry className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/profiles">Developers</Link> </h1>
            <h1 className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FiLogIn className = "inline text-mango-600  hover:text-white"/>  <Link to = "/login">Login</Link></h1>
            <h1 className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3  font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoRocket className = "inline  text-gulshan-900 hover:text-white"/> <Link to = "/register" className = "active:text-blue-100">Register</Link> </h1>
        </div>
    )
    const alwaysLink = (
        <div>
            <h1 className = 'mt-8 ml-5 mr-1 bg-white hover:bg-gulshan-300 px-2 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoDashboard className = "inline text-limegreen-500  hover:text-white " /><Link to =  "/dashboard"> Dashboard</Link></h1>
            <h1  className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FaPeopleCarry className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/profiles">Developers</Link> </h1>
            <h1  className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><CgFeed className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/posts">Posts</Link> </h1>
            <h1 className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow ' ><button  onClick = {Logout} className = "font-bold"> <FiLogOut className = "inline text-red-700  hover:text-white"/> Logout </button></h1>
        </div>
    )

    return (
        <div className = "w-full">
            <div className = "mt-8 ml-4 mr-2">
                {/* <h1 className = "text-2xl font-bold text-mango-500" >Social Network</h1> */}
                {/* <Alert/> */}
            </div>
            <div className ="w-50 ml-4 mt-16  h-52 border-1 border-gray-100 bg-white  shadow rounded">
            <div className = "w-50 rounded-t h-8 bg-gradient-to-r from-gulshan-1200 via-pink-300  to-gulshan-1300">
                {/* <h1 className = "w-20 h-20 border-white border-4 rounded-full bg-cerise-500 hover:bg-cerise-600  m-auto"> </h1> */}
                 <img src = {Logo} alt = "images"  className = "w-20 h-20 border-white border-4 rounded-full m-auto"/>
                <h1 className = "ml-10 capitalize font-bold hover:underline  ">gulshan yadav</h1>
            </div>
            </div>
            {isAuthenticated ? alwaysLink: guestLink }
            
            {/* <Link to = "/dashboard"  className = ' ml-4 mr-4 mt-3  hover:bg-gulshan-300 px-12 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '>Dashboard</Link> */}
        </div>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth:state.authReducer
})

export default connect(mapStateToProps, {logout})(Navbar);
