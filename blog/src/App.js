import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Home from './home';
import Agradecimento from './Agradecimento';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/obrigado" component={Agradecimento}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
