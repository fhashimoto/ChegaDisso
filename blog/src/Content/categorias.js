import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Form from '../form';
import Footer from '../footer';


class Categorias extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="corpoCategoria">
                    <ul> Na midia
                        <Link to="/lema_e" className="linkColor">
                            <li>Quando o lema é: não empurra!</li>
                        </Link>
                        <Link to="/conf" className="linkColor">
                            <li>Confiança dos pequenos negócios na economia do país apresenta queda</li>
                        </Link>
                    </ul>
                    <ul>Aprenda
                        <Link to="/chega_disso" className="linkColor">
                            <li>Chega disso que impede a sua empresa de crescer</li>
                        </Link>
                        <Link to="/declaracao_mei" className="linkColor">
                            <li>Declaração anual do MEI o que você precisa saber</li>
                        </Link>
                        <Link to="/teste_gestao" className="linkColor">
                            <li>Teste sua gestão agora</li>
                        </Link>
                        <Link to="/tempo_deus" className="linkColor">
                            <li>Tempo não é dinheiro, tempo é Deus</li>
                        </Link>
                        <Link to="/maquina_ideal" className="linkColor">
                            <li>Conheça a máquina de cartão ideal para o seu negócio</li>                    
                        </Link>
                        <Link to="/e_agora" className="linkColor">
                            <li>Abri minha empresa, e agora?</li>
                        </Link>
                        <Link to="/4_dicas" className="linkColor">
                            <li>4 dicas para começar bem o seu negócio</li>
                        </Link>
                    </ul>
                    
                    <ul>Inspire-se
                        <Link to="/mulher_empreendedora" className="linkColor">
                            <li>Mulher empreendedora, inspire-se!</li>
                        </Link>
                        <Link to="/gestao_fundamental" className="linkColor">
                            <li>Birigui ou São Paulo: gestão é fundamental para o negócio, não importa a cidade</li>
                        </Link>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Categorias;