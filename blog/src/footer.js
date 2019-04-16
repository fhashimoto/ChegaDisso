import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <div>
                <div className="footer">
                    <div className="titulo">Chega disso</div>
                    <div className="info">
                        <span>Sobre</span>
                        <span>Equipe</span>
                        <span>Contato</span>
                    </div>
                    <div className="copyr"> Copyright &copy; - Chega Disso - Todos os direitos reservados</div>
                </div>
            </div>
        )
    }
}

export default Footer;