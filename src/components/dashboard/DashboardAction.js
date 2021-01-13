
import { Link } from "react-router-dom"; 

import React from 'react'
import { AiOutlineFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi" 

const DashboardAction = () => {
    return (
        <div className = "flex w-3/5 justify-between">
            <div className = "w-40  h-16 bg-white m-4 shadow-lg rounded">
                <button className = "text-green-400 capitalize font-bold m-2 ml-6"><Link to = "/edit-profile">Edit Profile <FiEdit className = "text-blue-400 w-8 h-6 ml-8"/> </Link></button>
            </div>
            <div className = "w-40  h-16 bg-white  m-4 shadow-lg rounded">
                <button className = "text-green-400 capitalize font-bold m-2"><Link to ="/add-experience">add experience <AiOutlineFileAdd className = " text-mango-500 w-8 h-6 inline "/></Link></button>
            </div>
            <div className = "w-40  h-16 bg-white m-4 shadow-lg rounded">
                <button className = "text-green-400 capitalize font-bold m-2"><Link to = "/add-education">add education <AiOutlineFileAdd className = " text-blue-500 text-mango-500 w-8 h-6 inline"/></Link></button>
            </div>
        </div>
    )
}

export default DashboardAction; 
