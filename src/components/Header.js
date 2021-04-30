import React, { Component } from 'react';
import { BrowserRouter as Switch, Route} from 'react-router-dom';
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

            <div className="info">
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

                                    <a href="/quiz/GIT" key="key1" id="home">Git</a>
                                    <a href="/quiz/HTML" key="key2" id="html">HTML</a>
                                    <a href="/quiz/CSS" key="key3" id="css">CSS</a>
                                    <a href="/quiz/Javascript" key="key4" id="java">JavaScript</a>
                                    <a href="/quiz/CLI" key="key5" id="cli">CLI</a>

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