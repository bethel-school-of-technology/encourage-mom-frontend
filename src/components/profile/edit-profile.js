import React, {Fragment, useState} from 'react';
import { editProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const EditProfile = ({
  editProfile
}) => {
    const [ username, setUsername ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ bio, setBio ] = useState('');

    return (
        <Fragment>
            <h1>Edit Profile Info</h1>
            <form className="form" onSubmit=
                {e => {{e.preventDefault()}
                editProfile({ username, location, bio});
                setLocation('');
                setBio('');
                }} >
            <div> Username: 
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />
            </div>
            < br/>
            <div> Location:
                <input 
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    required 
                    />
            </div>
            < br/>
            <div> Short Bio:
                <textarea
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    required
                    />
            </div>
            < br />
            <input 
                    type="submit"
                    className="btn btn-primary"
                    value="Edit Profile"
            />
            <br />
            <br />
            <br />

            </form>
        </Fragment>
    )
}

EditProfile.propTypes = {
    editProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {editProfile})(EditProfile)
