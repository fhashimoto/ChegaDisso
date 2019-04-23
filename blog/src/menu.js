import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
            <div className="menuToggle">
                <div className='menu-home-container'>
                    <div className="menu-cat">
                        <Link to="/na_midia" className="linkColor">
                            <ul><b>Na midia</b></ul>
                        </Link>
                        <Link to="/aprenda" className="linkColor">
                            <ul><b>Aprenda</b></ul>
                        </Link>
                        <Link to="inspire" className="linkColor">
                            <ul><b>Inspire-se</b></ul>
                        </Link>
                        <Link to="/cat" className="linkColor">
                        <ul><b>Veja todas as categorias</b></ul>
                        </Link>
                    </div>

                    <Link to="/about" className="linkColor">
                        <ul id="sobre"><b>Sobre</b></ul>
                    </Link>                       

                    <Link to="/equipe" className='linkColor'>
                        <ul><b>Equipe</b></ul>
                    </Link>

                        <ul><b>Contato</b></ul>
                </div>
            </div>
        )
    }
}

export default Menu;