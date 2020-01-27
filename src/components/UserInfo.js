import React from "react";

const UserInfo = () => (
    <div className="user-info">
        <div className="photo">
            <img src="https://avatars2.githubusercontent.com/u/46614552?v=4" alt="Imagem de Perfil"/>
        </div>

        <div className="data">
            <h1 className="username">
                <a href="https://github.com/PatrickWalter387">Patrick Walter</a>
            </h1>

            <ul className="repos-info">
                <li>Repositorios: 277</li>
                <li>Seguidores: 67</li>
                <li>Seguindo: 102</li>
            </ul>
        </div>
    </div>
);

export default UserInfo;

