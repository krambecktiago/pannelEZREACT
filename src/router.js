import React, { Component } from "react";


import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'


//component
import Login from "./Pages/Login/login";


const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Login} />
        </Routes>
    </BrowserRouter>
}

export default Router