import React from 'react'
import PropTypes from 'prop-types'
// import News from "../news/News"
import Logo from "../../asset/images/gulshan1.png"
import { BsNewspaper } from "react-icons/bs"

const News = () => {
    return (
        <div>
            <div>
        <h1 className = "font-extrabold  text-royalblue-500"><BsNewspaper className = "w-6 h-6 text-scarlet-500 ml-2 inline"/> News </h1>
   </div>
   <div className = "mt-4">
       <div className = "w-72 h-32 ml-2 bg-gulshan-dascar border-t-2 mt-2 border-gulshan-dascar hover:border-2 hover:border-limegreen-400 rounded">
           <div className = "mt-2">
               <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 rounded-full"/>
           </div>
          
       </div>
       <div className = "w-72 h-32 ml-2 bg-gulshan-dascar border-t-2 mt-2 border-gulshan-dascar hover:border-2 hover:border-limegreen-400 rounded">
           <div className = "m-2">
               <img src = {Logo} alt = "hello" className = "w-12 h-12 mt-2 rounded-full"/>
           </div>
          
       </div>
   </div>
        </div>

        
    )
}

// News.propTypes = {

// }

export default News; 
