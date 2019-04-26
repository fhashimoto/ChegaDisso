import React, {Component} from 'react';

import Header from '../header';
import Form from '../form';
import Footer from '../footer';

import {Resumo1, Resumo2, Resumo3, Resumo4, Resumo5, Resumo6, Resumo7, Resumo8, Resumo9, Resumo10, Resumo11, Resumo12} from './resumos';

export class NaMidia extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="corpo_resumo">
                    <Resumo4/>
                    <Resumo5/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Aprenda extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="corpo_resumo">
                    <Resumo1/>
                    <Resumo3/>
                    <Resumo6/>
                    <Resumo7/>
                    <Resumo8/>
                    <Resumo9/>
                    <Resumo10/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export class Inspire extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Form/>
                <div className="corpo_resumo">
                    <Resumo2/>
                    <Resumo11/>
                    <Resumo12/>
                </div>
                <Footer/>
            </div>
        )
    }
}