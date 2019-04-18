import React, {Component} from 'react';
import Header from '../header';
import Form from '../form';
import Footer from '../footer';

export class Texto1 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        {/* <div id="quadrado_texto"></div> */}
                        <h1>Chega disso que impede a sua empresa de crescer</h1>
                        <p className="subtitle">Conheça o blog que vai compartilhar todas as dicas para melhorar a gestão da sua PME</p>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/ozun5qK.png" className="foto_texto" alt=""/>
                        <p className="conteudo">Chega de post it para organizar as contas que você pagou no final do mês, de achismos, de esperar o consumidor bater na sua porta, de torcer por mudanças no cenário econômico do país. Muitos podem pensar: “eu não preciso disso, minha empresa está muito bem e adoro meu próprio método para lembrar de pagar as contas”. Concordamos que cada negócio tem uma particularidade e pode exigir uma ferramenta diferente, mas a gestão e a tecnologia precisam permear todas elas.</p>
                        <p className="conteudo">Empresas que não tem gestão e tecnologia para ajudar com suas finanças, tem grandes chances de entrar em um índice brasileiro bem alarmante. Segundo a pesquisa Demografia das Empresas, divulgada pelo Instituto Brasileiro de Geografia e Estatística (IBGE) cinco anos após as empresas serem criadas, pouco mais de 60% delas fecharam as portas. O estudo ainda aponta que das 733,6 mil empresas que nasceram em 2010, apenas 277,2 mil sobreviveram até 2015. </p>
                        <h2>O que faz uma pequena e média empresa (PME) sobreviver?</h2>
                        <p className="conteudo">A fórmula não é mágica, afinal não são cinco passos que vão resolver sua vida. Mas o blog Chega disso vai trazer conteúdos que vão ajudá-lo a estruturar sua empresa, vai falar de temas quentes que nenhuma PME pode ignorar, como o imposto de renda, e, claro, inspirá-lo com histórias que vão te motivar a seguir em frente. </p>
                        <p className="conteudo">Para mostrar um pouco do que vem por aí, ressaltamos que 89% dos brasileiros apontam a experiência como um fator importante em suas decisões de compra. Esse dado tem tirado o sono dos gestores das grandes empresas e também precisa ser muito considerado na jornada de compra das PME. E aí...como está sendo a experiência dos seus consumidores?</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto2 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        {/* <div id="quadrado_texto"></div> */}
                        <h1>Mulher empreendedora, inspire-se!</h1>
                        <p className="subtitle">Conheça a história da fundadora do Coffee Lab, cafeteria premiada e escola de baristas</p>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/XAdjluv.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">Conheça a história da fundadora do Coffee Lab, cafeteria premiada e escola de baristas</p>
                        <p className="conteudo">Conheça agora a história da Isabela Raposeiras, fundadora do Coffee Lab - uma cafeteria e escola de baristas premiada e reconhecida internacionalmente. Aqui você encontra algumas dicas que ela deixou sobre autoconhecimento, inovação e disciplina.</p>
                        <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/tHae9aRaFhw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video_1"></iframe></div>
                        <p className="conteudo">Já Anaíra Costa, dona da Lavanderia Water Clean, conta um pouco da história da empresa e fala sobre sua atuação dentro dela até chegar à presidência e ainda declara "São as mulheres que fazem o seu lugar".</p>
                        <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ssrkR_1BFwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video_2"></iframe></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto3 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        {/* <div id="quadrado_texto"></div> */}
                        <h1>Declaração Anual do MEI: o que você precisa saber</h1>
                        <p className="subtitle">Lembre-se que você tem até o dia 31 de maio para entregar</p>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/39w5Ali.jpg" className="foto_texto" alt=""/>
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
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto4 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        {/* <div id="quadrado_texto"></div> */}
                        <h1>Quando o lema é: não empurra!</h1>
                        <p className="subtitle">Experiência do cliente é a chave de sucesso para qualquer empresa que quer prosperar nos próximos anos</p>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/wf2fN2e.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">Quem nunca comprou uma roupa porque a lojista ficou falando que você estava linda(o) e acabou se arrependendo da compra? Hoje não há espaço para esse tipo de comércio. O valor da experiência é rei, seja nas lojas física ou e-commerce, seja no Brasil ou na Europa. Um estudo desenvolvido pela consultoria PwC, analisou a opinião de milhares de consumidores em todo o mundo para entender o que é importante para eles. Confira os principais aprendizados que você pode levar para a sua empresa.</p>
                        <h2>Marcas que oferecem uma experiência melhor podem cobrar mais por isso</h2>
                        <p className="conteudo">Caso a experiência de compra seja satisfatória, o brasileiro aceita pagar cerca de 20% a mais por ingressos para eventos esportivos. Já no caso dos restaurantes, essa diferença de preço é de cerca de 17% e por uma assinatura de TV a cabo chega a 15%. Os consumidores também estão dispostos a pagar mais por serviços personalizados, como entrega mais rápida ou no mesmo dia. Por isso, a dica de ouro para as pequenas e médias empresas é pensar em como personalizar seu serviço ou como melhorar a experiência do cliente para fidelizá-lo.</p>
                        <h2>A interação humana é um elemento fundamental</h2>
                        <p className="conteudo">Não há dúvidas que a interação é importante e continuará sendo nos próximos anos. Mesmo com os avanços da tecnologia, 68% dos brasileiros e 75% dos consumidores globais esperam interagir mais com pessoas do que com serviços automatizados. Além disso, esperam que a tecnologia por trás da interação humana seja transparente e discreta em todos os seus pontos de contato. Mesmo que a sua empresa seja um e-commerce, tenha o cuidado de entender como está sendo a experiência do cliente durante todo o processo de compra. Pesquisas de avaliação pós compra, canais de SAC, entre outros, podem ajudar muito a sua empresa a corrigir as falhas e melhorar a jornada do consumidor.</p>
                        <h2>Você não tem muitas chances de acertar</h2>
                        <p className="conteudo">Imagina perder quase metade dos seus clientes em um único dia? É exatamente isso o que pode acontecer depois de uma única experiência ruim com seu produto ou sua marca. Mesmo que adorem um produto, 47% das pessoas no Brasil dizem que parariam de comprar de uma empresa após uma única experiência negativa; 40% indicam ainda um pouco mais de persistência e parariam de comprar depois de algumas experiências negativas.</p>
                        <p className="conteudo">Ou seja, se a experiência não é sua estratégia, você está fazendo errado.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto5 extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        {/* <div id="quadrado_texto"></div> */}
                        <h1>Confiança dos pequenos negócios na economia do país apresenta queda</h1>
                    </div>
                    <div className="corpo_texto">
                        {/* <img src="https://i.imgur.com/ozun5qK.png" className="foto_texto" alt=""/> */}
                        <p className="conteudo">O índice de otimismo dos empreendedores quanto aos rumos da economia brasileira caiu cerca de 10 pontos percentuais nos primeiros três meses de 2019, mas a confiança dos donos de micro e pequenos negócios continua em alta. É o que mostra a Sondagem Conjuntural feita pelo Sebrae. O estudo aponta que 69,6% dos empresários entrevistados estão acreditando na recuperação do país, contra 79,5% apontado na pesquisa de dezembro, quando foi feito o último levantamento. </p>
                        <p className="conteudo">A marca de 79,5% de empreendedores otimistas, verificada em dezembro, foi a maior já registrada desde junho de 2017, quando a pesquisa começou a ser feita pelo Sebrae. O levantamento, feito trimestralmente, tem como objetivo conhecer as expectativas dos donos de pequenos negócios em relação à economia brasileira e ao seu próprio empreendimento.</p>
                        <p className="conteudo">A Sondagem conjuntural ouviu 2.992 Microempreendedores Individuais (MEI), empresários de Micro e Pequenas Empresas (ME) e donos de Empresas de Pequeno Porte (EPP). Mais da metade deles (68,5%) se mostraram bastante otimistas com relação à melhora do faturamento de sua empresa em 2019, apesar da queda de quase 9 pontos percentuais em relação a dezembro de 2018. Os que acreditam que a situação vai ficar como está, somaram 22,5%, índice maior do que ano passado, que era 16,8%, enquanto que os pessimistas cresceram de 3,3% para 6,8%.</p>
                        <p className="conteudo">Cadastre-se no blog e receba mais conteúdos como este.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}