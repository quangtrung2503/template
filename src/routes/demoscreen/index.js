import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../logo.svg";
// import "./App.css";
import { simpleAction } from "../../actions/simpleAction";
import styles from "./styles";
import { USER_INFO } from "../../utils/const";

class DemoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    localStorage.removeItem(USER_INFO);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.simpleAction} style={styles.button}>
          Test redux action
        </button>
      </div>
    );
  }
  simpleAction = event => {
    this.props.simpleAction();
  };
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoScreen);
