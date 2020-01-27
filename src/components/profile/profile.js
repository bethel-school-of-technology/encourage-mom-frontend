import React, {Fragment, useEffect} from "react";
import {Link} from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Profile = ({
    getProfileById,
    // profile: { profile},
    auth,
    match,
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

        return(
            <Fragment>
            <div>
                {/* {auth.isAuthenticated &&
                auth.loading === false &&
                auth.user._id === profile.user._id && (
                    <h1> Welcome {profile.username} </h1>
                )} */}
                <h1> Welcome...
                    {/* {profile.username}  */}
                    </h1>
                <br/>
                <div>
                <p>(If don't have a profile...)</p>
                 <Link to ="/create-profile">Create profile</Link>
                </div>
                <br/>
               
                <br/>
                <div>
                    <h3>
                    {/* {profile.user.firstName && profile.user.lastName}   */}
                    (FirstName and LastName)
                    </h3>
                </div>
                <br/>
                <div>
                    <h3>
                    {/* {profile.user.username} */}
                    Profile (Username)
                    </h3>
                </div>
                <br/>
                <div>
                    <h4>
                        {/* {profile.location} */}
                        Profile (Location)
                    </h4>
                </div>
                <br/>
                <div>
                    <h5>
                        {/* {profile.bio} */}
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
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps,
    {getProfileById})(Profile)

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