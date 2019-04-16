import React, {Component} from "react";

import Header from './header';
import Form from './form';
import Footer from './footer';
import Menu from './menu';
import Resume from "./resume";

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                {/* <Menu/> */}
                <Resume/>
                <Footer/>
            </div>
        )
    }
}

export default Home;