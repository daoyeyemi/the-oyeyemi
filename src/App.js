import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Switch>
            <Route>
                <Navbar />
                <Home />
            </Route>
        </Switch>
        
    )
}

export default App
