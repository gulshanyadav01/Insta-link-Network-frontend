import React from 'react'
import PropTypes from 'prop-types'
import Logo from "../../asset/images/gulshan1.png"

const Comment = ({text}) => {
    return (
        <div className = "w-full h-auto rounded-t-lg rounded-b-lg ">
            <div className  = "w-full h-auto m-2 flex">
                <img src = {Logo} alt = "hello" className = "w-8 h-8 rounded-full"/>
                
                <div className = " w-4/5 rounded-xl ml-4 h-auto m-1 bg-gulshan-inputdiv hover:bg-gulshan-blur">
                    <h1 className = "ml-2 text-sm text-gulshan-fontc capitalize">gulshan yadav</h1>
                    <h1 className = "ml-2 text-gulshan-fontc">{text}</h1>
                </div>
                
            </div>
           

        </div>
    )
}

Comment.propTypes = {

}

export default Comment
