import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Note from "./components/Notes/Note";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";
import AddNotes from "./components/Notes/AddNotes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: ""
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Signup} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/notes" component={Note} />
            <Route path="/addnotes" component={AddNotes} />
            <Route path="/profile" component={User} />
            <Route path="/weather" component={Weather} />
            <Link to="/notes">User</Link>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
