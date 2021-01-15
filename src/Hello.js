import React from "react"; 
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'
const Hello = () => {
    return(
        <div className = "w-full  h-auto">
          <div className = "w-64 h-64 mt-40 ml-20 ">
               <ReactPlayer controls url ='https://www.youtube.com/watch?v=zMJMPIn04bM' height = "350px" width = "350px" style = {{backgroundColor:"red"}} />
          </div>
          
        </div>
    )
}
export default Hello