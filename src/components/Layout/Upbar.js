import React from 'react'
import { FaBell } from "react-icons/fa"
import { AiFillMessage } from "react-icons/ai"
 const Upbar = () => {
    return (
        <div className = "w-full h-12 bg-white flex ">
            <div className = "w-1/2">
                hello
            </div>
            <div className = "flex w-1/2 justify-end">
                <h1><FaBell className = "w-6 h-6 m-2 text-gray-400 hover:text-gray-600"/></h1>
                <h1><AiFillMessage className = "w-6 h-6 m-2 text-red-400 hover:text-red-800"/></h1>
            </div>
           

        </div>
    )
}
export default Upbar; 