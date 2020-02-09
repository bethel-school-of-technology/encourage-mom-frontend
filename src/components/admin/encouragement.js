// place to edit the encouragement and have it render to encouragement page for people to see


import React, { useState} from 'react';
import { createEncouragement } from '../../actions/encouragement';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import EncouragementList from "../../components/admin/encouragement-feed";
// import {}


const CreateEncouragement = ({ createEncouragement}) => {
    const [ title, setTitle] = useState('')
    const [ text, setText ] = useState('');
    const [ reference, setReference ] = useState('');
    const [date, setDate] = useState('');

    return (
        <div>
                <div>
                    <h1 className="admin">Encouragement Admin Page</h1>
                    <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
                </div>
            <h2>Add An Encouragement</h2>
            <form className="form" onSubmit=
                {e => {{e.preventDefault()}
                createEncouragement({title, text, reference, date});
                setTitle('');
                setText('');
                setReference('');
                setDate('')
                }} >
            <div> Title: 
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required />
            </div>
            < br/>
            <div> Text:
                <textarea 
                    type="text"
                    name="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required 
                    />
            </div>
            < br/>
            <div> References:
                <input
                    type="text"
                    name="reference"
                    value={reference}
                    onChange={e => setReference(e.target.value)}
                    required
                    />
            </div>
            <br/>
            <div> Date:
                <input
                    type="text"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                    />
            </div>
            < br />
            <input 
                    type="submit"
                    className="btn btn-primary"
                    value="Create Encouragement"
            />
            <br />
            </form>
            <EncouragementList/>
        </div>
    )
}

CreateEncouragement.propTypes = {
    createEncouragement: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {createEncouragement})(CreateEncouragement);


//input value
//submit value