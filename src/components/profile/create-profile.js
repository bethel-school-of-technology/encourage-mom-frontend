import React , {  Fragment, useEffect } from 'react';
import  { createProfile, getCurrentProfile } from '../../actions/profile';


const CreateProfile = ({
    createProfile,
    getCurrentProfile
}) => {
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        location: '',
        bio:''
    });

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            name: lpading || !profile.name ? '' : profile.name,
            username: loading || !profile.username ? '' : profile.username,
            location: loading || !profile.location ? '' : profile.location,
            bio: loading || !profile.bio ? '' : profile.bio
        })
    }, [loading, getCurrentProfile]);

    const {name, username, location, bio } = profileData
    
    const onChange = e =>
        setprofileInfo({ ...profileData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(profileData, history)
    };

    return (
        <Fragment>
            <h1>Create Your Profile</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="create-profile-form">
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                    />
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    required
                    />
                <input 
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => onChange(e)}
                    required 
                    />
                <textarea
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default CreateProfile;