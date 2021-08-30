import React from 'react'
import {Link } from "react-router-dom"; 
import {connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import {logout} from "../../components/store/Actions/auth"; 
import Logo from "../../asset/images/gulshan1.png";
import { BsFillPeopleFill } from "react-icons/bs"
import { RiDashboard2Line } from "react-icons/ri"
import { BiNews } from "react-icons/bi"
import { IoMdLogIn } from "react-icons/io"
import { RiBallPenFill } from "react-icons/ri"


const  SidebarLeft = ({auth: {isAuthenticated, loading, user}})  => {

    // const Logout = () => {
    //     logout(); 
    // }

    // const guestLink = (
    //     <div>
    //         <h1  className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FaPeopleCarry className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/profiles">Developers</Link> </h1>
    //         <h1 className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FiLogIn className = "inline text-mango-600  hover:text-white"/>  <Link to = "/login">Login</Link></h1>
    //         <h1 className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3  font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoRocket className = "inline  text-gulshan-900 hover:text-white"/> <Link to = "/register" className = "active:text-blue-100">Register</Link> </h1>
    //     </div>
    // )
    // const alwaysLink = (
    //     <div>
    //         <h1><GoDashboard className = "inline text-limegreen-500  hover:text-white " /><Link to =  "/dashboard"> Dashboard</Link></h1>
    //         <h1><FaPeopleCarry className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/profiles">Developers</Link> </h1>
           
    //         {/* <h1 className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow ' ><button  onClick = {Logout} className = "font-bold"> <FiLogOut className = "inline text-red-700  hover:text-white"/> Logout </button></h1> */}
    //     </div>
    // )

    return (
        <div className = "w-full flex h-full   bg-gulshan-side">
            <div className = "w-full mt-20 ml-4">
               <h1 className = "text-gulshan-fontc font-semibold text-lg">  </h1>
                <div className = "flex mt-4">
                    {isAuthenticated && !loading && (<Link to = {`/profile/${user._id}`}><img src = {Logo} className = "w-8 h-8 rounded-full cursor-pointer" alt = "hello"/></Link>)}
                    {isAuthenticated && !loading && (<Link to = {`/profile/${user._id}`}><h1 className = "text-royalblue-400 capitalize font-bold ml-2 mt-1 hover:underline">{user.name}</h1></Link>)}
                </div>
                <div className  = "mt-8 ">
                    <div className = "flex mt-4"> <Link to = "/dashboard" className="group  text-blue-500 focus:text-yellow-600 font-bold "> <RiDashboard2Line className="w-6 h-6 text-limegreen-600 mr-2 inline  group-focus:text-yellow-300 "/> Dashboard </Link> </div>
                    <div className = "flex mt-4"> <Link to = "/profiles" className="group  text-blue-500 focus:text-yellow-600 font-bold group-focus:text-yellow-300"> <BsFillPeopleFill className="w-6 h-6 text-royalblue-600 mr-2 inline  group-focus:text-yellow-300 "/> Developers </Link> </div>
                    <div className = "flex mt-4"> <Link to = "/posts" className="group  text-blue-500 focus:text-yellow-600 font-bold "> <BiNews className="w-6 h-6 text-red-600 mr-2 inline  group-focus:text-yellow-300 "/> posts </Link> </div>
                    {!isAuthenticated && <div className = "flex mt-4"> <Link to = "/register" className="group  text-blue-500 focus:text-yellow-600 font-bold "> <RiBallPenFill className="w-6 h-6 text-green-600 mr-2 inline  group-focus:text-yellow-300 "/> Register </Link> </div>}
                    {!isAuthenticated && <div className = "flex mt-4"> <Link to = "/login" className="group  text-blue-500 focus:text-yellow-600 font-bold "> <IoMdLogIn className="w-6 h-6 text-green-600 mr-2 inline  group-focus:text-yellow-300 "/> Login </Link> </div>}

                </div>
                
            </div>

        </div>
            

            
            
        

    )
}
SidebarLeft.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth:state.authReducer,
    profile: state.profile
})

export default connect(mapStateToProps, {logout})(SidebarLeft);
