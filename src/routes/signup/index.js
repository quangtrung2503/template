import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "./logo.svg";
// import "./App.css";
// import { simpleAction } from "./actions/simpleAction";
import styles from "./styles";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="signinContainer">
          <form id="form">
            <input className="input" type="text" placeholder="First Name" />
            <input className="input" type="text" placeholder="Last Name" />
            <input className="input" type="text" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />
            <button id="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
