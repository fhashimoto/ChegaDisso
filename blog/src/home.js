import React, {Component} from "react";

import Header from './header';
import Form from './form';
import Footer from './footer';

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <Footer/>
            </div>
        )
    }
}

export default Home;