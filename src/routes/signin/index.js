import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "../../logo.svg";
// import "./App.css";
import { simpleAction } from "../../actions/simpleAction";
import styles from "./styles";
import { SIMPLE_ACTION_SUCCESS, SIMPLE_ACTION_FAIL } from "../../actions/actiontypes";
import { USER_INFO } from "../../utils/const";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillReceiveProps(props) {
    console.log("signin", props);
    let key = props.simpleReducer.actionType;
    switch (key) {
      case SIMPLE_ACTION_SUCCESS:
        let data = props.simpleReducer.result;
        localStorage.setItem(USER_INFO, JSON.stringify(data));
        window.location.href = "/";
        break;
      case SIMPLE_ACTION_FAIL:
        window.location.href = "/sign-up";
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div id="signinContainer">
          <input className="input" type="text" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <button id="submit" onClick={() => this.simpleAction()}>
            Sign in
          </button>
        </div>
      </div>
    );
  }
  simpleAction = event => {
    this.props.simpleAction();
  };
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
