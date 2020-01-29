"use strict"

import React, {Component} from "react";
import AppContent from "./components/AppContent";


class App extends Component{
    constructor(){
        super();
        this.state = {
            userInfo: {
                photoUrl: "https://avatars2.githubusercontent.com/u/46614552?v=4",
                name: "Patrick Walter",
                login: "PatrickWalter387",
                repositories: 122,
                following: 22,
                followers: 31
            },
            
            repos: [
                { name: "Nome do Repositorio:", link: "#" },
                { name: "Nome do Repositorio:", link: "#" }
            ],

            starred: [
                { name: "Nome do Repositorio:", link: "#" },
                { name: "Nome do Repositorio:", link: "#" }
            ]
        };
    }


    render(){
        return(
            <AppContent 
                repos={this.state.repos} 
                userInfo={this.state.userInfo}
                starred={this.state.starred}
            />
        );
    } 
        
}

export default App;