import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Quiz from '../components/Quiz';
import Home from '../components/Home';

class Header extends Component {

_getQuiz = () => {
    document.getElementById('quiz').addEventListener('click', function(e) {
        e.preventDefault();
        let urlValue = e.target.innerHTML
        console.log(urlValue)
        fetch (`http://localhost:3001/api/quiz`+urlValue)
        .then(response => response.json())
        .then(data => console.log(data))
    })
}

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
                                    <a href="/quiz/HTML" id="html">HTML</a>
                                    <a href="/quiz/css" id="css">CSS</a>
                                    <a href="/quiz/Javascript" id="java">JavaScript</a>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    {/* <Route path="/Quiz" component={Quiz}></Route> */}
                    <Route path="/quiz/HTML">
                        <Quiz quizType="HTML"/>
                        
                    </Route>
                    <Route path="/quiz/CSS">
                        <Quiz quizType="CSS"/>
                        
                    </Route>
                    <Route path="/quiz/Javascript">
                        <Quiz quizType="Javascript"/>
                        
                    </Route>
                    <Route path="/quiz/CLI">
                        <Quiz quizType="CLI"/>
                        
                    </Route>
                    <Route path="/Quiz/GIT">
                        <Quiz quizType="GIT"/>
                        
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Header;