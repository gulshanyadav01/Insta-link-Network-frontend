import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getProfiles } from "../store/Actions/profile"
import ProfileItem from "./ProfileItem"; 
import Posts from "../posts/Posts"

const Profiles = ({ getProfiles, profile: {profiles, loading }}) => {
    useEffect(() => {
        getProfiles();
    }, [])
    return (
        <div className = "m-8 w-full h-auto  flex  ">
            <div className = "w-3/5 bg-white shadow rounded ">
                { loading ? <div><h1>loading</h1></div> : <div className = "flex flex-wrap w-full">
                    {profiles.length> 0 ? (
                        profiles.map(profile => (
                            <ProfileItem key = {profile._id} profile = {profile}/>
                        ))
                    ): <h1>No profiles found</h1>}
                </div> }

            </div>
            {/* <div className = "w-2/5 bg-white shadow mx-1 my-1 rounded">
            <Posts/> */}

            {/* </div> */}
            
            
        </div>
        
    )
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles); 
