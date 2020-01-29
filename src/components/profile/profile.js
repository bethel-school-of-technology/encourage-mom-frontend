import React, {Fragment, useEffect} from "react";
import {Link} from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Profile = ({
    getCurrentProfile,
    profile,
    auth: {user},
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile ]);
        return(
            <Fragment>
            <div>
                <h1> Welcome 
                     { user && user.username} 
                    </h1>
                <br/>
                <div>
                <p>No profile? Create One!</p>
                 <Link to ="/create-profile">Create profile</Link>
                </div>
                <br/>
        
                <br/>
                <div>
                    <h3>
                    {user && user.firstName && user && user.lastName}  
                    (FirstName and LastName)
                    </h3>
                </div>
                <br/>
                <div>
                    <h3>
                    {user && user.username}
                    Profile (Username)
                    </h3>
                </div>
                <br/>
                <div>
                    <h4>
                        { profile && profile.location}
                        Profile (Location)
                    </h4>
                </div>
                <br/>
                <div>
                    <h5>
                        { profile && profile.bio}
                        Profile Bio
                    </h5>
                </div>
                <br/>
                <div>
                    <p>Want to Edit Profile</p>
                    <Link to="/edit-profile">Edit Profile</Link>

                </div>
            </div>
            </Fragment>
        )
    }

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps,
    {getCurrentProfile})(Profile)

// import React, {Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getProfileById } from '../../actions/profile';

// const Profile = ({
//     getProfileById,
//     profile: {profile, loading},
//     auth,
//     match
// }) => {
//     useEffect(() => {
//         getProfileById(match.params.id);
//     }, [getProfileById, match.params.id]);

//     return(
//         <Fragment>
//             <Link to ='/dashboard'>Back to the my Dashboard</Link>
//             {auth.isAuthenticated &&
//                 auth.loading === false &&
//                 auth.user.id === profile.user._id && (
//                     <Link to='/edit-profile'>Edit Profile</Link>
//                 )}
//                 <div className = "profile">
//                     <h1>{profile.name}</h1>
//                     <h2>{profile.username}</h2>
//                     <p>
//                         {isEmpty(profile.bio) ? (
//                             <span>{firstName} does not have a bio</span>
//                         ) : (
//                             <span>{profile.bio}</span>
//                         )}
//                     </p>
//                 </div>
//         </Fragment>
//     )
// }

// Profile.propsTypes = {
//     getProfileById: PropTypes.func.isRequired,
//     profile: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     profile: state.profile
// })


// export default connect(
//     mapStateToProps,
//     {getProfileById})(Profile)