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
                    <Link to="/about" className="linkColor">
                        <div id="sobre">Sobre</div>
                    </Link>
                    <div id="contato">Contato</div>
                </div>
                <div className="icones">
                    <a href="https://www.facebook.com/blog.chegadisso/"><img src="https://i.imgur.com/riJqSMK.png" className="icon" alt=""/></a>
                    <a href="https://www.instagram.com/chega.disso/"><img src="https://i.imgur.com/gKCIAmf.png" className="icon" alt=""/></a>
                    <a href="https://www.linkedin.com/company/14051668"><img src="https://i.imgur.com/cUd1gJU.png" className="icon" alt=""/></a>
                </div>
            </div>
        </div>
    );
    }
}

export default Header;