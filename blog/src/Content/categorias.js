import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../header';
import Form from '../form';
import Footer from '../footer';


class Categorias extends Component{
    teste(){
        window.scroll(0, 200);
    }

    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="corpoCategoria">
                    <ul> <p>Na midia</p>
                        <Link to="/lema_e" className="linkColor" onClick={this.teste}>
                            <li>Quando o lema é: não empurra!</li>
                        </Link>
                        <Link to="/conf" className="linkColor" onClick={this.teste}>
                            <li>Confiança dos pequenos negócios na economia do país apresenta queda</li>
                        </Link>
                    </ul>
                    <ul> <p>Aprenda</p>
                        <Link to="/chega_disso" className="linkColor" onClick={this.teste}>
                            <li>Chega disso que impede a sua empresa de crescer</li>
                        </Link>
                        <Link to="/declaracao_mei" className="linkColor" onClick={this.teste}>
                            <li>Declaração anual do MEI o que você precisa saber</li>
                        </Link>
                        <Link to="/teste_gestao" className="linkColor" onClick={this.teste}>
                            <li>Teste sua gestão agora</li>
                        </Link>
                        <Link to="/tempo_deus" className="linkColor" onClick={this.teste}>
                            <li>Tempo não é dinheiro, tempo é Deus</li>
                        </Link>
                        <Link to="/maquina_ideal" className="linkColor" onClick={this.teste}>
                            <li>Conheça a máquina de cartão ideal para o seu negócio</li>                    
                        </Link>
                        <Link to="/e_agora" className="linkColor" onClick={this.teste}>
                            <li>Abri minha empresa, e agora?</li>
                        </Link>
                        <Link to="/4_dicas" className="linkColor" onClick={this.teste}>
                            <li>4 dicas para começar bem o seu negócio</li>
                        </Link>
                    </ul>
                    
                    <ul><p>Inspire-se</p>
                        <Link to="/mulher_empreendedora" className="linkColor" onClick={this.teste}>
                            <li>Mulher empreendedora, inspire-se!</li>
                        </Link>
                        <Link to="/gestao_fundamental" className="linkColor" onClick={this.teste}>
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