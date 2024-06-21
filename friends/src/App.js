import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Link to="/friend/add-new">Add Friend</Link>
        
        <Switch>
          <PrivateRoute path="/friends/add-new" component={NewFriendForm}/>
          <PrivateRoute path="/friends" component={FriendsList}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
