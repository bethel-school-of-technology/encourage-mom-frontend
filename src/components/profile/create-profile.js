import React , {  Fragment } from 'react';
import  { createProfile } from '../../actions/profile';


const CreateProfile = ({}) => {
    const [profileInfo, profileInfo] = useState({
        name: '',
        username: '',
        location: '',
        bio:''
    });

    const {name, username, location, bio } = profileInfo
    
    const onChange = e =>
        setprofileInfo({ ...profileInfo, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(profileInfo, history)
    };

    return (
        <Fragment>
            <h1>Create Your Profile</h1>
        </Fragment>
    )
}

export default CreateProfile;