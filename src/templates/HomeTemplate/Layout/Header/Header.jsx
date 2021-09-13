import React, { Fragment } from 'react'
import {Button} from 'antd'
import {Link, NavLink} from 'react-router-dom'
import './Header.scss'

export default function Header(props) {
    return (
        <Fragment>
            <div className="header-movie">
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                    <div className="container-fluid"><a className="navbar-brand" href="#">BBBOOTSTAP</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav mx-auto">
                                <li className="nav-item" role="presentation"><NavLink to="/" className="nav-link" >Lich Chieu</NavLink></li>
                                <li className="nav-item" role="presentation"><NavLink to="/" className="nav-link" >Tin Tuc</NavLink></li>
                                <li className="nav-item" role="presentation"><NavLink to="/" className="nav-link" >Ung Dung</NavLink></li>
                                <li className="nav-item dropdown"><NavLink className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" to="/">Cum Rap</NavLink>
                                    <div className="dropdown-menu" role="menu"><NavLink className="dropdown-item" role="presentation" to="/">Logo design</NavLink><NavLink className="dropdown-item" role="presentation" to="#">Banner design</NavLink><NavLink className="dropdown-item" role="presentation" to="#">content writing</NavLink></div>
                                </li>
                            </ul>
                            {/* <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search text-white" /></label><input className="form-control search-field" type="search" id="search-field" name="search" /></div>
                            </form> */}
                            <span className="navbar-text">
                            <NavLink to={`/login`}>
                                <Button className="mr-3" type="primary">Login</Button>
                            </NavLink>
                            
                            <a className="btn btn-light action-button mr-3" role="button" href="#">Signup</a></span>
                        </div>
                    </div>
                </nav>
                
            </div> 

    
        </Fragment>

    )
}
