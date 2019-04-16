import React, {Component} from 'react';

class Resume extends Component {
    render(){
        return(
            <div className="corpo_resumo">
            <div className="container resume">
                <div className="foto">FOTO</div>
                <div className="resume1">
                    <h1>Chega disso que impede a sua empresa de crescer</h1>
                    <p>Chega de post it para organizar as contas que você pagou no final do mês, de achismos, de esperar o consumidor bater na sua porta, de torcer por mudanças no cenário econômico do país.</p>
                </div>
            </div>
            <div className="container resume">
                <div className="foto">FOTO</div>
                <div className="resume1">
                    <h1>Mulher empreendedora, inspire-se!</h1>
                    <p>Muitas mulheres escutam a história da Luiza Trajano, que transformou a loja fundada pelos tios em um dos maiores varejistas do país, o Magazine Luiza, ou da Sônia Hess, fundadora da Dudalina e pensam que é algo muito distante do que ela mesma pode alcançar. Mas não é.</p>
                </div>
            </div>
            <div className="container resume">
                <div className="foto">FOTO</div>
                <div className="resume1">
                    <h1>Declaração Anual do MEI</h1>
                    <p>Se você é Microempreendedor Individual (MEI), ou seja, fatura até R$ 81 mil por ano, você tem compromisso anual com a Declaração Anual do Simples Nacional (DASN) e deixar para a última hora a entrega pode ser um grande problema. Entenda porquê.</p>
                </div>
            </div>
            <div className="container resume">
                <div className="foto">FOTO</div>
                <div className="resume1">
                    <h1>Quando o lema é: não empurra!</h1>
                    <p>Quem nunca comprou uma roupa porque a lojista ficou falando que você estava linda(o) e acabou se arrependendo da compra? Hoje não há espaço para esse tipo de comércio. O valor da experiência é rei, seja nas lojas física ou e-commerce, seja no Brasil ou na Europa.</p>
                </div>
            </div>
            </div>
        )
    }
}
export default Resume;