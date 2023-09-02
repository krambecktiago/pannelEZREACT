import React from "react";

import { Navigate, useNavigate } from "react-router-dom";

//estilização
import './login.css'

//axios
import Axios from "axios";


//components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";



const Login = () => {
    const navigate = useNavigate();

    //definindo preventDefault no form
    function botaoHandler(event){
        event.preventDefault()
        console.log("Botão Clicado!")
    }

    //configurando valiudação de crendenciais 
    const confirmAccess = (values) => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        Axios.post('http://localhost:5432/login', {
            email: values.email,
            password: values.password,
            administrador: values.true,
        }).then((response) => {
            console.log(response);
        });
    };

    //componentes da tela login
    return(
        <main className="main-login">
            <header>
                <Header/>
            </header>
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
                    <button onClick={(confirmAccess)}>ACESSAR</button>
                </div>
            </form>
            <footer>
                <Footer/>
            </footer>
        </main>
    )


}

export default Login