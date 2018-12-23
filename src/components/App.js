import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Samples from './Samples';

const App = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around'
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/">Samples</Link>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Samples} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
