import React, {Component} from "react";

class Profile extends Component {
    render() {
        return(
            <div>
                Welcome
            </div>
        )
    }
}

export default Profile

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