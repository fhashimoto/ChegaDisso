import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Share from '../Content/share-button';

export class Resumo1 extends Component {
    render(){
        return(
            <div className="container resume">
                <Link to="/chega_disso">
                <img src="https://i.imgur.com/dPYm3OE.jpg" className="foto" alt="" />
                </Link>
                <div className="resume1">
                    <span id="categoria-texto">Aprenda</span>                
                    <Link to="/chega_disso" className="linkColor">
                    <h1>Chega disso que impede a sua empresa de crescer</h1>
                    </Link>
                    
                    <p>Chega de post it para organizar as contas que você pagou no final do mês, de achismos, de esperar o consumidor bater na sua porta, de torcer por mudanças no cenário econômico do país.</p>
                    <Link to="/chega_disso" className="linkColor">
                        <p className="saibamais">Saiba Mais</p>
                    </Link>
                    <Share/>
                </div>
            </div>
        )
    }
}

export class Resumo2 extends Component{
    render(){
        return(
            <div className="container resume">
                <Link to="/mulher_empreendedora">
                <img src="https://i.imgur.com/XAdjluv.jpg" className="foto" alt=""/>
                </Link>
                <div className="resume1">
                    <span id="categoria-texto">Inspire-se</span>
                    <Link to="/mulher_empreendedora" className="linkColor">
                    <h1>Mulher empreendedora, inspire-se!</h1>
                    </Link>
                    
                    <p>Muitas mulheres escutam a história da Luiza Trajano, que transformou a loja fundada pelos tios em um dos maiores varejistas do país, o Magazine Luiza, ou da Sônia Hess, fundadora da Dudalina e pensam que é algo muito distante do que ela mesma pode alcançar. Mas não é.</p>
                    <Link to="/mulher_empreendedora" className="linkColor">
                        <p className="saibamais">Saiba Mais</p>
                    </Link>
                    <Share/>
                </div>
            </div>
        )
    }
}

export class Resumo3 extends Component{
    render(){
        return(
            <div className="container resume">
                <Link to="/declaracao_mei">
                <img src="https://i.imgur.com/39w5Ali.jpg" className="foto" alt=""/>
                </Link>
                <div className="resume1">
                    <span id="categoria-texto">Aprenda</span>
                    <Link to="/declaracao_mei" className="linkColor">
                    <h1>Declaração Anual do MEI</h1>
                    </Link>
                    
                    <p>Se você é Microempreendedor Individual (MEI), ou seja, fatura até R$ 81 mil por ano, você tem compromisso anual com a Declaração Anual do Simples Nacional (DASN) e deixar para a última hora a entrega pode ser um grande problema. Entenda porquê.</p>
                    <Link to="/declaracao_mei" className="linkColor">
                        <p className="saibamais">Saiba Mais</p>
                    </Link>
                    <Share/>
                </div>
            </div>
        )
    }
}

export class Resumo4 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/lema_e">
                    <img src="https://i.imgur.com/5BP1D05.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Na mídia</span>
                        <Link to="/lema_e" className="linkColor">
                        <h1>Quando o lema é: não empurra!</h1>
                        </Link>
                        
                        <p>Quem nunca comprou uma roupa porque a lojista ficou falando que você estava linda(o) e acabou se arrependendo da compra? Hoje não há espaço para esse tipo de comércio. O valor da experiência é rei, seja nas lojas física ou e-commerce, seja no Brasil ou na Europa.</p>
                        <Link to="/lema_e" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
               
            </div>
        )
    }
}

export class Resumo5
 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/lema_e">
                    <img src="https://i.imgur.com/SGnZlvd.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Na mídia</span>
                        <Link to="/lema_e" className="linkColor">
                        <h1>Confiança dos pequenos negócios na economia do país apresenta queda</h1>
                        </Link>
                        
                        <p>O índice de otimismo dos empreendedores quanto aos rumos da economia brasileira caiu cerca de 10 pontos percentuais nos primeiros três meses de 2019, mas a confiança dos donos de micro e pequenos negócios continua em alta.</p>
                        <Link to="/lema_e" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
               
            </div>
        )
    }
}

