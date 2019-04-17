import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
    return(
        <div>
            <img src="https://i.imgur.com/UpgzdD0.jpg" id="imgPrinc" alt=""/>
            <div className="cabecalho">
                <Link to="/" className="linkColor">
                    <div id="titulo">chega disso</div>
                </Link>
                <div className="link">
                    <div id="sobre">Sobre</div>
                    <div id="contato">Contato</div>
                </div>
                <div className="icones">
                    <img src="https://i.imgur.com/riJqSMK.png" className="icon" alt=""/>
                    <img src="https://i.imgur.com/gKCIAmf.png" className="icon" alt=""/>
                    <img src="https://i.imgur.com/cUd1gJU.png" className="icon" alt=""/>
                </div>
            </div>
        </div>
    );
    }
}

export default Header;