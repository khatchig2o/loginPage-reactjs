import React from "react";
import Login from "./page/login";
import {Route, Routes} from "react-router-dom";
import Register from "./page/Register";
import Admin from "./page/admin";

export default class App extends React.Component{
    render() {
        return <>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/admin'} element={<Admin/>}/>
                <Route path={'*'} element={<Login/>}/>
            </Routes>
        </>
    }
}