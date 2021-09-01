import React, { Fragment } from 'react'

export default function Header(props) {
    return (
        <Fragment>
            <div className="header-movie">
                <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
                    <div className="container-fluid"><a className="navbar-brand" href="#">BBBOOTSTAP</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav mx-auto">
                                <li className="nav-item" role="presentation"><a className="nav-link" href="#">Contact</a></li>
                                <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Services</a>
                                    <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">Logo design</a><a className="dropdown-item" role="presentation" href="#">Banner design</a><a className="dropdown-item" role="presentation" href="#">content writing</a></div>
                                </li>
                            </ul>
                            {/* <form className="form-inline mr-auto" target="_self">
                                <div className="form-group"><label htmlFor="search-field"><i className="fa fa-search text-white" /></label><input className="form-control search-field" type="search" id="search-field" name="search" /></div>
                            </form> */}
                            <span className="navbar-text"> 
                            <a className="login" href="#">Log In</a></span>
                            <a className="btn btn-light action-button" role="button" href="#">Signup</a>
                        </div>
                    </div>
                </nav>
                
            </div>
        </Fragment>

    )
}
