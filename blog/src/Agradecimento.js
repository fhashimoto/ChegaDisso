import React, {Component} from 'react';
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
                <Footer/>
            </div>
        )
    }
}

export default Obrigado;