import React, {Component} from 'react';
import Header from '../header';
import Form from '../form';
import Footer from '../footer';
import Share from './share-button';

export class Texto1 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>Chega disso que impede a sua empresa de crescer</h1>
                        <p className="subtitle">Conheça o blog que vai compartilhar todas as dicas para melhorar a gestão da sua PME</p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/dPYm3OE.jpg" className="foto_texto" alt=""/>
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
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Inspire-se</span>
                        <h1>Mulher empreendedora, inspire-se!</h1>
                        <p className="subtitle">Conheça a história da fundadora do Coffee Lab, cafeteria premiada e escola de baristas</p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/XAdjluv.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">Conheça a história da fundadora do Coffee Lab, cafeteria premiada e escola de baristas</p>
                        <p className="conteudo">Conheça agora a história da Isabela Raposeiras, fundadora do Coffee Lab - uma cafeteria e escola de baristas premiada e reconhecida internacionalmente. Aqui você encontra algumas dicas que ela deixou sobre autoconhecimento, inovação e disciplina.</p>
                        <div className="video-wrap"><div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/tHae9aRaFhw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video_1"></iframe></div></div>
                        <p className="conteudo">Já Anaíra Costa, dona da Lavanderia Water Clean, conta um pouco da história da empresa e fala sobre sua atuação dentro dela até chegar à presidência e ainda declara "São as mulheres que fazem o seu lugar".</p>
                        <div className="video-wrap"><div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ssrkR_1BFwU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video_2"></iframe></div></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto3 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>Declaração Anual do MEI: o que você precisa saber</h1>
                        <p className="subtitle">Lembre-se que você tem até o dia 31 de maio para entregar</p>
                        <Share/>
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
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Na mídia</span>
                        <h1>Quando o lema é: não empurra!</h1>
                        <p className="subtitle">Experiência do cliente é a chave de sucesso para qualquer empresa que quer prosperar nos próximos anos</p>
                        <Share/>
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
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Na mídia</span>
                        <h1>Confiança dos pequenos negócios na economia do país apresenta queda</h1>
                        <p className="subtitle"> </p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/SGnZlvd.jpg" className="foto_texto" alt=""/>
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

