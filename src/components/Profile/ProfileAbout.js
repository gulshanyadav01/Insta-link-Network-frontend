import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({profile:{bio, skills, user:{name}}}) => {
    return (
        <div className = "w-full h-32 mt-4 rounded shadow bg-white">
          <div>
              <h1 className = "ml-8 font-bold  capitalize mt-4">{name}s  Bio </h1>
              <h1 className = "ml-8">{bio}</h1>
          </div>
        </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout;
