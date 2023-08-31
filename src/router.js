import React from 'react';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'


//component
import Login from "./Pages/Login/login";
import Pannel from './Pages/Pannel/pannel';


const Routerr = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Login} />
                <Route path='/pannel' Component={Pannel} />
            </Routes>
        </BrowserRouter>
    )

}

export default Routerr