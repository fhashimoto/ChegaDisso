import React, {Component} from 'react';
import Header from '../header';
import Form from '../form';
import Footer from '../footer';

export class Sobre extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="titulo_texto">
                    <div id="quadrado_texto"></div>
                    <h1>Sobre o Chega disso</h1>
                    {/* <p className="subtitle">Conheça o blog que vai compartilhar todas as dicas para melhorar a gestão da sua PME</p> */}
                </div>
                <div className="corpo_texto">
                    <p className="conteudo">O blog Chega disso foi criado para possibilitar mais gestão e competitividade para as pequenas e médias empresas (PME). Vamos falar de temas quentes que nenhuma PME pode ignorar, trazer conteúdos que vão ajudar na estruturação das empresas, contar histórias que vão inspirar os nossos leitores, e, por que não, trazer um pouco de diversão para o mundo dos empreendedores.</p>
                    <p className="conteudo">Aqui o lema é: chega de post it para organizar as contas que você pagou no final do mês, de achismos, de esperar o consumidor bater na sua porta, de torcer por mudanças no cenário econômico do país. Com gestão e a tecnologia você pode transformar a experiência dos seus consumidores. Vem com a gente!</p>
                </div>
                <Footer/>
            </div>
        )
    }
}