import React from 'react'
import PropTypes from 'prop-types'
import PrivateRoute from '../Routing/PrivateRoute'
import { FaSchool } from "react-icons/fa"


const ProfileEducation = ({profile:{education, experience}}) => {
    return (
        <div className = "w-1/2 bg-white">
            <h1 className = "m-4 font-bold ">Education</h1>
            {/* <h1>{education.length}</h1> */}
            {
                education.map((edu) => {
                    return(
                        <div className = "m-2 flex">
                            <div className = " w-12 h-12 rounded-full bg-scarlet-500">
                                <FaSchool className = "inline m-2 w-8 h-8 text-indigo-700 "/>
                            </div>
                           <div className = "ml-4">
                                <h1 className = "capitalize font-bold ">{edu.school}</h1>
                                <h1>{edu.degree} - {edu.fieldOfStudy} </h1>
                                <h1>{edu.from}</h1>
                           </div>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

ProfileEducation.propTypes = {
    profile:PropTypes.object.isRequired

}

export default ProfileEducation
