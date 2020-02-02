import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export class contactAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: []
		};
	}

	componentDidMount() {
		console.log('Test1');
		console.log(baseUrl);
		axios.get(`${baseUrl}/contact`).then((res) => this.setState({ contact: res.data }));
	}

	render() {
		return (
			<div>
				<h1 className="admin">Admin Post Page</h1>
				<a className="admin-a" href="/auth-landing">
					Back to Admin Home Page
				</a>
				<h4>***WARNING*** Only delete messages after they have been taken care of ***WARNING***</h4>
				<h5>(Oldest messages appear at the top)</h5>
				<div className="profile">
					{this.state.contact.map((contact) => (
						<div className="Contact-Card" key={contact._id}>
							<h3>
								{contact.firstName} {contact.lastName}
							</h3>
							<h3>{contact.email}</h3>
							<p>{contact.comments}</p>
							<p>{contact.date}</p>
							<button>Delete Message</button>
							<br />
							<br />
						</div>
					))}
					<br />
				</div>
			</div>
		);
	}
}

export default contactAdmin;
