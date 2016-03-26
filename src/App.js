import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

const Outer = (props) => <div><h1>Our site</h1><Links />{props.children}</div>
const About = () => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>

const Links = () => (
    <nav>
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/about">About</Link>
        <Link activeClassName="active" to="/contact">Contact</Link>
        <Link to="/Hi">Hi</Link>
        <Link to="/Ho">Ho</Link>
    </nav>
)

const Message = (props) =>
    <div><h1 style={{color:'red'}}>{props.params.message || 'Hej'}</h1></div>

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Outer}>
                    <IndexRoute component={About}></IndexRoute>
                    <Route path="about" component={About}></Route>
                    <Route path="contact" component={Contact}></Route>
                    <Route path="/(:message)" component={Message}></Route>
                </Route>
            </Router>
        )
    }
}

export default App