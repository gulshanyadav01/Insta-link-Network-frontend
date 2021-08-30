import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { deleteExperience } from "../../components/store/Actions/profile"; 
import { MdDelete } from "react-icons/md"
import { BiBuildings } from "react-icons/bi"

const Experience = ({experience, deleteExperience}) => {
    const experiences = experience.map(exp =>(
        <div className = "bg-gulshan-dascar h-10 m-4  shadow w-3/5 rounded flex justify-between">
            <h1 className = "text-sunglow-600 font-medium m-2">{exp.company}</h1><hr className = "w-0.5 h-full bg-gulshan-inner"></hr>
            <h1 className = "text-sunglow-600 font-medium m-2">{exp.title}</h1><hr className = "w-0.5 h-full bg-gulshan-inner"></hr>
            <h1 className = "text-sunglow-600 font-medium m-2">{exp.from}</h1><hr className = "w-0.5 h-full bg-gulshan-inner"></hr>
            <button className = "px-3 py-0.5  bg-red-300 font-bold text-black rounded hover:bg-red-500" onClick = {() => deleteExperience(exp._id)} ><MdDelete className = "w-6 h-6"/></button>
        </div>
        
    ) )
    return (
        <div>
            <h2 className = "uppercase font-extrabold ml-8 mt-4 mb-8 text-xl text-white"> <BiBuildings className = "inline w-6 h-6 mr-2 text-scarlet-500"/>Experience</h2>
            
            <div className = "w-2/5 ml-6  flex justify-between">
            <h1  className = "font-extrabold uppercase text-gray-500 ">company</h1>
            <h1 className = "font-extrabold uppercase text-gray-500">Title</h1>
            <h1 className = "font-extrabold uppercase text-gray-500">years</h1>
            
            </div>
            {experiences}
        </div>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience:PropTypes.func.isRequired,

}

export default connect(null, {deleteExperience})(Experience); 
