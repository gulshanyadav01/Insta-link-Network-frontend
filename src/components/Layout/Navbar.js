import React from 'react'
import {Link } from "react-router-dom"; 
import {connect } from "react-redux"; 
import PropTypes from "prop-types"; 
import {logout} from "../../components/store/Actions/auth"; 
import { FiLogOut } from "react-icons/fi";
import Logo from "../../asset/images/gulshan1.png"; 
import { TiMessages } from "react-icons/ti"
import { FaRegBell } from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs"
import { FaSearch } from "react-icons/fa"
import Alert from "../../components/Layout/alert"; 


// import { FiLogOut } from "react-icons/fi"
// import Logo from "../../asset/images/gulshan1.png"

const  Navbar = ({auth: {isAuthenticated, loading, user}, logout})  => {
    // useEffect(())

    const Logout = () => {
        logout(); 
    }
    // const guestLink = (
    //     <div>
    //         <h1  className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FaPeopleCarry className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/profiles">Developers</Link> </h1>
    //         <h1 className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FiLogIn className = "inline text-mango-600  hover:text-white"/>  <Link to = "/login">Login</Link></h1>
    //         <h1 className = ' ml-4 mr-4 mt-3 bg-white  hover:bg-gulshan-300 px-3 py-3  font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoRocket className = "inline  text-gulshan-900 hover:text-white"/> <Link to = "/register" className = "active:text-blue-100">Register</Link> </h1>
    //     </div>
    // )
    // const alwaysLink = (
    //     <div>
    //         <h1 className = 'mt-8 ml-5 mr-1 bg-white hover:bg-gulshan-300 px-2 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><GoDashboard className = "inline text-limegreen-500  hover:text-white " /><Link to =  "/dashboard"> Dashboard</Link></h1>
    //         <h1  className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><FaPeopleCarry className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/profiles">Developers</Link> </h1>
    //         <h1  className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '><CgFeed className = "inline text-royalblue-600 hover:text-white"/> <Link to = "/posts">Posts</Link> </h1>
    //         <h1 className = ' ml-5 mr-1 mt-3 bg-white hover:bg-gulshan-300 px-3 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow ' ><button  onClick = {Logout} className = "font-bold"> <FiLogOut className = "inline text-red-700  hover:text-white"/> Logout </button></h1>
    //     </div>
    // )

    return (
        <div>
            <div className = "w-full h-12 bg-gulshan-navbar flex rounded fixed ">
                <div className = "w-60  h-12 flex">
                    <Link to = "/posts"> <h1 className = "m-2 font-bold text-xl text-orange-500">Developers Network</h1> </Link>
                </div>
                <div className = "w-4/12 h-12  flex">
                    <hr className = "w-1 h-full bg-gulshan-dascar"></hr>
                    {/* <FiFilter className = "w-8 h-8  text-royalblue-500 inline mt-2 mr-1"/> */}
                    <div className = "w-full h-8 mt-2 mb-1 ml-16 bg-gulshan-search rounded-full">
                       
                        <input type = "text" placeholder = "enter name for search" className = "bg-gulshan-search rounded-full mt-1  ml-4"/>
                    </div>
                    <button className = "w-32 h-8 mt-2 mb-1 ml-1 rounded-full border border-royalblue-500"> <FaSearch className = "inline text-royalblue-600 "/> Search  </button> 
                 
                </div>
                <div className = "w-3/12 h-12 ">
                 {/* hello */}
                </div>
                <div className = "w-2/12 h-12 flex ">
                    <Link to = "/profiles" > <BsFillPeopleFill className = "w-6 h-6 m-2 text-gulshan-fontc hover:text-royalblue-500 "/> </Link>
                    <Link to ="/posts"> <TiMessages className = 'w-6 h-6 m-2 text-gulshan-fontc hover:text-royalblue-500'/></Link>
                    <FaRegBell className = "w-6 h-6 m-2 inline text-gulshan-fontc hover:text-royalblue-500   "/> 
                       
                   
                    
                </div>
                <div className = "w-2/12 h-12 ml-10 mt-1 flex">
                    {/* { isAuthenticated && !loading && (<div className = "mt-1 text-gray-100 capitalize"> {user.name} </div>) } */}
                    {isAuthenticated && !loading && (<Link to = {`/profile/${user._id}`}><img src = {Logo} className = "w-8 h-8 rounded-full cursor-pointer" alt = "hello"/></Link>)}
                    {/* <button  onClick = {Logout} className = "font-bold"> <FiLogOut className = "inline text-red-700  hover:text-white"/> Logout </button> */}
                    {/* <div className = "w-8 h-8 rounded-full bg-gulshan-navar hover:bg-royalblue-500"> */}
                     {isAuthenticated && (
                        <FiLogOut onClick = {Logout} className = "w-6 h-6 ml-20 mt-1 cursor-pointer text-scarlet-500 hover:text-royalblue-600 ml-4"/>
                     )}   
                    {/* </div> */}
                    
                   
                </div>
                
            </div>
            {/* <Hello/> */}
            <Alert/>

        </div>
            

            
            // {/* <div className = "mt-8 ml-4 mr-2"> */}
            //     {/* <h1 className = "text-2xl font-bold text-mango-500" >Social Network</h1> */}
            //     {/* <Alert/> */}
            // {/* </div> */}
            // {/* <div className ="w-50 ml-4 mt-16  h-52 border-1 border-gray-100 bg-white  shadow rounded"> */}
            // {/* <div className = "w-50 rounded-t h-8 bg-gradient-to-r from-gulshan-1200 via-pink-300  to-gulshan-1300"> */}
            //     {/* <h1 className = "w-20 h-20 border-white border-4 rounded-full bg-cerise-500 hover:bg-cerise-600  m-auto"> </h1> */}
            //      {/* <img src = {Logo} alt = "images"  className = "w-20 h-20 border-white border-4 rounded-full m-auto"/> */}
            //     {/* <h1 className = "ml-10 capitalize font-bold hover:underline  ">gulshan yadav</h1> */}
            // {/* </div> */}
            // {/* </div> */}
            // {/* {isAuthenticated ? alwaysLink: guestLink } */}
            
            // {/* <Link to = "/dashboard"  className = ' ml-4 mr-4 mt-3  hover:bg-gulshan-300 px-12 py-3 font-bold rounded text-gulshan-700 hover:text-gray-900 shadow '>Dashboard</Link> */}
        

    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    auth:state.authReducer,
    profile: state.profile
})

export default connect(mapStateToProps, {logout})(Navbar);
