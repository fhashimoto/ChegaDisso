import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import $ from 'jquery';

class Header extends Component {
    handleClick(){
        $("#categorias").unbind().click( function() {
            console.log("clicado");
            $(".menuToggle").slideToggle();
            $("#imgPrinc").toggleClass("sombra");
        })
    }

    render(){
    return(
        <div>
            <img src="https://i.imgur.com/UpgzdD0.jpg" id="imgPrinc" alt=""/>
            <div className="cabecalho">
                <Link to="/" className="linkColor">
                    <div id="titulo">cheg&#64; disso</div>
                </Link>
                <div className="link">
                    <Link to="/about" className="linkColor">
                        <div id="sobre">Sobre</div>
                    </Link>
                    
                        <div id="categorias" onClick={this.handleClick}>Categorias</div>
                    {/* </Link> */}
                </div>
                <div className="icones">
                    <a href="https://www.facebook.com/blog.chegadisso/"><img src="https://i.imgur.com/riJqSMK.png" className="icon" alt=""/></a>
                    <a href="https://www.instagram.com/chega.disso/"><img src="https://i.imgur.com/gKCIAmf.png" className="icon" alt=""/></a>
                    <a href="https://www.linkedin.com/company/14051668"><img src="https://i.imgur.com/cUd1gJU.png" className="icon" alt=""/></a>
                </div>
            </div>

            <div className="menuToggle">
                <ul> <p>Na midia</p>
                    <Link to="/lema_e" className="linkColor">
                        <li>Quando o lema é: não empurra!</li>
                    </Link>
                    <Link to="/conf" className="linkColor">
                        <li>Confiança dos pequenos negócios na economia do país apresenta queda</li>
                    </Link>
                </ul>
                <ul> <p>Aprenda</p>
                    <Link to="/chega_disso" className="linkColor" >
                        <li>Chega disso que impede a sua empresa de crescer</li>
                    </Link>
                    <Link to="/declaracao_mei" className="linkColor" >
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
                
                <ul><p>Inspire-se</p>
                    <Link to="/mulher_empreendedora" className="linkColor">
                        <li>Mulher empreendedora, inspire-se!</li>
                    </Link>
                    <Link to="/gestao_fundamental" className="linkColor">
                        <li>Birigui ou São Paulo: gestão é fundamental para o negócio, não importa a cidade</li>
                    </Link>
                </ul>

                <Link to="/cat" className="linkColor">
                    <ul>Veja todas as categorias</ul>
                </Link>

            </div>
        </div>
    );
    }
}

export default Header;