import React from "react";
import UserInfo from "./UserInfo";
import Actions from "./Actions";
import Repositories from "./Repositories";
import Search from "./Search";

const AppContent = () => (
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
)

export default AppContent;