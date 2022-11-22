import React from "react";
import {Link} from "react-router-dom";

export  default  class Register extends React.Component{
    state={
        firstName : "".trim(),
        lastName : "".trim(),
        password : "".trim(),
        email : "".trim(),
        areaCod : "".trim(),
        number : "".trim(),
        registerUser : {},
        arr : [],
        double : false,
        x :[],
        go : false
    }
    Handelinputs=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    onclick=()=>{
        let canLogin = false
        if (this.state.firstName.length){
            canLogin = false
        }else{
            canLogin = false
        }
        if (this.state.lastName.length){
            canLogin = false
        }else{
            canLogin = false
        }
        if (this.state.password.length){
            canLogin = false
        }else{
            canLogin = false
        }
        if (this.state.areaCod.length){
            canLogin = false
        }else{
            canLogin = false
        }
        if (this.state.number.length){
            canLogin = false
        }else{
            canLogin = false
        }
        if(this.state.email.length && this.ValidateEmail(this.state.email)){
            canLogin =true
        }else {
            canLogin =false
        }

        if(canLogin){
            this.clear()
            this.setState({ registerUser: {
                firstName: this.state.firstName, lastName: this.state.lastName, Email: this.state.email, password: this.state.password, phone : this.state.areaCod + this.state.number
            }},()=>{
                if(localStorage.key('user-list')){
                    this.setState({x : JSON.parse(localStorage.getItem("user-list"))},()=>{
                        if(this.duplicet(this.state.x , this.state.registerUser) === true){
                            alert("email is alredy used")
                        }else {
                            this.setState({x : [...this.state.x , this.state.registerUser]},()=>{
                                localStorage.setItem("user-list", JSON.stringify(this.state.x))
                            })
                        }
                    })
                }else {
                    this.setState({arr : [...this.state.arr,this.state.registerUser]},()=>{
                        localStorage.setItem("user-list", JSON.stringify(this.state.arr))
                    })
                }
            })
        }else {
            console.log("dont lev emoty")
        }

    }


    duplicet=(arr, compare)=> {
        let flag
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].Email === compare.Email) {
                flag = true
                break;
            } else {
                flag = false
            }
        }
        return flag;
    }

    clear=()=>{
        this.setState({
            firstName : "".trim(),
            lastName : "".trim(),
            password : "".trim(),
            email : "".trim(),
            areaCod : "".trim(),
            number : "".trim(),
            registerUser : {},
            arr : [],
            double : false,
            x :[]
        })
    }

    ValidateEmail=(email)=>{
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailFormat)
    }
    render() {
        return<div className='P-form-Body G-center-form'>
            <div className='P-register-hed'><h2>EVENT REGISTRATION FORM</h2></div>
            <form>
                <div className="G-input-filed">
                    <h2>Name</h2>
                    <label>
                        <input type="text" value={this.state.firstName} name="firstName" onChange={this.Handelinputs} />
                        <p>first name</p>
                    </label>
                    <label>
                        <input type="text" className='P-lastname'  value={this.state.lastName} name="lastName" onChange={this.Handelinputs} />
                        <p>Last name</p>
                    </label>
                </div>
                <div className="G-input-filed">
                    <h2>Password</h2>
                    <label>
                        <input type="password" value={this.state.password} name='password' onChange={this.Handelinputs}/>
                    </label>
                </div>
                <div className="G-input-filed">
                    <h2>Email</h2>
                    <label>
                        <input type="email" value={this.state.email} name='email' onChange={this.Handelinputs}/>
                    </label>
                </div>
                <div className="G-input-filed">
                    <h2>Phone</h2>
                    <label>
                        <input type="number" value={this.state.areaCod} name='areaCod' onChange={this.Handelinputs}/>
                        <p> name</p>
                    </label>
                    <label>
                        <input type="number" value={this.state.number} name='number' onChange={this.Handelinputs}/>
                        <p> name</p>
                    </label>
                </div>
                <button className="G-buttons" type="button" onClick={this.onclick}>submit</button>
                <button className="G-buttons"><Link to='/login'> back to login</Link></button>
            </form>
        </div>
    }
}