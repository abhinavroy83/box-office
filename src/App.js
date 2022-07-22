import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Nav from './components/Nav';
import {ThemeProvider} from 'styled-components'
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>


    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route>
        <div>page not found 404?</div>
      </Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
