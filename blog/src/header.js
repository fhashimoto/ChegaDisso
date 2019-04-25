import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';

import $ from 'jquery';

class Header extends Component {
    handleClick(){
        $(".menuToggle").slideToggle();
    }

    render(){
    return(
        <div>
            <div className="cabecalho">
                <Link to="/" className="linkColor">
                    <div id="titulo"><span>blog</span> cheg&#64; disso</div>
                </Link>
                <div className="link">   
                    <div id="linkMenu" onClick={this.handleClick}>Categorias</div>
                   
                    <Link to="/about" className="linkColor">
                        <span>Sobre</span>
                    </Link>  
                    <Link to="/equipe" className='linkColor'>
                        <span>Equipe</span>
                    </Link>
                </div>
                <div className="icones">
                    <a href="https://www.facebook.com/blog.chegadisso/"><img src="https://i.imgur.com/riJqSMK.png" className="icon" alt=""/></a>
                    <a href="https://www.instagram.com/chega.disso/"><img src="https://i.imgur.com/gKCIAmf.png" className="icon" alt=""/></a>
                    <a href="https://www.linkedin.com/company/14051668"><img src="https://i.imgur.com/cUd1gJU.png" className="icon" alt=""/></a>
                </div>
                <Menu/>
            </div>
            <img src="https://i.imgur.com/IZ9I5Sb.jpg" id="imgPrinc" alt=""/>
        </div>
    );
    }
}

export default Header;