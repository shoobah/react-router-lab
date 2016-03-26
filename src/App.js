import React from 'react'
import { Router, Route, Link, Redirect, IndexRoute, hashHistory } from 'react-router'

const Outer = (props) =>
    <div>
        <h1>Our site</h1>
        <Links />
        {props.children}<br/>
        {props.header}{props.body}
    </div>
const About = () => <div><h1>About</h1></div>
const Contact = () => <div><h1>Contact</h1></div>
const Other = () => <h1>Other</h1>
const OtherBody = (props) => 
    <div>
        Other body div<br/>
        <span style={{color:'teal'}}>Message:[{props.location.query.message || 'no message'}]</span>
    </div>

const Links = () => (
    <nav>
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/about">About</Link>
        <Link activeClassName="active" to="/about-us">About Us</Link>
        <Link activeClassName="active" to="/contact">Contact</Link>
        <Link activeClassName="active" to="/other">Other</Link>
        <Link to={{pathname: '/other', query: {message: 'Programmatic message'}}}>Test</Link>
    </nav>
)

const Message = (props) =>
    <div><h1 style={{ color: 'red' }}>{props.params.message || 'Hej'}</h1></div>

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Outer}>
                    <IndexRoute component={About}></IndexRoute>
                    <Route path="about" component={About}></Route>
                    <Route path="contact" component={Contact}></Route>
                    <Route path="/other" components={{ header: Other, body: OtherBody }}></Route>
                    <Redirect from="/about-us" to="/about"></Redirect>
                </Route>
            </Router>
        )
    }
}

export default App