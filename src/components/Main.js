import React,{Component} from 'react';
import {BrowserRouter,Route,Redirect,NavLink} from 'react-router-dom';
import {Navbar,NavbarBrand,NavItem} from 'react-bootstrap';
import Login from '../containers/Login';
import {Header} from '../containers/header';
import {Footer} from '../containers/footer';

import NavbarComponent from '../containers/navbar';
import {Home} from '../containers/Home';
import {About} from '../containers/About';
import AfterLogin from '../containers/AfterLogin';
import SidebarComponent from '../containers/sidebars';
export default class Main extends Component{
    render(){

        const Private = ({...props}) => {

            return (
                localStorage.getItem('user')  ? // If User Exists
                    <div>
                        <NavbarComponent/>
                        <SidebarComponent/>
                        <Route {...props}/>
                    </div>                    :
                    <Redirect to="/"/>
            )
        };
        const Public = ({...props}) => {
            console.log("In Public :",localStorage.getItem('user'));
            return (

                !localStorage.getItem('user') ?
                    <Route {...props}/>       :
                    <Redirect to="/"/>
            )
        };
        return(
                    <BrowserRouter>
                        <div>
                        <div className={'head1'}>
                            <Header/>
                        </div>
                        <div>
                            {/*<Navbar>*/}

                                {/*<NavbarBrand>*/}
                                    <ul className="header">
                                        <NavLink to="/">HOME</NavLink>&nbsp;&nbsp;&nbsp;
                                        <NavLink to="/about">ABOUT US</NavLink>&nbsp;&nbsp;&nbsp;
                                        <NavLink to="/login">LOGIN</NavLink>
                                    </ul>
                                {/*</NavbarBrand>*/}

                            {/*</Navbar>*/}

                        <Public exact path="/" component={Home}/>
                        <Public exact path="/login" component={Login}/>
                        <Public path="/about" component={About}/>
                            <Private exact path="/afterlogin" component={AfterLogin}/>
                        </div>
                        <div className={'footer'}>
                            <Footer/>
                        </div>
                        </div>
                    </BrowserRouter>




        )
    }
}