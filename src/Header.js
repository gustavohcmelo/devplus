import axios from 'axios'
import React, { Component } from 'react';




class Header extends Component {
    state = {
        person: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/gustavohcmelo')
        .then(response => {
            const person = response.data;
            this.setState({ person });
        })
    }

    render(){
        return (
            <nav>
                <div id="search-area">
                    <img src={this.state.person.avatar_url} alt=""/>
                    <span>Olá, {this.state.person.name}</span>
                </div>
            </nav>
        )
    }

}

export default Header;