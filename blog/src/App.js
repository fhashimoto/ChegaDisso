import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './css/App.css';
import './css/header.css';
import './css/form.css';
import './css/footer.css';
import './css/resume.css';
import './css/textos.css';
import './css/agradecimento.css';
import './css/categorias.css';
import './css/share.css';
import './css/equipe.css';
import './css/menu.css';

import Home from './home';
import Agradecimento from './Agradecimento';
import Error from './error';
import {Texto1, Texto2, Texto3, Texto4, Texto5, Texto6, Texto7, Texto8, Texto9, Texto10, Texto11, Texto12} from './Content/textos';
import { Sobre } from "./Content/sobre";
import Categorias from "./Content/categorias";
import Equipe from './Content/equipe';
import { NaMidia, Aprenda, Inspire } from "./Content/submenu";

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
            <Route path="/conf" component={Texto5}/>
            <Route path="/teste_gestao" component={Texto6}/>
            <Route path="/tempo_deus" component={Texto7}/>
            <Route path="/maquina_ideal" component={Texto8}/>
            <Route path="/e_agora" component={Texto9}/>
            <Route path="/4_dicas" component={Texto10}/>
            <Route path="/gestao_fundamental" component={Texto11}/>
            <Route path="/stefano_milo" component={Texto12}/>
            <Route path="/about" component={Sobre}/>
            <Route path="/cat" component={Categorias}/>
            <Route path="/equipe" component={Equipe}/>
            <Route path="/na_midia" component={NaMidia}/>
            <Route path="/aprenda" component={Aprenda}/>
            <Route path="/inspire" component={Inspire}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
