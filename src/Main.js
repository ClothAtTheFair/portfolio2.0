import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div className = "nav-bar">
                <p>logo here</p>
                <ul>
                    <li >
                    <NavLink className = "routes" exact to="/">Home</NavLink>
                    </li>
                    <li >
                    <NavLink className = "routes" to="/projects">Projects</NavLink>
                    </li>
                    <li>
                    <NavLink className = "routes" to="/contact">Contact</NavLink>
                    </li>
                </ul>

                <div className="content">
                    <Route exact path="/" component = {Home} />
                    <Route path="/projects" component = {Projects} />                   
                    <Route path="/contact" component = {Contact} />                    
                </div>
            </div>
            </HashRouter>
        );
    }
}


export default Main;