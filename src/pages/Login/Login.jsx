import React from 'react'
import { useFormik } from 'formik';
import {useDispatch } from 'react-redux'
import './Login.css'
import { DangNhapAction } from 'redux/actions/QuanLyUserAction';

export default function Login() {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            taiKhoan:'',
            matKhau:'',

        },
        onSubmit: values =>{
            dispatch(DangNhapAction(values))
            console.log('values',values);

        }
    })

    return (
        <div className="loginPage">
            
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="user-box">
                        <input type="text" name="taiKhoan" onChange={formik.handleChange} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="matKhau" onChange={formik.handleChange} />
                        <label>Password</label>
                    </div>
                    <a className="ml-3" >
                        <button style={{background:'none',border:'none',fontSize:'16px',textTransform:'uppercase',letterSpacing:'4px'}}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Login
                        </button>
                        
                        
                    </a>
                    <a className="ml-5" href="#">
                        <span />
                        <span />
                        <span />
                        <span />
                        SignUp
                    </a>
                </form>
            </div>
        </div>


    )
}
