import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({profile:{bio, skills, user:{name}}}) => {
    return (
        <div className = "w-full h-32 mt-4 rounded shadow bg-gulshan-dascar">
            <div>
                <h1 className = "ml-8 font-bold text-royalblue-400 capitalize mt-4">{name}'s  Bio </h1>
                <h1 className = "ml-8 text-white">{bio}</h1>
            </div>
        </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;
