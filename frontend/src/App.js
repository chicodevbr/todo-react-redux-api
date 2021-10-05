import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/auth/SignIng';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import Todos from './components/todos/Todos';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Todos} />
      </BrowserRouter>
    </>
  );
}

export default App;
