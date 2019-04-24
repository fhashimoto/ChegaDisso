import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
            <div className="menuToggle">
                <div className='menu-home-container'>
                    <div className="menu-cat">
                        <Link to="/na_midia" className="linkColor">
                            <span>Na midia</span>
                        </Link>
                        <Link to="/aprenda" className="linkColor">
                            <span>Aprenda</span>
                        </Link>
                        <Link to="inspire" className="linkColor">
                            <span>Inspire-se</span>
                        </Link>
                        {/* <Link to="/cat" className="linkColor">
                            <b>Veja todas as categorias</b>
                        </Link> */}
                    </div>

                    {/* <Link to="/about" className="linkColor">
                        <ul id="sobre"><b>Sobre</b></ul>
                    </Link>                       

                    <Link to="/equipe" className='linkColor'>
                        <ul><b>Equipe</b></ul>
                    </Link>

                        <ul><b>Contato</b></ul> */}
                </div>
            </div>
        )
    }
}

export default Menu;