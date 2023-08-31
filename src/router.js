import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'


//component
import Login from "./Pages/Login/login";


const Routerr = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Login} />
            </Routes>
        </BrowserRouter>
    )

}

export default Routerr