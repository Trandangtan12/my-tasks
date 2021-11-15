import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginCheck from './api/auth/LoginCheck';
import Website from './layout/website';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
const Routers = () => {
    return (
        <Router>
            <Website>
                <Switch>
                    <LoginCheck exact path="/">
                        <HomePage />
                    </LoginCheck>
                    <Route exact path="/login" component={LoginPage}/>
                </Switch>
            </Website>
        </Router>
    )
}

export default Routers
