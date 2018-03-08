import React from 'react';
import '../css/custom.css'
import {BrowserRouter,Route,Redirect,NavLink} from 'react-router-dom';
import {Posts} from '../containers/posts';
import {Data} from '../containers/data';
import {Profile} from '../containers/profile';

export default class sidebarComponent extends React.Component{

    render(){
        //console.log("In sidebar ");
        return(
            <div>
                <BrowserRouter>
                    <div className={'row'}>
                    <div className={'col-sm-4'}>

                                <ul className="navbar flex-column float-left sidebar">
                                    <NavLink to="/profile">Profile</NavLink>&nbsp;&nbsp;&nbsp;
                                    <NavLink to="/data">Data</NavLink>&nbsp;&nbsp;&nbsp;
                                    <NavLink to="/posts">Posts</NavLink>
                                </ul>
                    </div>
                        <div className={'col-sm-8'}>

                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/data" component={Data}/>
                        <Route path="/posts" component={Posts}/>
                        </div>
                    </div>
                </BrowserRouter>

            {/*<div className={'sidebar'}>*/}

                {/*<div name={'1'} className={'menuItem'} ><button className="btn btn-warning" onClick={this.menuItemhandler1}>Profile</button></div>*/}
                {/*<div name={'1'} className={'menuItem'} onClick={this.menuItemhandler}><button className="btn btn-info">Data</button></div>*/}
                {/*<div name={'1'} className={'menuItem'} onClick={this.menuItemhandler}><button className="btn btn-success">Posts</button></div>*/}
                {/*<div name={'1'} className={'menuItem'} onClick={this.menuItemhandler}><button className="btn btn-primary">Blog</button></div>*/}
            {/*</div>*/}

            </div>
        )
    }


}