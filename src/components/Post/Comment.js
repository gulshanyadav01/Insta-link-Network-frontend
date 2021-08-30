import React from 'react'

import Logo from "../../asset/images/gulshan1.png"
import { Link } from 'react-router-dom'

const Comment = ({text, user}) => {
    return (
        <div className = "w-full h-auto rounded-t-lg rounded-b-lg ">
            <div className  = "w-full h-auto m-2 flex">
                <Link to = {`/profile/${user}`}> <img src = {Logo} alt = "hello" className = "w-8 h-8 rounded-full"/> </Link>
                
                <div className = " w-4/5 rounded-xl ml-4 h-auto m-1 bg-gulshan-blur hover:bg-gulshan-blu">
                <Link to = {`/profile/${user}`}> <h1 className = "ml-2 text-sm text-gulshan-com capitalize hover:underline">gulshan yadav</h1> </Link>
                    <h1 className = "ml-2 text-gulshan-com">{text}</h1>
                </div>
                
            </div>
           

        </div>
    )
}

Comment.propTypes = {

}

export default Comment
