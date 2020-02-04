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

            starred: [],

            urlPerfil: ""
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
                ...this.state.repos, 
                { name: repo.name, link: repo.html_url } 
            ]
        }));

        responseStarred.map(repo => this.setState({
            starred: [ 
                ...this.state.starred, 
                { name: repo.name, link: repo.html_url } 
            ]
        }));
          
    }

    //handleRepos
    searchRepos(url){
        let responseRepos = null;
        let responseStarred = null;

        ajax().get(`${url}/repos`).then(response =>{
            responseRepos = response;

            ajax().get(`${url}/starred`).then(response =>{
                responseStarred = response;

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
                    this.setState({ urlPerfil: result.url });
                    //.searchRepos(result.url);
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
                handleRepos={ () => {
                    console.log("LEGAL : " + this.state.urlPerfil);
                    this.searchRepos(this.state.urlPerfil);
                } }
                    
                    
            />
        );
    } 
        
}

export default App;