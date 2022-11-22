import React from "react";

export default class Users extends React.Component{
    render() {
        return <div className="infodiv">
            <form>
                <div className="user-box">
                    <p>User Name :</p>
                    <p>{this.props.user.firstName}</p>

                </div>
                <div className="user-box">
                    <p>Laste Name :</p>
                    <p>{this.props.user.lastName}</p>
                </div>
                <div className="user-box">
                    <p> Email :</p>
                    <p>{this.props.user.email}</p>
                </div>
                <div className="user-box">
                    <p> Phone number :</p>
                    <p>{this.props.user.phone}</p>
                </div>
            </form>
        </div>
    }
}