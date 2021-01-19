import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getProfiles } from "../store/Actions/profile"
import ProfileItem from "./ProfileItem"; 


const Profiles = ({ getProfiles, profile: {profiles, loading }}) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles])
    return (
        <div className = "m-8 mt-20 w-full h-auto  ">
                <div className = "w-full bg-gulshan-inner  shadow-3xl rounded ">
                        { loading ? <div><h1>loading</h1></div> : <div className = "flex flex-wrap w-full">
                            {profiles.length> 0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key = {profile._id} profile = {profile}/>
                                ))
                            ): <h1>No profiles found</h1>}
                        </div> }
                </div>
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
