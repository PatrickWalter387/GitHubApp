import React from "react";
import ajax from "@fdaciuk/ajax";

const Search = () => (
    <div className="search">
        <input 
            type="search" 
            placeholder="Digite o nome do usuario"
            onKeyUp={(e) => {
                const ENTER = 13;
                const keyCode = e.which || e.keyCode;

                if(keyCode === ENTER){
                    ajax().get(`https://api.github.com/users/${e.target.value}`)
                      .then(result => {
                          console.log(result)
                      })
                }
            }}
        />
    </div>
);

export default Search;

