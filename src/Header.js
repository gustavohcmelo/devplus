import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav>
                <div id="search-area">
                    <img src={require ('./images/unnamed.jpg')} alt=""/>
                    <span>Olá, Gustavo Henrique Cordeiro de Melo</span>
                </div>
                <div id="login-area">
                    <input type="text" placeholder="Realizar Busca..."/>
                    <button><img src={require('./images/search.png')} alt=""/></button>
                </div>
            </nav>
        )
    }

}

export default Header;