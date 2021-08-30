import React from 'react'
import { HiOutlineOfficeBuilding } from "react-icons/hi" 

const ProfileExperience = ({profile:{experience}}) => {
    return (
        <div className = "w-1/2 bg-gulshan-dascar">
        <h1 className = "m-4 font-bold text-royalblue-400 ">Experience</h1>
        {/* <h1>{experience.length}</h1> */}
        {
            experience.map((edu) => {
                return(
                    <div className = "m-2 flex ">
                        <div className = " w-12 h-12 rounded-full bg-gulshan-dascar">
                            <HiOutlineOfficeBuilding className = "inline m-2 w-8 h-8 text-white "/>
                        </div>
                       <div className = "ml-4 text-white">
                            <h1 className = "capitalize font-bold  ">{edu.school}</h1>
                            <h1>{edu.title} - {edu.company} </h1>
                             {/*<h1>{edu.from.date}</h1>*/}
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
