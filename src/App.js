import React from "react";
// import classNames from "classnames";
import { Route, Switch, Redirect } from "react-router";
import DemoScreen from "./routes/demoscreen";
import SignUp from "./routes/signup";
import SignIn from "./routes/signin";
import { USER_INFO } from "./utils/const";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolldown: true
    };
  }
  render() {
    return (
      <div {...this.props}>
        <div>
          <div>
            <div>
              <div className="col-xs-12">{routes}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const userInfo = localStorage.getItem(USER_INFO);

const routes = (
  <Switch>
    <Route path="/" exact component={DemoScreen} />
    <Route path="/sign-up" render={() => (userInfo ? <Redirect to="/" /> : <SignUp />)} />
    <Route path="/sign-in" render={() => (userInfo ? <Redirect to="/" /> : <SignIn />)} />
  </Switch>
);

export default App;
