import React, { Component } from 'react';

class Header extends Component {



    render () {
        return (
            <div>
                <p>Header component</p>
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
                                    <li><a href="#section1">Home</a></li>
                                    <li><a href="/Quiz">HTML</a></li>
                                    <li><a href="#section3">CSS</a></li>
                                    <li><a href="#section4">Javascript</a></li>
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