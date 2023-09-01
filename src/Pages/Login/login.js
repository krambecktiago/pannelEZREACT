import React from "react";

import { Navigate, useNavigate } from "react-router-dom";

//estilização
import './login.css'


//components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";



//database configs
import { Pool } from "pg";
import dbConfig from "../../config";


const Login = () => {
    const navigate = useNavigate();
    const pool = new Pool(dbConfig);

    //definindo preventDefault no form
    function botaoHandler(event){
        event.preventDefault()
        console.log("Botão Clicado!")
    }

    //configurando valiudação de crendenciais 
    const confirmAccess = () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value



        if (email === "tiago@krambeck.com.br" && password === 'admin') {

            poll.query('SELEC * FROM CadastroClientes WHERE administrador == true', (err, result) => {
                if (err) {
                    console.log('não foi possível buscar os bancos de db')
                } else {
                    console.log(result)
                }
            })


            alert("login efeutado com sucesso!")
            navigate('./pannel')

            const formulario = document.querySelector(".form-content")
            formulario.reset()

        } else {
            alert("Não foi possível entrar na conta pois os dados estão incorretos")
        }
    }

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