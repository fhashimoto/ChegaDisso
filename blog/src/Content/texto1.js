import React, {Component} from 'react';

import Header from '../header';
import Form from '../form';
import Footer from '../footer';

class Texto1 extends Component {
    render(){
        return(
            <div>
            <Header/>
            <Form/>
            <div className="titulo_texto">
                <h1>Chega disso que impede a sua empresa de crescer</h1>
                <p className="subtitle">Conheça o blog que vai compartilhar todas as dicas para melhorar a gestão da sua PME</p>
            </div>
            <div className="corpo_texto">
                <div className="foto_texto"></div>
                <p className="conteudo">Chega de post it para organizar as contas que você pagou no final do mês, de achismos, de esperar o consumidor bater na sua porta, de torcer por mudanças no cenário econômico do país. Muitos podem pensar: “eu não preciso disso, minha empresa está muito bem e adoro meu próprio método para lembrar de pagar as contas”. Concordamos que cada negócio tem uma particularidade e pode exigir uma ferramenta diferente, mas a gestão e a tecnologia precisam permear todas elas.</p>
                <p className="conteudo">Empresas que não tem gestão e tecnologia para ajudar com suas finanças, tem grandes chances de entrar em um índice brasileiro bem alarmante. Segundo a pesquisa Demografia das Empresas, divulgada pelo Instituto Brasileiro de Geografia e Estatística (IBGE) cinco anos após as empresas serem criadas, pouco mais de 60% delas fecharam as portas. O estudo ainda aponta que das 733,6 mil empresas que nasceram em 2010, apenas 277,2 mil sobreviveram até 2015. </p>
                <h2>O que faz uma pequena e média empresa (PME) sobreviver?</h2>
                <p className="conteudo">A fórmula não é mágica, afinal não são cinco passos que vão resolver sua vida. Mas o blog Chega disso vai trazer conteúdos que vão ajudá-lo a estruturar sua empresa, vai falar de temas quentes que nenhuma PME pode ignorar, como o imposto de renda, e, claro, inspirá-lo com histórias que vão te motivar a seguir em frente. </p>
                <p className="conteudo">Para mostrar um pouco do que vem por aí, ressaltamos que 89% dos brasileiros apontam a experiência como um fator importante em suas decisões de compra. Esse dado tem tirado o sono dos gestores das grandes empresas e também precisa ser muito considerado na jornada de compra das PME. E aí...como está sendo a experiência dos seus consumidores?</p>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Texto1;