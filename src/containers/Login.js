import React from 'react';
import {Button,FormControl} from 'react-bootstrap';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            pwd:'',
        }
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        });

    };
    handlePwd=(e)=>{
        this.setState({
            pwd:e.target.value
        });
    };
    handleSubmit=()=>{
        console.log("Email :", this.state.email);
        if(this.state.email==="abc@gmail.com" && this.state.pwd==="abc123" )  {
            localStorage.setItem('user',this.state.email);
            this.props.history.push('/list');


        }
        else{
            alert("Invalid USER ")
            this.setState({
                email:"",
                pwd:""
            });
        }

    };
    render(){
        return(
            <center>
                <div className={'col-md-9'}>
                <h2 className={'btn-success box'}>LOGIN</h2>
                <div className={'box'}>
                    <form className={'jumbotron'}  onSubmit={(e)=>{e.preventDefault()}}>
                        <FormControl type={'email'} name={'email'} placeholder={'Enter Email'} value={this.state.email} onChange={this.handleEmail} required/>
                        <FormControl type={'password'} name={'pwd'} placeholder={'Enter Password'} value={this.state.pwd} onChange={this.handlePwd} required/>
                        <div className={'margin-bottom'}>
                            <Button type={'submit'} className={'btn btn-primary'} onClick={this.handleSubmit}>Login</Button>

                        </div>
                    </form>

                </div>
                </div>
            </center>

        )
    }

}