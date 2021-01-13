import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import { getProfileById } from "../store/Actions/profile"; 
import ProfileTop from "./ProfileTop"; 
import ProfileAbout from "./ProfileAbout"
import ProfileSkills from "./ProfileSkills";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation"; 


const Profile = ({  getProfileById ,match, profile:{profile, loading, auth, } }) => {
    useEffect(() => {
        getProfileById(match.params.userId);

    },[getProfileById]); 
    return (
        <div>
            {profile ===  null || loading ? <div>loading</div>:(
            <div className = " ml-8 mt-20 w-3/5  ">
                <ProfileTop profile = {profile}/>
                <ProfileAbout profile = {profile} />
                <ProfileSkills profile = {profile} />
                <div className = "w-full h-auto mt-4 flex rounded shadow bg-white ">
                    <ProfileEducation profile = {profile}  /><hr className = "w-0.5 h-auto  bg-gray-300"></hr>
                    <ProfileExperience profile = {profile} />
                    
                </div>
            </div>)}
        </div>
    )
}

Profile.propTypes = {
    getProfileById:PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth:state.authReducer
})

export default connect(mapStateToProps, {getProfileById })(Profile);
