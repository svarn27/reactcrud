import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

import Client from './components/client.component';
import ClientEdit from './components/client.edit.component';

library.add(faCheckCircle, faTimesCircle, faPhone, faFacebook, faTwitter);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Appointment Application</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/client'} className="nav-link">Clients</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
        <h2>Welcome to your RSS Dashboard</h2> <br/>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/client/edit/:id' component={ ClientEdit } />
              <Route path='/index' component={ Index } />
              <Route path='/client' component={ Client } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
