import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Form from './form';

class Obrigado extends Component{
    render(){
        return(
            <div>    
                <Header/>
                <Form/>
                <div className="agradecimento">
                    Obrigado pela inscrição
                </div>
                <Link to="/" className="botaoMenu linkColor">
                    <button>Voltar para Menu</button>
                </Link>
                <Footer/>
            </div>
        )
    }
}

export default Obrigado;