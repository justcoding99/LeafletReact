import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.css';
import LoginForm from "./LoginForm";
import { Leaflet } from './leaflet';
import SignupForm from "./signup";
import Users from "./users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    
    return (
      <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/leaflet">Leaflet</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/LoginForm">Login</Link>             
            </li>          
          </ul>
        </nav>


        <Switch>
        <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/leaflet">
            <Leaflet />
          </Route>

          <Route path="/LoginForm">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
    );

  }
  
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

