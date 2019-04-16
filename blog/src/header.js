import React, {Component} from 'react';

class Header extends Component {
    render(){
    return(
        <header>
            <nav>
                <div className="cabecalho container">
                    <div id="titulo">chega disso</div>
                    <div id="categoria">Categorias</div>
                    <div id="contato">Contato</div>
                </div>
            </nav>
        </header>
    );
    }
}

export default Header;