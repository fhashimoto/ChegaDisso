import React, {Component} from 'react';
import {Resumo1,
        Resumo2,
        Resumo3,
        Resumo4} from './Content/resumos';

class Resume extends Component {
    render(){
        return(
            <div className="corpo_resumo">
                <Resumo1/>
                <Resumo2/>
                <Resumo3/>
                <Resumo4/>
            </div>
        )
    }
}
export default Resume;