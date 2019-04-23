import React, {Component} from 'react';
import Header from '../header';
import Form from '../form';
import Footer from '../footer';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="equipe">
                    <ul>Marketing
                        <li>Aglemon Flores Ribeiro </li>
                        <li>Beatriz Bueno</li>
                        <li>Gabriela Braga</li>
                        <li>Pamella Santos</li>
                        <li>Tulio de Sousa da Silva</li>
                    </ul>
                    <ul>Vendas
                        <li>Ana Virgínia Menossi Gonçalves</li>
                        <li>Fabio Aparecido Figueiró</li>
                        <li>Fernanda Cornetta Campos</li>
                        <li>Matheus Gomes da Silva</li>
                        <li>Nicolas Marcio de Souza Silva</li>
                    </ul>
                    <ul>Programação
                        <li>Felipe Hashimoto</li>
                    </ul>
                    <ul>Diretores de Arte
                        <li>João Carlos da Silva </li>
                        <li>Márcia Regina Gervastock</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Equipe;