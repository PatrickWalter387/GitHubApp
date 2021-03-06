import React from "react";
import UserInfo from "./UserInfo";
import Actions from "./Actions";
import Repositories from "./Repositories";
import Search from "./Search";

const AppContent = ({repos, userInfo, starred, handleSearch, getRepos, getStarred, isFetching}) => (
    <div className="app">
        <Search handleSearch={handleSearch} isDisabled={isFetching}/>

        {!!userInfo && <UserInfo userInfo={userInfo}/>}

        {!!userInfo && 
            <Actions 
                getRepos={getRepos}
                getStarred={getStarred}
            />
        }
                
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

        {isFetching && <p>Carregando...</p>}
        {!!userInfo || isFetching || <h2>Usuario nao encontrado.</h2>}
    </div>
)

AppContent.propTypes = {
    userInfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired,
    handleSearch: React.PropTypes.func.isRequired,
    getRepos: React.PropTypes.func.isRequired,
    getStarred: React.PropTypes.func.isRequired,
    isFetching: React.PropTypes.bool.isRequired 
}

export default AppContent;