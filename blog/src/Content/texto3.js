import React, {Component} from 'react';

import Header from '../header';
import Form from '../form';
import Footer from '../footer';

class Texto3 extends Component {
    render(){
        return(
            <div>
            <Header/>
            <Form/>
            <div className="titulo_texto">
                <div id="quadrado_texto"></div>
                <h1>Declaração Anual do MEI: o que você precisa saber</h1>
                <p className="subtitle">Lembre-se que você tem até o dia 31 de maio para entregar</p>
            </div>
            <div className="corpo_texto">
                <img src="https://i.imgur.com/xAMrqWe.png" className="foto_texto" alt=""/>
                <p className="conteudo">Se você é Microempreendedor Individual (MEI), ou seja, fatura até R$ 81 mil por ano, você tem compromisso anual com a Declaração Anual do Simples Nacional (DASN) e deixar para a última hora a entrega pode ser um grande problema. Entenda porquê.</p>
                <p className="conteudo">Acreditamos que você viu bastante sobre as vantagens de se formalizar como MEI e que o principal compromisso é o pagamento mensal da sua contribuição por meio da guia DAS. É justamente nesse momento que muitos acabam se equivocando e esquecendo da declaração anual do MEI.</p>
                <p className="conteudo">A DASN é a obrigação anual precisa ser entregue no início do ano por todos dos empreendedores. Como estamos em 2019, devem ser informados os dados de receitas brutas obtidas pela empresa do MEI entre 1 de janeiro de 2018 e 31 de dezembro de 2018. Esse processo é totalmente gratuito e pode ser feito sem a ajuda de um contador, se você preferir. No entanto, a presença desse profissional sempre ajude a ter atenção a pontos importantes.</p>
                <h2>Fique atento</h2>
                <ul>
                    <li>Quem não entregar até o dia 31 de maio pode receber multa, perder o direito a benefícios do INSS e ter o registro da empresa cancelado.</li>
                    <li>Você precisa das informações do seu faturamento bruto durante o período e também observar se houve alguma mudança no seu painel de funcionários ao longo do ano que passou.</li>
                    <li>Não se esqueça que quando você entregar a Declaração de Imposto de Renda (IRPF), também será necessário a entrega da DASN.</li>
                    <li>Lembre-se que as contas da empresa não devem se misturar com as contas pessoais, isso facilita o processo de levantamento dos valores.</li>
                </ul>
                <p className="conteudo">Para estar atento aos prazos e mudanças nas leis, inscreva-se no Chega disso e acompanhe os nossos conteúdos pela nosso blog.</p>                
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Texto3;