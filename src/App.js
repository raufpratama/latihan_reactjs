import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import BookDetail from './Components/BookDetail';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/books' component={Books}/>
                        <Route path='/:post_id' component={BookDetail}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
