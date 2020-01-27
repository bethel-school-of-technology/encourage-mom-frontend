// import React, { Component } from 'react';

// class Encouragement extends Component {
//     render() {
//         return (
//             <div>Weekly Encouragement</div>
//         );
//     }
// }

// export default Encouragement

import React, { Component } from "react";
class Encouragement extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <input
            placeholder="test"
            className="email-signup--input"
            ref="email"
            value={this.state.email}
          />
          <button onClick={this.success} className="email-signup--submit">
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}

class EmailSignup extends React.Component {
  getInitialState() {
    return {
      email: "hi"
    };
  }

  emailInput(event) {
    this.setState({
      email: event.target.value
    });
  }

  proceed(e) {
    e.preventDefault();
  }

  validateEmail(event) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }

  render() {
    return (
      <section className="email-signup">
        <div className="email-signup__modal">
          <form>
            <fieldset>
              <input
                placeholder="test"
                className="email-signup--input"
                ref="email"
                value={this.state.email}
                onChange={this.emailInput}
                error="Hey, your email is invalid!"
                empty="Email can't be empty"
                showError={this.state.showError}
              />
              <button onClick={this.success} className="email-signup--submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}
export default Encouragement;
React.render(<EmailSignup />, document.getElementById("email"));
