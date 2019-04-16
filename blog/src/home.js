import React, {Component} from "react";

import Header from './header';
import Form from './form';
import Footer from './footer';
import Menu from './menu';

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <Menu/>
                <Footer/>
            </div>
        )
    }
}

export default Home;