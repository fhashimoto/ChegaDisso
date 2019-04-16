import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="titulo">Chega disso</div>
                <div className="info">
                    <a>Sobre</a>
                    <a>Equipe</a>
                    <a>Contato</a>
                </div>
                <div className="copyr"> Copyright &copy; - Chega Disso - Todos os direitos reservados</div>
            </div>
        )
    }
}

export default Footer;