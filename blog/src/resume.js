import React, {Component} from 'react';
import {Resumo3,
        Resumo4,
        Resumo6,
        Resumo7,
        Resumo10,
        Resumo11,
        Resumo12} from './Content/resumos';

class Resume extends Component {
    render(){
        return(
            <div className="corpo_resumo">
                <Resumo12/>
                <Resumo11/>
                <Resumo10/>
                <Resumo4/>
                <Resumo7/>
                <Resumo6/>
            </div>
        )
    }
}
export default Resume;