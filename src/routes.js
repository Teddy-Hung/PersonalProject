import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Landing from './Components/Landing/Landing'
import Profile from './Components/Profile/Profile'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/dash' component={Dashboard} />
        <Route path='/profile' component={Profile} />
    </Switch>
)