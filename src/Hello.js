import React, { useState } from "react"; 
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player'


const Hello = () => {
  const [file, setFile ] = useState(""); 
  const [ fileName, setFileName] = useState("choose file"); 
  const [uploadedFile,  setUploadedFile] = useState({}); 


  const onChange =  e => {
    setFile(e.target.files[0]); 
    setFileName(e.target.files[0].name); 
  }

  const onSubmit = e => {
    e.preventDefault(); 
    const formData = new FormData(); 
    formData.append("file", file); 
    console.log(file);

    

  }
    return(
        <div className = "w-full mt-52  ml-48   h-auto">
          <div className = "w-48 h-48 rounded shadow-2xl bg-gulshan-dascar">
            <form onSubmit  = {onSubmit}>
              <input type = "file" className = "ml-10 mt-8" />
              {/* <label>for </label> */}
              <input type = "submit" value = "upload" className = "px-2 py-1 rounded cursor-pointer mt-8 ml-16 bg-orange-700 font-bold text-white"/>
            </form>
          </div>
        </div>
    )
}
export default Hello