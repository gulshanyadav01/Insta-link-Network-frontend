import React from "react"; 
import { Link } from "react-router-dom"
const Hello = () => {
    return(
        <div className = "w-full  h-auto bg-gulshan-inner">
           {/* <div className = "w-2/12 bg-blue-100 active:bg-blue-300  h-screen "> */}
           <Link to = "#!" class="group text-blue-500 focus:text-yellow-600 ...">
               <svg class="text-white group-focus:text-yellow-300 ..."></svg>
               dashboard
          </Link>
           {/* </div> */}
           {/* <h1 className="group bg-blue-500 focus:bg-yellow-600 w-20 h-8 mt-40 gulshan group-focus:bg-yellow-300  ">hello </h1> */}

        </div>
    )
}
export default Hello; 