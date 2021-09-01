import React from 'react'
import { Route } from 'react-router';
import { Fragment } from 'react';
import Header from './Layout/Header/Header'

export const HomeTemplate =(props) =>{
    const {Component,...restProps} =props;

    return <Route {...restProps} render={(propsRoute)=>{

        return <Fragment>
            <Header/>


            <Component {...propsRoute}/>


        </Fragment>

    }}/>
}

