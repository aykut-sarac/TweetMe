import React from "react";

function Navbar(){
    return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
    <a className="navbar-brand navbar-lght" href="/">  <i className="fab fa-earlybirds"/> TweetMe </a>
    
    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon">
    </span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
    
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Explore</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Notifications</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Messages</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Lists</a></li>
        <li className="nav-item"> <a className="nav-link" href="#">Profile</a></li>
    </ul>
    </div>
    </nav>
    
);
}


export default Navbar;