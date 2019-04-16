import React, {Component} from 'react';

import Header from '../header';
import Form from '../form';
import Footer from '../footer';

class Texto2 extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="titulo_texto">
                    <div id="quadrado_texto"></div>
                    <h1>Mulher empreendedora, inspire-se!</h1>
                    <p className="subtitle">Conheça a história da fundadora do Coffee Lab, cafeteria premiada e escola de baristas</p>
                </div>
                <div className="corpo_texto">
                    <img src="https://i.imgur.com/YrqQdbf.jpg" className="foto_texto" alt=""/>
                    <p className="conteudo">Conheça a história da fundadora do Coffee Lab, cafeteria premiada e escola de baristas</p>
                    <p className="conteudo">Conheça agora a história da Isabela Raposeiras, fundadora do Coffee Lab - uma cafeteria e escola de baristas premiada e reconhecida internacionalmente. Aqui você encontra algumas dicas que ela deixou sobre autoconhecimento, inovação e disciplina.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tHae9aRaFhw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video_1"></iframe>
                    <p className="conteudo">Já Anaíra Costa, dona da Lavanderia Water Clean, conta um pouco da história da empresa e fala sobre sua atuação dentro dela até chegar à presidência e ainda declara "São as mulheres que fazem o seu lugar".</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ssrkR_1BFwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video_2"></iframe>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Texto2;