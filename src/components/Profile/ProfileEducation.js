import React from 'react'
import PropTypes from 'prop-types'
import { FaSchool } from "react-icons/fa"


const ProfileEducation = ({profile:{education, experience}}) => {
    return (
        <div className = "w-1/2 bg-gulshan-dascar">
            <h1 className = "m-4 font-bold text-royalblue-400">Education</h1>
            {/* <h1>{education.length}</h1> */}
            {
                education.map((edu) => {
                    return(
                        <div className = "m-2 flex ">
                            <div className = " w-12 h-12 rounded-full ">
                                <FaSchool className = "inline m-2 w-8 h-8 text-white "/>
                            </div>
                           <div className = "ml-4 text-white">
                                <h1 className = "capitalize font-bold  ">{edu.school}</h1>
                                <h1>{edu.degree} - {edu.fieldOfStudy} </h1>
                               { /*<h1>{edu.from}</h1>*/}
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
