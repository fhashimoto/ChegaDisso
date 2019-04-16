import React, {Component} from 'react';

import Header from '../header';
import Form from '../form';
import Footer from '../footer';

class Texto4 extends Component {
    render(){
        return(
            <div>
            <Header/>
            <Form/>
            <div className="titulo_texto">
                <div id="quadrado_texto"></div>
                <h1>Quando o lema é: não empurra!</h1>
                <p className="subtitle">Experiência do cliente é a chave de sucesso para qualquer empresa que quer prosperar nos próximos anos</p>
            </div>
            <div className="corpo_texto">
                <img src="https://i.imgur.com/G1DnDLo.png" className="foto_texto" alt=""/>
                <p className="conteudo">Quem nunca comprou uma roupa porque a lojista ficou falando que você estava linda(o) e acabou se arrependendo da compra? Hoje não há espaço para esse tipo de comércio. O valor da experiência é rei, seja nas lojas física ou e-commerce, seja no Brasil ou na Europa. Um estudo desenvolvido pela consultoria PwC, analisou a opinião de milhares de consumidores em todo o mundo para entender o que é importante para eles. Confira os principais aprendizados que você pode levar para a sua empresa.</p>
                <h2>Marcas que oferecem uma experiência melhor podem cobrar mais por isso</h2>
                <p className="conteudo">Caso a experiência de compra seja satisfatória, o brasileiro aceita pagar cerca de 20% a mais por ingressos para eventos esportivos. Já no caso dos restaurantes, essa diferença de preço é de cerca de 17% e por uma assinatura de TV a cabo chega a 15%. Os consumidores também estão dispostos a pagar mais por serviços personalizados, como entrega mais rápida ou no mesmo dia. Por isso, a dica de ouro para as pequenas e médias empresas é pensar em como personalizar seu serviço ou como melhorar a experiência do cliente para fidelizá-lo.</p>
                <h2>A interação humana é um elemento fundamental</h2>
                <p className="conteudo">Não há dúvidas que a interação é importante e continuará sendo nos próximos anos. Mesmo com os avanços da tecnologia, 68% dos brasileiros e 75% dos consumidores globais esperam interagir mais com pessoas do que com serviços automatizados. Além disso, esperam que a tecnologia por trás da interação humana seja transparente e discreta em todos os seus pontos de contato. Mesmo que a sua empresa seja um e-commerce, tenha o cuidado de entender como está sendo a experiência do cliente durante todo o processo de compra. Pesquisas de avaliação pós compra, canais de SAC, entre outros, podem ajudar muito a sua empresa a corrigir as falhas e melhorar a jornada do consumidor.</p>
                <h2>Você não tem muitas chances de acertar</h2>
                <p className="conteudo">Imagina perder quase metade dos seus clientes em um único dia? É exatamente isso o que pode acontecer depois de uma única experiência ruim com seu produto ou sua marca. Mesmo que adorem um produto, 47% das pessoas no Brasil dizem que parariam de comprar de uma empresa após uma única experiência negativa; 40% indicam ainda um pouco mais de persistência e parariam de comprar depois de algumas experiências negativas.</p>
                <p className="conteudo">Ou seja, se a experiência não é sua estratégia, você está fazendo errado.</p>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Texto4;