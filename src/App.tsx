import * as React from 'react'
import { Routes as Switch, Route } from 'react-router'
import Navbar from './layouts/Navbar'

import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

class App extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default App

