import React from "react";

const UserInfo = ({ userInfo }) => (
    <div className="user-info">
        <div className="photo">
            <img src={userInfo.photoUrl} alt="Imagem de Perfil"/>
        </div>

        <div className="data">
            <h1 className="username">
                <a href={`https://github.com/${userInfo.login}`}>
                    {userInfo.name}
                </a>
            </h1>

            <ul className="repos-info">
                <li>Repositorios: {userInfo.repositories}</li>
                <li>Seguidores: {userInfo.followers}</li>
                <li>Seguindo: {userInfo.following}</li>
            </ul>
        </div>
    </div>
);

UserInfo.propTypes = {
    userInfo: React.PropTypes.shape({
        photoUrl: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        login: React.PropTypes.string.isRequired,
        repositories: React.PropTypes.number.isRequired,
        following: React.PropTypes.number.isRequired,
        followers: React.PropTypes.number.isRequired
    })
}

export default UserInfo;

