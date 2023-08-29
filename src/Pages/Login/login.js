import React from "react";

//estilização
import './login.css'

const Login = () => {
    return(
        <main>
            <form className="form-content">
                <div className="title-form">
                    <h1>BEM VINDO!</h1>
                    <h5>Faça o login para continuar</h5>
                </div>
                <div className="input-form-login">
                    <span>LOGIN: </span>
                    <input type="text" placeholder="Insira seu login"/>
                </div>
                <div className="input-form-password">
                    <span>SENHA: </span>
                    <input type="password" placeholder="Insira sua senha"/>
                </div> 
                <div className="input-form-button">
                    <button>ACESSAR</button>
                </div>
            </form>
        </main>
    )
}

export default Login