import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';

class Obrigado extends Component{
    render(){
        return(
            <div className="agradecimento">
                Obrigado pela inscrição
            </div>
        )
    }
}

export default Obrigado;