import React from "react";

function Navbar(){
    return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
    <a class="navbar-brand navbar-lght" href="/">  <i class="fab fa-earlybirds"/> TweetMe </a>
    
    <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon">
    </span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
    
        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Explore</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Notifications</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Messages</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Lists</a></li>
        <li class="nav-item"> <a class="nav-link" href="#">Profile</a></li>
    </ul>
    </div>
    </nav>
    
);
}


export default Navbar;