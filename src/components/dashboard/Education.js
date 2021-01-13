import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
// import Moment from "react-moment"; 
import { deleteEducation} from "../store/Actions/profile"; 
import { MdDelete } from "react-icons/md"

const Education = ({education, deleteEducation}) => {
    const educations = education.map(exp =>(
        <div className = "bg-white h-10 m-4 shadow w-3/5 rounded flex justify-between hover:ring-2 hover:ring-red-300">
            <h1 className = "text-gray-800 font-medium m-2">{exp.degree}</h1><hr className = "w-0.5 h-full bg-gray-200"></hr>
            <h1 className = "text-gray-800 font-medium m-2">{exp.school}</h1><hr className = "w-0.5 h-full bg-gray-200"></hr>
            <h1 className = "text-gray-800 font-medium m-2">{exp.fieldOfStudy}</h1><hr className = "w-0.5 h-full bg-gray-200"></hr>
            <button className = "px-3 py-0.5 bg-red-300 font-bold text-black rounded hover:bg-red-500 " onClick = {() => deleteEducation(exp._id)} ><MdDelete className = "w-6 h-6" /></button>
        </div>
        // <tr key = {exp._id} className = " bg-red-500 mt-2 "> 
        //     <div className = "h-20">
        //         <h1>gulshan</h1>
        //     </div>
        //     {/* <td>{exp.company}</td>
            
        //     <td>{exp.title}</td>
        //     <td>{exp.from}</td>
        //     <td>
        //        
        //     </td> */}
        // </tr>
    ) )
    return (
        <div>
            <h2 className = "uppercase mt-8 font-extrabold ml-6  mb-8">Education</h2>
            {/* <table>
                <thead>
                    <tr>
                       
                    </tr>
                </thead>
                {/* <tbody>{experiences}</tbody> */}
            {/* </table> */}
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
