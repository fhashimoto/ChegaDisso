import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Home from './home';
import Agradecimento from './Agradecimento';
import Texto1 from './Content/texto1';
import Texto2 from './Content/texto2';
import Texto3 from './Content/texto3';
import Texto4 from './Content/texto4';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/obrigado" component={Agradecimento}/>
          <Route path="/chega_disso" component={Texto1}/>
          <Route path="/lema_e" component={Texto4}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
