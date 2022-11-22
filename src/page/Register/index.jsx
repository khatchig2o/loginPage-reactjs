import React from "react";
import {Link} from "react-router-dom";

export  default  class Register extends React.Component{
    state={
        go : false,
        firstName : "",
        lastName : "",
        password : "",
        email : "",
        areaCod : "",
        number : "",
        registerUser : {},
        arr : [],
        double : false,
        x :[],
        errorfname:"",
        errorLname:'',
        errorpassword : "",
        erroremail : "",
        errorareacod :'',
        errornumber :'',
        canLogin : false
    }
    Handelinputs=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    onclick=()=>{

        if (this.state.firstName.trim().length){
            this.setState({canLogin : true})
            this.setState({errorfname : ""})
        }else{
            this.setState({canLogin : false})

            this.setState({errorfname : "pleas fill the first name"})

        }

        if (this.state.lastName.trim().length){
            this.setState({canLogin : true})
            this.setState({errorLname : ""})
        }else{
            this.setState({canLogin : false})
            this.setState({errorLname : "pleas fill the last name"})
        }

        if (this.state.password.trim().length){
            this.setState({canLogin : true})
            this.setState({errorpassword : ""})
        }else{
            this.setState({canLogin : false})
            this.setState({errorpassword : "pleas fill the password"})
        }

        if (this.state.areaCod.trim().length){
            this.setState({canLogin : true})
            this.setState({errorareacod : ""})
        }else{
            this.setState({canLogin : false})
            this.setState({errorareacod : "pleas fill the areaCod"})
        }

        if (this.state.number.trim().length){
            this.setState({canLogin : true})
            this.setState({errornumber : ""})
        }else{
            this.setState({canLogin : false})
            this.setState({errornumber : "pleas fill the number"})
        }

        if(this.state.email.trim().length){
            if(this.state.email.length && this.ValidateEmail(this.state.email)){
                this.setState({canLogin : true})
                this.setState({erroremail : ""})
            }else {
                this.setState({canLogin : false})
                this.setState({erroremail : "pleas fill a valid email"})
            }
        }else {
            this.setState({canLogin : false})
            this.setState({erroremail : "pleas fill  the email"})
        }



        if(this.state.canLogin){
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
            firstName : "",
            lastName : "",
            password : "",
            email : "",
            areaCod : "",
            number : "",
            registerUser : {},
            arr : [],
            double : false,
            x :[],
            go : true
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
                        <input type="text" value={this.state.firstName} name="firstName" onChange={this.Handelinputs} className={ this.state.errorfname ? 'G-error': ''} />
                        <p>first name</p>
                        {this.state.errorfname ? <p className="P-error-text">{this.state.errorfname}</p> : null}
                    </label>
                    <label>
                        <input type="text" className='P-lastname'  value={this.state.lastName} name="lastName" onChange={this.Handelinputs} className={ this.state.errorLname ? 'G-error': ''} />
                        <p>Last name</p>
                        {this.state.errorLname ? <p className="P-error-text">{this.state.errorLname}</p> : null}
                    </label>
                </div>
                <div className="G-input-filed">
                    <h2>Password</h2>
                    <label>
                        <input type="password" value={this.state.password} name='password' onChange={this.Handelinputs} className={ this.state.errorpassword ? 'G-error': ''}/>
                        {this.state.errorpassword ? <p className="P-error-text">{this.state.errorpassword}</p> : null}
                    </label>
                </div>
                <div className="G-input-filed">
                    <h2>Email</h2>
                    <label>
                        <input type="email" value={this.state.email} name='email' onChange={this.Handelinputs} className={ this.state.erroremail ? 'G-error': ''}/>
                        {this.state.erroremail ? <p className="P-error-text">{this.state.erroremail}</p> : null}
                    </label>
                </div>
                <div className="G-input-filed">
                    <h2>Phone</h2>
                    <label>
                        <input type="number" value={this.state.areaCod} name='areaCod' onChange={this.Handelinputs } className={ this.state.errornumber ? 'G-error': ''}/>
                        <p> areaCod</p>
                        {this.state.errornumber ? <p className="P-error-text">{this.state.errornumber}</p> : null}
                    </label>
                    <label>
                        <input type="number" value={this.state.number} name='number' onChange={this.Handelinputs } className={ this.state.errornumber ? 'G-error': ''}/>
                        <p> number</p>
                    </label>
                </div>
                <button className="G-buttons" type="button" onClick={this.onclick}>submit</button>
                <button className="G-buttons"><Link to='/login'> back to login</Link></button>
            </form>
        </div>
    }
}