"use strict"

import React, {Component} from "react";

class App extends Component{
    
    render(){
        return(
            <div className="app">
                <div className="search">
                    <input type="search" placeholder="Digite o nome do usuario"/>
                    <button>Buscar</button>
                </div>

                <div className="user-info">
                    <img src="https://avatars2.githubusercontent.com/u/46614552?v=4" alt="Imagem de Perfil"/>
                    <h1>
                        <a href="https://github.com/PatrickWalter387">Patrick Walter</a>
                    </h1>

                    <ul className="repos-info">
                        <li>Repositorios: 277</li>
                        <li>Seguidores: 64</li>
                        <li>Seguindo: 102</li>
                    </ul>

                    <div className="actions">
                        <button>Ver Repositorios</button>
                        <button>Ver Favoritos</button>
                    </div>

                    <div className="repos">
                        <h2>Repositorios</h2>
                        <ul>
                            <li><a href="#">Nome do repositorio:</a></li>
                        </ul>
                    </div>

                    <div className="starred">
                        <h2>Favoritos</h2>
                        <ul>
                            <li><a href="#">Nome do repositorio:</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } 
        
}

export default App;