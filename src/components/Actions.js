import React from "react";

const Actions = ({ getRepos, getStarred }) => (
    <div className="actions">
        <button className="show-repositories" onClick={getRepos}> 
            VER REPOSITORIOS
        </button>

        <button className="show-starred" onClick={getStarred}>
            VER FAVORITOS
        </button>
    </div>
);

Actions.propTypes = {
    getRepos: React.PropTypes.func.isRequired,
    getStarred: React.PropTypes.func.isRequired,
}

export default Actions;

