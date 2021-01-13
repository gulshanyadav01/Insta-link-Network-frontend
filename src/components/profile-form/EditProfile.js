import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { createProfile, getCurrentProfile} from "../store/Actions/profile"; 
import {connect} from "react-redux"; 
import {withRouter, Link} from "react-router-dom"; 
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiInstagram } from "react-icons/fi"
import { FaFacebookMessenger, FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"; 
import { FaTwitter } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { BsFolderSymlink  } from "react-icons/bs"; 
import { FaLocationArrow} from "react-icons/fa"; 
import { AiOutlineCheckCircle } from "react-icons/ai"
import { GiSkills } from "react-icons/gi"; 
import { AiFillGithub } from "react-icons/ai"
import { BsPeopleCircle } from "react-icons/bs"; 
import { ImBackward } from "react-icons/im"
// import { FaYoutube } from "react-icons/fa"

const initialState = {
    company:"",
        website:"",
        location:"",
        status:"",
        skills:"",
        githubusername:"",
        bio:"",
        twitter:"",
        facebook:"",
        linkedin:"",
        youtube:"",
        instagram:""

}

const EditProfile = ({ profile: {profile, loading }, createProfile, getCurrentProfile,  history }) => {
    const [formData, setFormData]  = useState(initialState); 
    const [socialLink, setSocialLink] = useState(false);
    
    useEffect(() => {
        if (!profile) getCurrentProfile();
        if (!loading && profile) {
          const profileData = { ...initialState };
          for (const key in profile) {
            if (key in profileData) profileData[key] = profile[key];
          }
          for (const key in profile.social) {
            if (key in profileData) profileData[key] = profile.social[key];
          }
          if (Array.isArray(profileData.skills))
            profileData.skills = profileData.skills.join(', ');
          setFormData(profileData);
        }
      }, [loading, getCurrentProfile, profile]); 

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData; 

    

    

    const onChange = (e) => { 
        e.preventDefault(); 
        setFormData({...formData, [e.target.name]: e.target.value}); 

    }
    const onSubmit = (e) => {
        e.preventDefault(); 
        createProfile(formData, history, true); 
    }

    return(
        <>
        
        <div className = "mx-auto my-auto w-3/5 h-auto mt-20">
        <h2 className = "uppercase w-32 h-8 rounded-t  shadow px-1 py-1  font-bold bg-white text-limegreen-900  ">Edit profile</h2>
        <form onSubmit = {onSubmit}>
            <div className = " h-auto bg-white shadow-lg rounded">
            <div className = "flex">
                <label for="company"><FaBuilding className = "mt-5 w-8 h-6 text-scarlet-400"/></label>
                <input
                    className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12" 
                    type = "text"
                    placeholder = 'enter your company'
                    name = "company" 
                    value = {company}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div className = "flex">
                <label for="company"><BsFolderSymlink className = " mt-5 w-8 h-6 text-sunglow-500"/></label>
                <input 
                    className = " border-b-2 border-limegreen-500 px-2 py-2  w-11/12"
                    type = "text"
                    placeholder = 'enter your website'
                    name = "website" 
                    value = {website}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div className = "flex">
                <label for="company"><FaLocationArrow className = "mt-5 w-8 h-6 text-indigo-700"/></label>

                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter location'
                    name = "location" 
                    value = {location}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div className = "flex">
                 <label for="company"><AiOutlineCheckCircle className = "mt-5 w-8 h-6 text-limegreen-700"/></label>
                <input 
                    type = "text"
                    
                    className = "border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter your status'
                    name = "status" 
                    value = {status}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div className = "flex">
                <label for="company"><GiSkills className = "mt-5 w-8 h-6 text-mango-700"/></label>

                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter skills '
                    name = "skills" 
                    value = {skills}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div className = "flex">
                <label for="company"><AiFillGithub className = "mt-5 w-8 h-6"/></label>
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter githubusername'
                    name = "githubusername" 
                    value = {githubusername}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div className = "flex">
                <label for = "bio"><BsPeopleCircle className = "mt-5 w-8 h-6 text-cerise-600" /></label>
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter bio'
                    name = "bio" 
                    value = {bio}
                    onChange = {(e) => onChange(e)}
                    // onMouseEnter={this.onMouseEnterHandler}
                /> 
            </div>
            <div className = "flex">
                <button className = "bg-orange-600 hover:bg-orange-700 font-bold text-white rounded px-3 py-2 m-2" onMouseEnter ={()=> setSocialLink(!socialLink)}   > social media </button>
                <h1 className = "m-4 text-scarlet-600">(Optional)</h1>
            </div>
            {socialLink && <div>
                <div className = "flex">
                    <label for="twitter"><FaTwitter className = "mt-5 w-8 h-6 text-blue-700"/></label>
                
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2 border-lim border-limegreen-500egreen-400 w-11/12"
                    placeholder = 'enter twitter'
                    name = "twitter" 
                    value = {twitter}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div className = "flex">
            
                <label for="facebook"><FaFacebookMessenger className = "mt-5 w-8 h-6 text-blue-500"/></label>
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter facebook '
                    name = "facebook" 
                    value = {facebook}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div className = "flex">
                <label for="instragram"><FiInstagram className = "mt-5 w-8 h-6 text-red-500"/></label>
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter instagram'
                    name = "instagram" 
                    value = {instagram}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div className = "flex">
            
                <label for="instragram"><FaLinkedin className = "mt-5 w-8 h-6 text-blue-600"/></label>
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'linkedin'
                    name = "linkedin" 
                    value = {linkedin}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
            <div className = "flex">
            
                <label for="youtube"><FaYoutube className = "mt-5 w-8 h-6 text-red-600"/></label>
                <input 
                    type = "text"
                    className = " border-b-2 border-limegreen-500  px-2 py-2  w-11/12"
                    placeholder = 'enter youtube'
                    name = "youtube" 
                    value = {youtube}
                    onChange = {(e) => onChange(e)}
                /> 
            </div>
             </div>}
            
            <div>
                <input 
                className = "bg-blue-100 hover:bg-blue-300 cursor-pointer font-bold rounded px-8 py-2 m-2"
                type = "submit" value = "submit"/>
                <button className = "bg-blue-100 hover:bg-blue-300 font-bold rounded px-8 py-2 m-2"><Link to = "/dashboard"> <ImBackward className = "inline text-scarlet-800" /> Dashboard</Link></button>
                    
            </div>
            </div>  
        </form>
    </div>
    </>
    )
}

EditProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    createProfile:PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    profile: state.profile

})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile)); 
