import React from 'react'
import { Route, Redirect } from 'react-router'
import { UserApi } from './usersApi'

const LoginCheck = ({children}) => {
    return ( <Route render={() => {
       return UserApi.isAuthenticated() ? children : <Redirect to={{pathname: "/login"}} />}} />
    )}


export default LoginCheck
