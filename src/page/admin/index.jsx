import React from "react";
import {Link} from "react-router-dom";
import Users from "./users";

export default class Admin extends React.Component{
    state ={
        usersList : JSON.parse(localStorage.getItem('user-list'))
    }
    render() {
        return <>
            <button className="G-buttons"><Link to={'/'}> back t login page</Link></button>
            <div className="P-user-list">
                {(!localStorage.key('user-list') || !this.state.usersList.length) ? <h1>Ther is no users to show yet</h1> :
                    this.state.usersList.map((user,index)=>(
                        <Users
                            user ={user}
                            key={index}
                        />
                    ))}
            </div>
        </>
    }
}