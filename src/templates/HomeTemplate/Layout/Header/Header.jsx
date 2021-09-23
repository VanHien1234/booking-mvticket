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
                    <Button className=" mr-4" style={{backgroundColor:'green',border:'none'}} type="primary" shape="round" size="large">Login</Button>
                </NavLink>

                <NavLink to={`/register`}>
                    <Button className=" mr-3" type="primary" shape="round" size="large">Register</Button>
                </NavLink>
            </Fragment>
        }
        return <Fragment>
            <Button shape="circle" size='large' style={{backgroundColor:'green',border:'none',color:'white',fontWeight:'bold' }} className="mr-2 "
            onClick={() => {
                history.push('/profile')
            }}>{userLogin.taiKhoan.substr(0, 1)}</Button>
            <NavLink to="/profile" style={{fontWeight:'bold',color:'#F6EB83'}} className="mr-4">{userLogin.hoTen}</NavLink>
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
                    <div className="container-fluid"><NavLink className="navbar-brand" to="/">
                        <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="" />
                        </NavLink><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul style={{fontFamily: 'Bungee'}} className="nav navbar-nav mx-auto" >
                                <li className="nav-item" role="presentation"><NavLink style={{color:'white',fontSize:'500'}} to="/"  className="nav-link" >Lich Chieu</NavLink></li>
                                <li className="nav-item" role="presentation"><NavLink style={{color:'white',fontSize:'500'}} to="/" className="nav-link" >Tin Tuc</NavLink></li>
                                <li className="nav-item" role="presentation"><NavLink style={{color:'white',fontSize:'500'}} to="/" className="nav-link" >Ung Dung</NavLink></li>
                                <li className="nav-item dropdown"><NavLink style={{color:'white',fontSize:'500'}} className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" to="/">Cum Rap</NavLink>
                                    <div className="dropdown-menu" role="menu">
                                        <NavLink className="dropdown-item"  to="/">Logo </NavLink>
                                        {/* <NavLink className="dropdown-item" role="presentation" to="#">Banner </NavLink>
                                        <NavLink className="dropdown-item" role="presentation" to="#">content </NavLink> */}
                                    </div>
                                </li>
                            </ul>
                            
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
