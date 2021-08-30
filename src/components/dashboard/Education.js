import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
// import Moment from "react-moment"; 
import { deleteEducation} from "../store/Actions/profile"; 
import { MdDelete } from "react-icons/md"
import { MdSchool } from "react-icons/md"

const Education = ({education, deleteEducation}) => {
    const educations = education.map(exp =>(
        <div className = "bg-gulshan-dascar h-10 m-4 shadow w-3/5 rounded flex justify-between hover:ring-2 hover:ring-red-300">
            <h1 className = "text-royalblue-500  font-medium m-2">{exp.degree}</h1><hr className = "w-0.5 h-full bg-gulshan-inner"></hr>
            <h1 className = "text-royalblue-500 font-medium m-2">{exp.school}</h1><hr className = "w-0.5 h-full bg-gulshan-inner"></hr>
            <h1 className = "text-royalblue-500 font-medium m-2">{exp.fieldOfStudy}</h1><hr className = "w-0.5 h-full bg-gulshan-inner"></hr>
            <button className = "px-3 py-0.5 bg-red-300 font-bold text-black rounded hover:bg-red-500 " onClick = {() => deleteEducation(exp._id)} ><MdDelete className = "w-6 h-6" /></button>
        </div>
        
    ) )
    return (
        <div>
            <h2 className = "uppercase font-extrabold ml-8 mt-4 mb-8 text-xl text-white"> <MdSchool className = "inline w-6 h-6 mr-2 text-scarlet-500"/>Experience</h2>
            
            <div className = "w-2/5 ml-6  flex justify-between">
            <h1  className = "font-extrabold uppercase text-gray-500 ">Degree</h1>
            <h1 className = "font-extrabold uppercase text-gray-500">School</h1>
            <h1 className = "font-extrabold uppercase text-gray-500">fieldOfStudy</h1>
            {/* <h1>""</h1> */}
            </div>
            {educations}
        </div>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(Education); 
