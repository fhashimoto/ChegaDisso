import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
            <div className="menuToggle">

                    <ul><b>Na midia</b></ul>

                    <ul><b>Aprenda</b></ul>
                
                    <ul><b>Inspire-se</b></ul>

                <Link to="/cat" className="linkColor">
                    <ul><b>Veja todas as categorias</b></ul>
                </Link>

                <Link to="/equipe" className='linkColor'>
                    <ul><b>Equipe</b></ul>
                </Link>

                    <ul><b>Contato</b></ul>
            </div>
        )
    }
}

export default Menu;