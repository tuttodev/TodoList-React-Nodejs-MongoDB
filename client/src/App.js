import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';

// pages
import Home from './pages/Home'
import TodoEdit from './pages/Todo-Edit'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/todo-edit/:id' component={TodoEdit}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
