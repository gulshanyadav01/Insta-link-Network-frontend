import React from 'react'
import PropTypes from 'prop-types'
import Logo from "../../asset/images/gulshan1.png"
import profile from '../store/Reducers/profile'
import { FiInstagram } from "react-icons/fi"
import { FaFacebookMessenger, FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"; 
import { FaTwitter } from "react-icons/fa"
import { MdLanguage } from "react-icons/md"

const ProfileTop = ({ profile:{user:{avatar, name},
    status,
    company,
    location,
    website,
    social
 }
    
 }) => {
    return (
        <div className = "w-full h-72 rounded shadow bg-white ">
            <div className = "w-full h-20 rounded-t bg-gradient-to-r from-gulshan-1200 via-pink-300  to-gulshan-1300 flex-column">
                <img src = {Logo} className = "w-48 mt-10 h-48 mx-auto my-auto border-4 border-white rounded-full" alt = {name}/>
                <div className = "flex">
                    <div className = "ml-8 mb-8">
                        <h1 className = "font-bold capitalize">{name}</h1>
                        <h1 className = "capitalize">{status} at {company} </h1>
                        <h1>{location}</h1>
                    </div>
                    <div className = "flex m-8">
                    {website &&  (
                            <a href = {website} target= "_blank">
                            <MdLanguage className = "w-8 h-8 m-2 text-royalblue-300 hover:text-royalblue-700"/>
                            </a>
                        ) }
                        {social && social.instagram && (
                            <a href = {social.instagram} target= "_blank">
                            <FiInstagram className = "w-8 h-8 m-2 text-red-500 hover:text-red-700"/>
                            </a>
                        ) }
                        {social && social.facebook && (
                            <a href = {social.facebook} target= "_blank">
                            <FaFacebookMessenger className = "w-8 h-8 m-2 text-blue-500 hover:text-royalblue-600"/>
                            </a>
                        )}
                        {social && social.youtube && (
                            <a href = {social.youtube} target= "_blank">
                            <FaYoutube className = "w-8 h-8 m-2 text-red-500 hover:text-cerise-600"/>
                            </a>
                        )}
                        {social && social.linkedin && (
                            <a href = {social.linkedin} target= "_blank">
                            <FaLinkedin className = "w-8 h-8 m-2 text-blue-600 hover:text-royalblue-800"/>
                            </a>
                        )}
                        {social && social.twitter && (
                            <a href = {social.twitter} target= "_blank">
                            <FaTwitter className = "w-8 h-8 m-2 text-royalblue-400 hover:text-royalblue-600"/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

ProfileTop.propTypes = {

}

export default ProfileTop; 
