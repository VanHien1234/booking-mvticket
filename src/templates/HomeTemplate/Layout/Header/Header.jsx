import React, { Fragment } from 'react'
import { Button } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import { USER_LOGIN,TOKEN } from 'settingAPI/apiConfig'
import { history } from 'App'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function Header(props) {

    const { userLogin } = useSelector(state => state.UserReducer)

    const RenderButton = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <NavLink to={`/login`}>
                    <Button className="mr-4" type="primary">Login</Button>
                </NavLink>

                <NavLink to={`/register`}>
                    <Button className="mr-3" type="primary">Register</Button>
                </NavLink>
            </Fragment>
        }
        return <Fragment>
            <Button shape="circle" size='large' style={{backgroundColor:'green',border:'none',color:'white',fontWeight:'bold' }} className="mr-2 "
            onClick={() => {
                history.push('/profile')
            }}>{userLogin.taiKhoan.substr(0, 1)}</Button>
            <span style={{fontWeight:'bold'}} className="mr-4">{userLogin.hoTen}</span>
            <Button 
            onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/');
                window.location.reload();
            }} style={{backgroundColor:'red',border:'none'}} size="medium" type="primary" shape="round" className="mr-3">Đăng xuất  <i class="fas fa-sign-out-alt ml-2"></i></Button>
        </Fragment>
    }


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
                                {RenderButton()}
                            </span>
                        </div>
                    </div>
                </nav>

            </div>


        </Fragment>

    )
}
