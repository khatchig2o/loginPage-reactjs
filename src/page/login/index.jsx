import React from "react";
import {Link} from "react-router-dom";

export default class Login extends React.Component{

    state={
        Email : ''.trim(),
        Password : ''.trim(),
        login : "/",
        error: "",
        adminuser :{
            mail : "khatchig@gmail.com",
            pass :"asdasd123"
        }

    }


    getinput=(e)=>{
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }

    admin=()=>{
        const {adminuser} = this.state
        if (this.state.Email === adminuser.mail && adminuser.pass === this.state.Password){
            this.setState({login : "/admin",error : "" })
        }else{
            this.setState({error : "you have entered wrong Email or password" , login : "/"})
        }
    }


    render() {
        return <div className='P-login-body G-center-form'>
        <form className="P-login-form">
                <h2>Login</h2>
                <h2>{this.state.error}</h2>
                <div>
                    <label> Email :
                        <input type="email" name={'Email'} value={this.state.Email} onChange={this.getinput}/>
                    </label>
                </div>
                <div>
                    <label> Password :
                        <input type="password" name={'Password'} value={this.state.Password} onChange={this.getinput}/>
                    </label>
                </div>
                <button type="submit" onClick={this.admin} className="G-buttons"><Link to={this.state.login}>login</Link></button>
                <button className="G-buttons"><Link to='/register'> Register</Link></button>
        </form>
        </div>

    }
}