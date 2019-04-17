import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
    return(
        <div>
            <header>
                <div className="cabecalho container">
                    <Link to="/" className="linkColor">
                        <div id="titulo">chega disso</div>
                    </Link>
                    <div id="categoria">Categorias</div>
                    <div id="contato">Contato</div>
                </div>
            </header>
            <img src="https://i.imgur.com/UpgzdD0.jpg" id="imgPrinc" alt=""/>
        </div>
    );
    }
}

export default Header;