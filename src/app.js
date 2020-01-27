"use strict"

import React, {Component} from "react";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";
import Actions from "./components/Actions";
import Repositories from "./components/Repositories";

class App extends Component{
    
    render(){
        return(
            <div className="app">
                <Search/>
                <UserInfo/>
                <Actions/>
                
                <Repositories 
                  className="repos" 
                  title="Repositorios:" 
                  repos={[
                      { name: "Nome do Repositorio:", link: "#" },
                      { name: "Nome do Repositorio:", link: "#" }
                  ]}
                />

                <Repositories 
                  className="starred" 
                  title="Favoritos:"
                  repos={[
                      { name: "Nome do Repositorio:", link: "#" },
                      { name: "Nome do Repositorio:", link: "#" }
                  ]}
                />
            </div>
        );
    } 
        
}

export default App;