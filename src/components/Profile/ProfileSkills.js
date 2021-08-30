import React from 'react'
import PropTypes from 'prop-types'

import { MdOfflinePin } from "react-icons/md"

const ProfileSkills = ({profile:{skills}}) => {
    return (
        <div className = "w-full h-32 mt-4 rounded shadow bg-gulshan-dascar">
         <h1 className = "ml-8 font-bold  capitalize text-royalblue-400  "> Skills</h1>
         {/* <h2><BiCheck className = "inline"/>{skills[0]}</h2> */}
         <div className = "flex ml-8">
            {
                skills.map((skill) => {
                    return(
                        <div className = "flex ">
                        <h1 className = "font-bold uppercase m-2 text-limegreen-500"><MdOfflinePin className = "inline w-6 h-6 text-limegreen-500 mr-1 "/>{skill}</h1>
                        </div>
                    )
                } )
            }
         </div>

        </div>
    )
}

ProfileSkills.propTypes = {
    profile:PropTypes.object.isRequired

}

export default ProfileSkills
