import React, { useState} from 'react';
import { createProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {}


const CreateProfile = ({ createProfile}) => {
    const [ username, setUsername] = useState('')
    const [ location, setLocation ] = useState('');
    const [ bio, setBio ] = useState('');

    return (
        <div>
            <h1>Add Profile Info</h1>
            <form className="form" 
                onSubmit={e => {{e.preventDefault()}
                createProfile({username, location, bio});
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
                    value="Create Profile"
            />
            <br />
            <a href='/profile'>Back to profile</a>
            </form>
        </div>
    )
}

CreateProfile.propTypes = {
    editProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {createProfile})(CreateProfile);