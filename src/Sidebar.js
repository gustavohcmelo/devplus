import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Inicio from './pages/Inicio/Inicio';
import Perfil from './pages/Perfil/Perfil';
import Repositorios from './pages/Repositorios/Repositorios';
import Compartilhados from './pages/Compartilhados/Compartilhados';
import Grupos from './pages/Grupos/Grupos';
import Ranking from './pages/Ranking/Ranking';

class Sidebar extends Component {
    render() {
        return (
            <Router>
                <aside>
                    <h1  id="logo">Dev+</h1>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/perfil">Perfil</Link></li>
                        <li><Link to="/repositorios">Repositorios</Link></li>
                        <li><Link to="/compartilhados">Compartilhados</Link></li>
                        <li><Link to="/grupos">Grupos</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                        <li><a href="http://localhost:3000/">Sair</a></li>
                    </ul>
                </aside>


                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route exact path="/perfil">
                        <Perfil />
                    </Route>
                    <Route exact path="/repositorios">
                        <Repositorios />
                    </Route>
                    <Route exact path="/grupos">
                        <Grupos />
                    </Route>
                    <Route exact path="/compartilhados">
                        <Compartilhados />
                    </Route>
                    <Route exact path="/ranking">
                        <Ranking />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Sidebar;