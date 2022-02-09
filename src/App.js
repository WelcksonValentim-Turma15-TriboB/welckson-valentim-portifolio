import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileProvider from './Context/ProfileProvider';
import Profile from './Pages/Profile';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path='/' component={ Profile } />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
