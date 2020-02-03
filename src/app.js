"use strict"

import React, {Component} from "react";
import AppContent from "./components/AppContent";
import ajax from "@fdaciuk/ajax";


class App extends Component{
    constructor(){
        super();

        this.state = {
            userInfo: null,
        
            repos: [],

            starred: [
                { name: "Nome do Repositorio:", link: "#" },
                { name: "Nome do Repositorio:", link: "#" }
            ]
        };
    }

    setData({login, name, avatar_url, followers, following, public_repos}){
        this.setState({
            userInfo: {
                photoUrl: avatar_url,
                name,
                login,
                repositories: public_repos,
                following,
                followers
            }
        });
    }

    setRepos(responseRepos, responseStarred){
        responseRepos.map(repo => this.setState({
            repos: [ 
                this.state.repos, 
                { name: repo.name, link: repo.html_url } 
            ]
        }));

        console.log("OI" + this.state.repos)
          
    }

    searchRepos({repos_url, starred_url}){
        let responseRepos = null;
        let responseStarred = null;

        console.log("Legal");
        
        ajax().get(repos_url).then(response =>{
            responseRepos = response;
            console.log("Legal");
            
            ajax().get(starred_url).then(response =>{
                responseStarred = response;
                console.log("Legal");
                this.setRepos(responseRepos, responseStarred);
            });
        });
        
    }

    handleSearch(e){
        const ENTER = 13;
        const keyCode = e.which || e.keyCode;

        if(keyCode === ENTER){
            ajax().get(`https://api.github.com/users/${e.target.value}`)
                .then(result => {
                    console.log(result);
                    this.setData(result);
                    this.searchRepos(result);
                });
        }
    }

    

    render(){
        return(
            <AppContent 
                repos={this.state.repos} 
                userInfo={this.state.userInfo}
                starred={this.state.starred}
                handleSearch={(e) => this.handleSearch(e)}
            />
        );
    } 
        
}

export default App;