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

            starred: []
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

    //handleRepos
    searchRepos(type){
        ajax().get(`https://api.github.com/users/${this.state.userInfo.login}/${type}`)
            .then(response =>{
                this.setState({
                    [type]: response.map(repo => (
                        { name: repo.name, link: repo.html_url }
                    ))
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
                
                getRepos={ () => {
                    this.searchRepos("repos");
                } }

                getStarred={ () => {
                    this.searchRepos("starred");
                } }        
            />
        );
    } 
}

export default App;