import React from "react";

const Actions = ({ handleRepos }) => (
    <div className="actions">
        <button 
            className="show-repositories" 
            onClick={handleRepos}> 
            
        </button>

        <button className="show-starred">VER FAVORITOS</button>
    </div>
);

export default Actions;

