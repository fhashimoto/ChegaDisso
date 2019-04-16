import React, {Component} from 'react';

class Menu extends Component {
    render(){
        return(
            <div className="menu">
                <div className="menu1">
                    <p className="menutitulo">Categorias</p>
                    <p>Na mídia</p>
                    <p>Aprenda</p>
                    <p>Inspire-se</p>
                </div>
                <div className="menu2">
                    <p className="menutitulo">Arquivo</p>
                    <p>Janeiro</p>
                    <p>Fevereiro</p>
                    <p>Março</p>
                    <p>Abril</p>
                    <p>Maio</p>
                    <p>Junho</p>
                    <p>Julho</p>
                    <p>Agosto</p>
                    <p>Setembro</p>
                    <p>Outubro</p>
                    <p>Novembro</p>
                    <p>Dezembro</p>
                </div>
            </div>
        )
    }
}

export default Menu;