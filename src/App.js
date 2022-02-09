import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileProvider from './Context/ProfileProvider';
import Profile from './Pages/Profile';
import Contact from './Pages/Contatc';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <Route exact path='/' component={ Profile } />
        <Route exact path='/contact' component={ Contact } />
      </Switch>
    </ProfileProvider>
  );
}

export default App;
