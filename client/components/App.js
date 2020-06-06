import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import Main from '../pages/Main';

const App = (props) => {
  return (
    <Switch>
      <Route exact path={'/'} component={SignIn} />
      <Route exact path={'/main'} component={Main} />
      {/* <Route exact path={'/signin'} component={SignIn} /> */}
    </Switch>
  );
};

export default App;
