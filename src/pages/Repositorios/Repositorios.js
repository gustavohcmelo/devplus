import React, { Component } from 'react';
import axios from 'axios';

import './Repositorios.css'

class Repositorios extends Component {
    state = {
        repos: []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/gustavohcmelo/repos')
        .then(response => {
            const repos = response.data;
            this.setState({ repos });
        })
    }

    render() {
        const divs = this.state.repos.map(div => {
            return div = (
                <div className="info-repos">
                    <h3>{div.name}</h3>
                    <p>{div.description}</p>
                    <a href={div.html_url} target="_blank">ir para o repositório</a>
                </div>                
            );
        })

        return (
            <section>
                <h1>Repositorios</h1>
                <div id="container-repos">
                    {divs}
                </div>
                {console.log(this.state.repos[2])}
            </section>
        );
    }
}

export default Repositorios;