import React from "react";
import UserInfo from "./UserInfo";
import Actions from "./Actions";
import Repositories from "./Repositories";
import Search from "./Search";

const AppContent = ({repos, userInfo, starred, handleSearch}) => (
    <div className="app">
        <Search handleSearch={handleSearch}/>
        {!!userInfo && <UserInfo userInfo={userInfo}/>}
        {!!userInfo && <Actions/>}
                
        {!!repos.length && 
            <Repositories 
                className="repos" 
                title="Repositorios:" 
                repos={repos}
            />
        }

        {!!starred.length &&
            <Repositories 
                className="starred" 
                title="Favoritos:"
                repos={starred}
            />
        }

        {!!userInfo || <h2>Usuario nao encontrado.</h2>}
    </div>
)

AppContent.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired
}

export default AppContent;