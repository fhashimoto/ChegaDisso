import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
    return(
        <header>
            <nav>
                <Link to="/"><button id="botao_menu">VOLTAR MENU</button></Link>
                <div className="cabecalho container">
                    <Link to="/">
                        <div id="titulo">chega disso</div>
                    </Link>
                    <div id="categoria">Categorias</div>
                    <div id="contato">Contato</div>
                </div>
            </nav>
        </header>
    );
    }
}

export default Header;