import React,{ Fragment, useEffect} from 'react'
import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from 'settingAPI/apiConfig';
export default function CheckoutTemplate(props) {

    const { Component, ...restProps } = props;

    if(!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }   
    return (
        <Route {...restProps} render={(propsRoute) => { 

            return <Fragment>
                <Component {...propsRoute} />
            </Fragment>
        }} />
    )
}
