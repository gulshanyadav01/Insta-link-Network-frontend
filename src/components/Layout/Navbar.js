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
import Insta from "../../asset/images/instagram.png"
import link from "../../asset/images/linkedin.png"



const  Navbar = ({auth: {isAuthenticated, loading, user}, logout})  => {
    

    const Logout = () => {
        logout(); 
    }
   

    return (
        <div>
            <div className = "w-full h-12 bg-gulshan-navbar flex rounded fixed ">
                <div className = "w-60  h-12 flex ">
                    <Link to = "/posts"> 
                        <div className = "ml-12 mt-2 flex">
                            <img align="center" alt="Gulshan Yadav | Instagram" margin- width="32px" src={Insta} />
                            <img className = "ml-2" align="center" alt="Gulshan Yadav | Instagram" margin- width="32px" src={link} />
                        </div>
                    </Link>
                </div>
                <div className = "w-4/12 h-12  flex">
                    <hr className = "w-1 h-full "></hr>
                   
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
                    
                    {isAuthenticated && !loading && (<Link to = {`/profile/${user._id}`}><img src = {Logo} className = "w-8 h-8 rounded-full cursor-pointer" alt = "hello"/></Link>)}
                    
                     {isAuthenticated && (
                        <FiLogOut onClick = {Logout} className = "w-6 h-6 ml-20 mt-1 cursor-pointer text-scarlet-500 hover:text-royalblue-600 ml-4"/>
                     )}   
                    
                    
                   
                </div>
                
            </div>
            {/* <Hello/> */}
            <Alert/>

        </div>
            

            
        

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
