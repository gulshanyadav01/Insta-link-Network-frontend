import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"; 
import { addExprience } from "../../components/store/Actions/profile"
import { BsPeopleCircle } from "react-icons/bs"
import { FaBuilding } from "react-icons/fa" 
import { FaLocationArrow } from "react-icons/fa"
import { BiCalendarPlus } from "react-icons/bi"
import { BiCalendarMinus } from "react-icons/bi";
import { GoRocket } from "react-icons/go"
import { Link } from "react-router-dom"
import { ImBackward } from "react-icons/im"

const AddExperience = ({ addExprience, history }) => {
    const [formData, setFormData] = useState({
        company:"",
        title:"",
        location:"",
        from:"",
        to:"",
        current:false,
        description:""
    })
    const [toDataDisabled, toggleDisabled] = useState(false); 
    const {company, title, location, from, to  , current, description } = formData; 
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value}); 
    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log("hi");
        addExprience(formData, history); 

    }
    return (
        <>
        <div className = "mx-auto my-auto w-3/5 h-auto mt-20">
        <h2 className = "uppercase w-48 h-8 rounded-t  shadow px-1 py-1  font-bold bg-white text-limegreen-900  ">Add Experience</h2>
            <form onSubmit = {onSubmit}>
            <div className = " h-auto bg-white shadow-lg rounded">
            <div className = "flex">
                <label for="title"><BsPeopleCircle className = "mt-5 w-8 h-6 text-cerise-600" /></label>
                <input
                    className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12" 
                    type = "text"
                    placeholder = 'enter your Title'
                    name = "title" 
                    value = {title}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div className = "flex">
                <label for="company"> <FaBuilding className = "mt-5 w-8 h-6 text-scarlet-400"/> </label>
                <input
                    className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12" 
                    type = "text"
                    placeholder = 'enter your company'
                    name = "company" 
                    value = {company}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
            <div className = "flex">
                <label for="location"> <FaLocationArrow className = "mt-5 w-8 h-6 text-indigo-700"/> </label>
                <input
                    className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12" 
                    type = "text"
                    placeholder = 'enter location'
                    name = "location" 
                    value = {location}
                    onChange = {(e) => onChange(e)}
                /> 
            </div> 
                <div className = "flex">   
                    <label for="from"> <BiCalendarPlus className = "mt-5 w-8 h-6 text-limegreen-700"/> </label>
                        <input 
                        className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12"
                        type = "date"
                        placeholder = 'from'
                        name = "from" 
                        value = {from}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div className = "flex">
                    <label for="from"> <BiCalendarMinus className = "mt-5 w-8 h-6 text-scarlet-700"/> </label>

                        <input 
                        className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12"
                        type = "date"
                        placeholder = 'to'
                        name = "to" 
                        value = {to}
                        disabled = {toDataDisabled ? "disabled": ""}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div> 
                <div>
                        <p><input 
                        className = "m-2"
                        type = "checkbox"
                        placeholder = 'current'
                        name = "current" 
                        value = {current}
                        checked = {current}
                        onChange = {(e) => {
                            setFormData({...formData, current:!current}); 
                            toggleDisabled(!toDataDisabled); 
                        }}
                    /> current job</p>
                </div> 
                <div className = "flex">
                        <GoRocket className = "mt-5 w-8 h-6 text-scarlet-700"/>
                        <input 
                        type = "textarea"
                        className = "border-b-2 border-limegreen-500 px-2 py-2 m-1 w-11/12"
                        placeholder = 'enter description'
                        name = "description" 
                        value = {description}
                        onChange = {(e) => onChange(e)}
                    /> 
                </div>
                <div>
                    <input
                    className = "bg-orange-600 hover:bg-orange-700 font-bold text-white rounded px-3 py-2 m-2"
                     type = "submit" value = "Submit"/>
                     <button className = "bg-orange-600 hover:bg-orange-700 font-bold text-white rounded px-3 py-2 m-2" ><Link to = "/dashboard"> <ImBackward className = "inline text-scarlet-800" /> Dashboard</Link></button>
                </div> 
                </div>
            </form>
            
        </div>
        </>
    )
}

AddExperience.propTypes = {
    addExprience: PropTypes.func.isRequired

}

export default connect(null, {addExprience})(AddExperience); 

