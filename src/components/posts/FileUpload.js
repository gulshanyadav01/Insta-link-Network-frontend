import React from 'react'
import Logo from "../../asset/images/gulshan1.png"

const FileUpload = () => {
    const fileSelectHandler = (event) => {
        console.log(event.target.files[0]);
    }
    

    return (
        <div className = "relative  bg-gulshan-dascar w-4/5 h-64 rounded shadow">
            <form>
                <input type = "file" accept = "./jpg,.png,.jpeg" className = "bg-blue-100 text-orange-500 ml-5 mt-1" onChange =  {fileSelectHandler} />
                <img src = {Logo} alt = "preview" className = " ml-5 w-4/5 h-52 rounded"/>
            </form>
        </div>
    )
}

export default FileUpload;
