import React from "react";
import ajax from "@fdaciuk/ajax";

const Search = ({handleSearch, isDisabled}) => (
    <div className="search">
        <input
            disabled={isDisabled}
            type="search" 
            placeholder="Digite o nome do usuario"
            onKeyUp={handleSearch}
        />
    </div>
);

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
}

export default Search;

