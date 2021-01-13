import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineOfficeBuilding } from "react-icons/hi" 

const ProfileExperience = ({profile:{experience}}) => {
    return (
        <div className = "w-1/2 bg-white">
        <h1 className = "m-4 font-bold ">experience</h1>
        {/* <h1>{experience.length}</h1> */}
        {
            experience.map((edu) => {
                return(
                    <div className = "m-2 flex">
                        <div className = " w-12 h-12 rounded-full bg-scarlet-500">
                            <HiOutlineOfficeBuilding className = "inline m-2 w-8 h-8 text-white "/>
                        </div>
                       <div className = "ml-4">
                            <h1 className = "capitalize font-bold ">{edu.school}</h1>
                            <h1>{edu.title} - {edu.company} </h1>
                            <h1>{edu.from}</h1>
                       </div>
                       
                    </div>
                )
            })
        }
    </div>
    )
}

ProfileExperience.propTypes = {

}

export default ProfileExperience; 
