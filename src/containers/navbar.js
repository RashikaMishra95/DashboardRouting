import {Nav,Navbar,NavbarBrand,NavItem} from 'react-bootstrap';
import '../css/style.css';
import React from 'react';

export default class NavbarComponent extends React.Component{

    logoutHandler=()=>{
        localStorage.removeItem('user');
      //  this.props.history.push("/");
        window.location="/login";
        console.log("Logout :",localStorage.getItem('user'));
    };

    render(){
        return(<nav>

            <Navbar>
                <NavbarBrand>Welcome {   localStorage.getItem('user') }</NavbarBrand>
                    <button className={'btn btn-danger'} onClick={this.logoutHandler}>Logout</button>
            </Navbar>
            </nav>
        )
    }
}

