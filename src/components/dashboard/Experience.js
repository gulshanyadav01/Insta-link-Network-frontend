import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
// import Moment from "react-moment"; 
import { deleteExperience } from "../../components/store/Actions/profile"; 
import { FcOrganization} from "react-icons/fc"
import { MdDelete } from "react-icons/md"

const Experience = ({experience, deleteExperience}) => {
    const experiences = experience.map(exp =>(
        <div className = "bg-white h-10 m-4  shadow w-3/5 rounded flex justify-between">
            <h1 className = "text-gray-800 font-medium m-2">{exp.company}</h1><hr className = "w-0.5 h-full bg-gray-100"></hr>
            <h1 className = "text-gray-800 font-medium m-2">{exp.title}</h1><hr className = "w-0.5 h-full bg-gray-100"></hr>
            <h1 className = "text-gray-800 font-medium m-2">{exp.from}</h1><hr className = "w-0.5 h-full bg-gray-100"></hr>
            <button className = "px-3 py-0.5 bg-red-300 font-bold text-black rounded hover:bg-red-500" onClick = {() => deleteExperience(exp._id)} ><MdDelete className = "w-6 h-6"/></button>
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
            <h2 className = "uppercase font-extrabold ml-6 mt-4 mb-8">Experience</h2>
            {/* <table>
                <thead>
                    <tr>
                       
                    </tr>
                </thead>
                {/* <tbody>{experiences}</tbody> */}
            {/* </table> */}
            <div className = "w-2/5 ml-6  flex justify-between">
            <h1  className = "font-extrabold uppercase text-gray-500 ">company</h1>
            <h1 className = "font-extrabold uppercase text-gray-500">Title</h1>
            <h1 className = "font-extrabold uppercase text-gray-500">years</h1>
            {/* <h1>""</h1> */}
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
