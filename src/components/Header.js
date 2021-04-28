import React, { Component } from 'react';

class Header extends Component {



    render () {
        return (
            <div class="info">
                <p id="header">Pick A Quiz, Any Quiz</p>
                <div className="top-page">
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                             </div>
                            <div className="single-page-nav sticky-wrapper" id="tmNavbar">
                                <ul className="nav navbar-nav">
                                    <a href="#section1" id="home">Home</a>
                                    <a href="/Quiz" id="html">HTML</a>
                                    <a href="#section3" id="css">CSS</a>
                                    <a href="#section4" id="java">JavaScript</a>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header;