// {/* <Link to="/cat" className="linkColor">
//     <button id="verMais">ver mais<img src="https://i.imgur.com/ZZmr979.png" alt="Botão de ver mais"/></button>
// </Link> */}

export class Resumo6 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/teste_gestao">
                    <img src="https://i.imgur.com/q09Pz8E.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Aprenda</span>
                        <Link to="/teste_gestao" className="linkColor">
                        <h1>Teste sua gestão agora</h1>
                        </Link>
                        
                        <p>O Chega Disso traz algumas questões que todo empreendimento precisa conseguir responder para ter sucesso na sua gestão.</p>
                        <Link to="/teste_gestao" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Resumo7 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/tempo_deus">
                    <img src="https://i.imgur.com/3OXHrBg.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Aprenda</span>
                        <Link to="/tempo_deus" className="linkColor">
                        <h1>Tempo não é dinheiro, tempo é Deus</h1>
                        </Link>
                        
                        <p>Sem o tempo não conseguimos fazer tudo como desejamos. Então, nada melhor do que uma ferramenta que te ajude com as tarefas empresariais para que você consiga ter tempo para pensar na estratégia do negócio.</p>
                        <Link to="/tempo_deus" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Resumo8 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/tempo_deus">
                    <img src="https://i.imgur.com/yWmV05q.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Aprenda</span>
                        <Link to="/tempo_deus" className="linkColor">
                        <h1>Conheça a máquina de cartão ideal para o seu negócio</h1>
                        </Link>
                        
                        <p>Já parou para pensar em quantas vezes você usa seu cartão de crédito ou débito por dia, ou por mês? Se sua resposta para essa pergunta for: muitas! Você está dentro de uma pesquisa da Associação Brasileira das Empresas de Cartões de Crédito e Serviço (ABECS), que mostra que, em 2018, os cartões brasileiros movimentaram a quantia de R$450 bilhões de reais no crédito e de R$265,4 bilhões no débito</p>
                        <Link to="/tempo_deus" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Resumo9 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/tempo_deus">
                    <img src="https://i.imgur.com/qZzFANw.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Aprenda</span>
                        <Link to="/tempo_deus" className="linkColor">
                        <h1>Abri minha empresa, e agora?</h1>
                        </Link>
                        
                        <p>O primeiro passo já foi dado: a sua empresa está no mercado e os primeiros clientes estão surgindo. Agora vale repassar o que estava no seu planejamento inicial, verificar o que está dando certo e o que precisa ser revisto nos processos de funcionamento do negócio.</p>
                        <Link to="/tempo_deus" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Resumo10 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/4_dicas">
                    <img src="https://i.imgur.com/DcUJa4a.jpg" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Aprenda</span>
                        <Link to="/4_dicas" className="linkColor">
                        <h1>4 dicas para começar bem o seu negócio</h1>
                        </Link>
                        
                        <p>Agora que você já tirou a ideia do negócio dos seus sonhos do papel, está na hora de pensar em quais serão seus próximos passos para alcançar os primeiros resultados.</p>
                        <Link to="/4_dicas" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Resumo11 extends Component{
    render(){
        return(
            <div>
                <div className="container resume">
                    <Link to="/gestao_fundamental">
                    <img src="https://i.imgur.com/nzfofnB.png" className="foto" alt=""/>
                    </Link>
                    <div className="resume1">
                        <span id="categoria-texto">Inspire-se</span>
                        
                        <Link to="/gestao_fundamental" className="linkColor">
                        <h1>Birigui ou São Paulo: gestão é fundamental para o negócio, não importa a cidade</h1>
                        </Link>
                        
                        <p>Conheça a história de Cássia Marques, empreendedora da cidade de Birigui, interior de São Paulo, que abriu uma loja de lingerie e já expandiu tanto no tamanho da loja como na diversidade de produtos.</p>
                        <Link to="/gestao_fundamental" className="linkColor">
                            <p className="saibamais">Saiba Mais</p>
                        </Link>
                        <Share/>
                    </div>
                </div>
            </div>
        )
    }
}