export class Texto6 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>Teste sua gestão agora</h1>
                        <p className="subtitle">6 perguntas que você precisa ter a resposta</p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/q09Pz8E.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">O Chega Disso traz algumas questões que todo empreendimento precisa conseguir responder para ter sucesso na sua gestão. Se você não souber responder, vale levantar dados e pensar no tema. Talvez seja uma área que sua empresa está precisando melhorar.</p>
                        <h2>Vamos às perguntas:</h2>
                        <ol>
                            <li>Qual o seu propósito?</li>
                            <li>Você consegue explicar para um grupo de estudantes de MBA como sua empresa está organizada? </li>
                            <li>Quais são as atividades, ramificações e como os processos estão organizados? </li>
                            <li>Qual o gasto do seu negócio? O fluxo de caixa está como o planejado?</li>
                            <li>O seu cliente está satisfeito com toda a jornada de compra? Quais os últimos resultados das pesquisas com o cliente?</li>
                            <li>Qual foi a última vez que você perguntou ao seu colaborador o que ele acredita que deve ser mudado na empresa?</li>
                        </ol>
                        <p className="conteudo">A resposta para essas perguntas só você pode dar e o aprendizado deve ser ciclo. Mantenha atualizado e informe-se ao máximo: busque aperfeiçoar as suas práticas e a buscar conhecimento especializado. Curtiu o nosso teste? Cadastre-se no Chega Disso e receba mais conteúdos como este.</p>                
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto7 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>Tempo não é dinheiro, tempo é Deus</h1>
                        <p className="subtitle"> </p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/3OXHrBg.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">Sem o tempo não conseguimos fazer tudo como desejamos. Então, nada melhor do que uma ferramenta que te ajude com as tarefas empresariais para que você consiga ter tempo para pensar na estratégia do negócio. </p>
                        <p className="conteudo">Agora, graças a tecnologia você pode controlar melhor o seu tempo. Com softwares revolucionários desenvolvidos a partir de tecnologias modernas você otimiza seu tempo como jamais imaginou antes. Essas funcionalidades podem fazer você vender mais, encontrar clientes, gerenciar leads (cadastros, contatos etc) e organizar prospecções de uma maneira mais simples e objetiva. </p>
                        <h2>Como estes softwares de gestão podem ajudar a sua empresa?</h2>
                        <img src="https://i.imgur.com/qE8Dmtu.jpg" className="memeDino" alt=""></img>
                        <p className="conteudo"><b>Melhora o seu estoque dos produtos -</b> Controlar de forma integrada as entradas e saídas do seu estoque com suas vendas, produtos produzidos, remessas e compras de mercadoria.</p>
                        <p className="conteudo"><b>Ajuda a cumprir com as obrigações fiscais -</b> Além de garantir a operação no dia a dia da sua empresa, ainda é necessário junto com sua contabilidade realizar as entregas de todas as suas obrigações fiscais. </p>
                        <p className="conteudo"><b>Integrar tudo com o seu contador -</b> Você consegue enviar documentos e malotes e ter insegurança com informações contábeis consomem um tempo valioso e impedem que você usufrua do melhor que o contador pode te dar - a consultoria financeira e estratégica.</p>
                        <p className="conteudo"><b>Enviar a nota fiscal e cobrança para o cliente -</b> Quando o cliente compra um produto ou serviço o processo que finaliza essa venda é a emissão da nota fiscal. É aí que você se engana, pois ainda é necessário gerar as cobranças e ainda enviar ao cliente.</p>
                        <p className="conteudo"><b>Saber o custo de produção -</b> Saber todas as matérias primas para fabricar cada produto e analisar o custo delas mais mão de obra e outros gastos.</p>
                        <h2>Lembre-se: o crescimento exponencial está na gestão do seu negócio. </h2>
                        <p className="conteudo">Tendo certeza e transparência sobre os dados e informações estratégicas da sua operação, você pode tomar melhores decisões. Busque um sistema de gestão intuitivo para ter o controle da sua empresa. Usufruindo da tecnologia para acabar com as tarefas repetitivas, você usa o seu tão valioso tempo a seu favor e dá foco no que realmente precisa e gera valor.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export class Texto8 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>Conheça a máquina de cartão ideal para o seu negócio</h1>
                        <p className="subtitle"> </p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/yWmV05q.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">Já parou para pensar em quantas vezes você usa seu cartão de crédito ou débito por dia, ou por mês? Se sua resposta para essa pergunta for: muitas! Você está dentro de uma pesquisa da Associação Brasileira das Empresas de Cartões de Crédito e Serviço (ABECS), que mostra que, em 2018, os cartões brasileiros movimentaram a quantia de R$450 bilhões de reais no crédito e de R$265,4 bilhões no débito, o que representa 34% do consumo familiar. Sendo assim, hoje torna-se cada vez mais inimaginável ter uma empresa, mesmo que seja pequena, que não aceita cartão.</p>
                        <p className="conteudo">A comodidade e flexibilidade são pontos relevantes para o seu consumidor, mas o uso da famosa maquininha tem custo e todo o processo tem que ser vantajoso também para as empresas. Dados mostram que o seu negócio pode crescer muito com uma máquina de cartão, pois, na média, 61% do faturamento total das empresas são com esse tipo de venda, de acordo com a CDL – BH. </p>
                        <p className="conteudo">E as vantagens não param, seu ticket médio, ou seja, seu valor médio de venda por produto pode aumentar, já que seu cliente não vai precisar ter todo o dinheiro no ato da compra. Dar a opção de pagamento por cartão também é sinônimo de controle e mobilidade, fornecendo mais eficiência na gestão financeira do seu negócio.</p>
                        <h2>Qual máquina de cartão você é a ideal para o seu negócio?</h2>
                        <p className="conteudo">Para obter essa resposta é necessário comparar alguns benefícios e custos. Confira um infográfico do jornal Gazeta do Povo que mostra desde as máquinas mais conhecidas, que aceitam um número maior de cartões, até aqueles sistemas que funcionam pelo celular e podem ser mais interessantes para quem quer economizar.</p>
                        <p className="conteudo">Se quiser conferir o infográfico completo, <a href="https://www.gazetadopovo.com.br/economia/livre-iniciativa/empreender/maquininhas-de-cartao-sao-tantas-mas-qual-e-a-ideal-para-o-seu-negocio-3ejtjzruft2adds1bevkr2wxr/#ancora-1">clique aqui</a>. Analise as opções e não esquece de contar para a gente qual foi a melhor solução para a sua empresa! </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto9 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>Abri minha empresa, e agora?</h1>
                        <p className="subtitle">Confira dicas para quem abriu um negócio recentemente</p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/qZzFANw.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">O primeiro passo já foi dado: a sua empresa está no mercado e os primeiros clientes estão surgindo. Agora vale repassar o que estava no seu planejamento inicial, verificar o que está dando certo e o que precisa ser revisto nos processos de funcionamento do negócio. Lembre-se: metas e objetivos podem mudar ou vir a adaptar-se a novas realidades, mas é fundamental que estejam sempre claros para você e sua equipe.</p>
                        <p className="conteudo">Vamos repassar alguns pontos de atenção. Caneta na mão e prepare o checklist:</p>
                        <ol>
                            <li>Como está o planejamento? Se você está encontrando muitos gaps que não estava previstos, talvez seja melhor retomar o planejamento inicial e adaptá-lo aos novos pontos de dificuldade.</li>
                            <li>Como está a gestão do negócio? Reúna o máximo de informações que puder sobre os processos da sua empresa e reflita se tem alguma forma de ser mais eficiente. Dica: existem ferramentas de gestão on-line que transformam o dia a dia do empreendedor. </li>
                            <li>Após essa análise priorize as mudanças que você quer fazer antes de tomar decisões.</li>
                            <li>Agora é o momento da implantação! Considere as opções e reestruture as áreas do negócio a partir do novo plano de ação ou das novas ferramentas, mas sempre atentando-se às metas e a sua realidade.</li>
                            <li>Comunique a sua equipe! Comunicação e foco são essenciais, principalmente nesse início de jornada.</li>
                        </ol>
                        <p className="conteudo">Deve haver persistência em hábitos produtivos, pois às vezes exige uma fase de adaptação. Mas cuidado para não demorar muito para mudar de rumo e não tenha medo ou receio de voltar atrás em decisões. Gostou do conteúdo? Cadastre-se para receber as novidades do Chega Disso no seu e-mail.</p>                
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto10 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form />
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Aprenda</span>
                        <h1>4 dicas para começar bem o seu negócio</h1>
                        <p className="subtitle"> </p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/DcUJa4a.jpg" className="foto_texto" alt=""/>
                        <p className="conteudo">Agora que você já tirou a ideia do negócio dos seus sonhos do papel, está na hora de pensar em quais serão seus próximos passos para alcançar os primeiros resultados. E foi pensando neste estágio inicial que reunimos algumas dicas valiosas para você. Vamos lá?</p>
                        <h2>1&ordm;	Suas contas pessoais não devem se misturar com as da empresa</h2>
                        <p className="conteudo">Nos primeiros dias da sua empresa, se preocupe em ter uma conta bancária só para ela e evite misturar seus gastos pessoais com os do negócio. Inicialmente pode parecer mais fácil e simples, pois as suas vendas e recebimentos terão um volume pequeno, mas com o crescimento do fluxo de caixa você terá um grande problema.</p>
                        <h2>2&ordm; A tecnologia é sua parceira</h2>
                        <p className="conteudo">Nada de controlar tudo no caderninho ou na cabeça, no início do seu negócio é importante contar com sistemas de gestão que fazem o controle de pagamentos, estoques e ajudam até na relação com seu contador. Caso você ainda não tenha viabilidade financeira para sistemas assim, conte com o Excel neste primeiro momento, ele ajudará na organização geral da sua empresa.</p>
                        <h2>3&ordm; Corte custos pessoais</h2>
                        <p className="conteudo">Seu negócio ainda está engatinhando e irá precisar muito de você! Na fase inicial de qualquer empreendimento é comum que o empreendedor seja a fonte primária de capital. Além disso, você terá poucas pessoas trabalhando com você e é importante ajustar os seus gastos pessoais visando o suporte financeiro que você terá que dar para a empresa.</p>
                        <h2>4&ordm; Teste o seu produto ou serviço!</h2>
                        <p className="conteudo">O verdadeiro chefe do seu negócio é o seu cliente, assim nada mais justo que ele dizer o que pensa sobre o seu produto ou serviço. Uma dica valiosa é testar a sua solução em pequena escala, diretamente com seu público-alvo e ir coletando feedbacks para aperfeiçoar a versão inicial. Dessa forma, a chance da sua empresa oferecer algo realmente relevante ao mercado é grande. Mas fique atento: essa prática não deve de encerrar na fase propulsora do negócio, ter feedbacks constantes de seus clientes é a chave para o crescimento.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Texto11 extends Component{
    componentDidMount(){
        window.scroll(0, 220);
    }
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="container_texto">
                    <div className="titulo_texto">
                        <span id="categoria-texto">Inspire-se</span>
                        <h1>Birigui ou São Paulo: gestão é fundamental para o negócio, não importa a cidade</h1>
                        <p className="subtitle"> </p>
                        <Share/>
                    </div>
                    <div className="corpo_texto">
                        <img src="https://i.imgur.com/nzfofnB.png" className="foto_texto" alt=""/>
                        <p className="conteudo">Conheça a história de Cássia Marques, empreendedora da cidade de Birigui, interior de São Paulo, que abriu uma loja de lingerie e já expandiu tanto no tamanho da loja como na diversidade de produtos. Ela morou em São Paulo por alguns anos e quando voltou para sua cidade natal percebeu que não conseguia encontrar produtos de qualidade e com a beleza que desejava. </p>
                        <p className="conteudo">“Percebi que não existia uma loja que tivesse produtos de qualidade e que as pessoas iam para Araçatuba para comprar. E, até esses produtos não me agradavam”, conta a empreendedora. Confira a entrevista completa e veja tudo que ela aprendeu desde a abertura da <a href="https://www.facebook.com/eladi.birigui/">Éladi.</a></p>
                        {/* <figure>
                            <img src="https://i.imgur.com/nzfofnB.png" id="Cassia" alt=""></img>
                            <figcaption>Cássia Marques e seu empreendimento - a loja &#201;ladi</figcaption>
                        </figure> */}
                        <h2>Como você teve a ideia de abrir esta loja?</h2>
                        <p className="conteudo">Com mil ideias na cabeça, fui investigar o que e onde poderia achar os produtos que eu queria. Por coincidência, no mesmo mês estava tendo uma feira nacional de lingerie, em São Paulo. Fiquei muito entusiasmada com tudo que vi, várias marcas para todos os gostos, tanto básicos como os mais sofisticados. Como não sabia o que comprar e não tinha ideia do que agradaria as clientes acabei comprando muito, o que me deixou em uma situação ruim, pois não tinha capital de giro.</p>
                        <h2>Qual foi o maior aprendizado desde que você abriu a loja?</h2>
                        <p className="conteudo">Foram muitos aprendizados, mas posso ressaltar a falta de experiência e a confiança nos representantes que me deixaram em uma péssima situação logo no começo. Depois, as compras erradas que ficavam no estoque e a inadimplência dos clientes fizeram eu ficar em uma situação intolerável. </p>
                        <p className="conteudo">Quando percebi estava devendo e as melhores marcas que eu trabalhava pararam de me vender. Para mudar o cenário e evitar o fechamento da loja, onde eu tinha investido as minhas economias, comecei a ir para São Paulo comprar nas lojas das fábricas e fiz um empréstimo. Aos poucos fui conseguindo honrar meus compromissos.</p>
                        <h2>Qual o segredo do sucesso de hoje?</h2>
                        <p className="conteudo">Acredito que o mais importante é a experiência do cliente. Eu tenho uma relação de amizade e confiança com as minhas clientes e tenho certeza que a sinceridade e a alegria com que elas são tratadas faz com que elas gostem de comprar na Éladi. Seguimos aqui as seguintes premissas: sempre sorrindo; não fazemos diferença entre clientes; e sinceridade é a chave, ou seja, não empurramos mercadorias. Além disso, a aquisição de marcas novas, sempre seguindo as tendências, fazem com que as pessoas procurarem a loja. </p>
                        <h2>Como você faz a gestão dos funcionários na loja?</h2>
                        <p className="conteudo">Tentei uma época pagar uma parte do salário por comissão, mas percebi logo que na minha loja isso não funciona. Somos uma família e todas as pessoas que entram não ligam em ser atendidas por uma pessoa em especial. Em uma loja com poucos funcionários, penso que a disputa por clientes não é algo saudável, e acaba gerando atritos. Penso que é primordial focar em um bom salário e bônus, se as vendas aumentarem no mês. </p>
                        <h2>Qual sua dica para quem quer montar um negócio?</h2>
                        <p className="conteudo">Quem quer montar um negócio tem que conhecer e amar o que vai fazer. O atendimento é fundamental e percebo hoje que muitas lojas fazem descaso com as pessoas. Uma cliente que não é bem atendida, não volta mais e isso repercute. Além disso, penso que o empreendedor precisa se planejar e contar com um bom sistema de gestão para controlar seus estoques, fazer pagamentos, entre outros. A tecnologia hoje é fundamental para atendermos o cliente ainda melhor.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}