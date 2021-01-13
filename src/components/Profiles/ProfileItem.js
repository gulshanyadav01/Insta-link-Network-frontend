import React from 'react'
import PropTypes from 'prop-types'
import Logo from "../../asset/images/gulshan1.png"
import {Link} from "react-router-dom"
import Posts from "../posts/Posts"; 

const ProfileItem = ({profile:{ user:{_id, name, avatar}, status, company}}) => {
    return (
        <div className ="w-50 ml-12 m-4 h-52 border-1 border-gray-100  shadow rounded">
            <div className = "w-50 rounded-t h-8 bg-gradient-to-r from-gulshan-1000 via-pink-500 to-gulshan-1100 flex-column">
                {/* <h1 className = "w-20 h-20 border-white border-4 rounded-full bg-cerise-500 hover:bg-cerise-600  m-auto"> </h1> */}
                <Link to = {`/profile/${_id}`}> <img src = {Logo} alt = "images"  className = "w-20 h-20 border-white border-4 rounded-full m-auto"/></Link>
                <h1 className = "ml-5 mr-5  capitalize font-bold hover:underline  ">gulshan yadav</h1>
                <h1 className = "ml-5 mr-5  capitalize font-bold hover:underline  ">{name}</h1>
                <h1 className = "ml-5 mr-5  capitalize font-bold hover:underline  ">{status}</h1>
                {/* <button className = "ml-5 bg-red-400 rounded px-2 py-2 ">View Profile</button> */}
            </div>
            {/* <Posts/> */}
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,

}

export default ProfileItem; 
