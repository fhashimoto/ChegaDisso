import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/App.css';
import './css/header.css';
import './css/form.css';
import './css/footer.css';
import './css/resume.css';
import './css/textos.css';

import Home from './home';
import Agradecimento from './Agradecimento';
import Error from './error';
import {Texto1, Texto2, Texto3, Texto4} from './Content/textos';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/obrigado" component={Agradecimento}/>
            <Route path="/chega_disso" component={Texto1}/>
            <Route path="/mulher_empreendedora" component={Texto2}/>
            <Route path="/declaracao_mei" component={Texto3}/>
            <Route path="/lema_e" component={Texto4}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
