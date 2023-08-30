import React from "react";

//estilização
import './login.css'

const Login = () => {

    //definindo preventDefault no form
    function botaoHandler(event){
        event.preventDefault()
        console.log("Botão Clicado!")
    }

    //configurando valiudação de crendenciais 
    const confirmAccess = () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        if (email.value === "tiago@krambeck.com.br") {
            console.log("email corretamente informado")

        } else {
            console.log("erro")
        }
    }


    return(
        <main>
            <form onSubmit={botaoHandler} className="form-content">
                <div className="title-form">
                    <h1>BEM VINDO!</h1>
                    <h5>Faça o login para continuar</h5>
                </div>
                <div className="input-form-login">
                    <span>LOGIN: </span>
                    <input type="text" name="email" id="email" placeholder="Insira seu email"/>
                </div>
                <div className="input-form-password">
                    <span>SENHA: </span>
                    <input type="password" name="password" id="password" placeholder="Insira sua senha"/>
                </div> 
                <div className="input-form-button">
                    <button onClick={confirmAccess}>ACESSAR</button>
                </div>
            </form>
        </main>
    )


}

export default Login