import React, { Component } from 'react';

import './Perfil.css'

class Perfil extends Component {
    render() {
        return (
            <section>
                <h1>Perfil</h1>
                <div id="image-profile">
                </div>
                <div id="form-user">
                    <form action="">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="">Nome</label><br />
                                <input type="text" name="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Sobrenome</label><br />
                                <input type="text" name="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">CEP</label><br />
                                <input type="text" name="lastName" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="">Rua</label><br />
                                <input type="text" name="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Bairro</label><br />
                                <input type="text" name="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Cidade</label><br />
                                <input type="text" name="lastName" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="">UF</label><br />
                                <input type="text" name="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Telefone</label><br />
                                <input type="text" name="lastName"  pattern="[0-9]{3} [0-9]{5}-[0-9]{4}" placeholder="000 00000-0000"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label><br />
                                <input type="text" name="lastName" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-button">
                                <button>Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Perfil;