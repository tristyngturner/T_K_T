import React, { Component } from 'react';
import { BrowserRouter as Switch, Route} from 'react-router-dom';
import Quiz from '../components/Quiz';

class Header extends Component {

_getQuiz = () => {
    document.getElementById('quiz').addEventListener('click', function(e) {
        e.preventDefault();
        let urlValue = e.target.innerHTML
        console.log(urlValue)
        fetch (`/api/quiz`+urlValue)
        .then(response => response.json())
        .then(data => console.log(data))
    })
}

    render () {
        return (

            <div className="info">
                <h1 id="header">What The HTML?!</h1>
               
                <p id="paragraph1">Learning to be a great developer can be tough, and might even make you feel like you're
                losing your mind at times...</p>
                <p id="paragraph2">Luckily our quizzes are here to give your brain a fun break and help you practice what you've learned so far!</p> 

                <div className="top-page">
                    <nav id="navbar" className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                             </div>
                             <div className= "d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" id="first">
                                <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                                    <a href="/quiz/HTML" id="html">HTML</a> 
                                </div>
                            </div>
                            <div className= "p-3 p-md-5 m-md-3 text-center bg-light" id="second">
                                <div className="col-md-5 p-lg-5 mx-auto my-5">
                                    <a href="/quiz/css" id="css">CSS</a>
                                </div>
                            </div>
                            <div className= "p-3 p-md-5 m-md-3 text-center bg-light" id="third">
                                <div className="col-md-5 p-lg-5 mx-auto my-5">
                                    <a href="/quiz/Javascript" id="java">JavaScript</a>
                                </div>
                            </div>
                            <div className= "p-3 p-md-5 m-md-3 text-center bg-light" id="fourth">
                                <div className="col-md-5 p-lg-5 mx-auto my-5">
                                    <a href="/quiz/CLI" id="cli">CLI</a>
                                </div>
                            </div>
                            <div className= "p-3 p-md-5 m-md-3 text-center bg-light" id="fifth">
                                <div className="col-md-5 p-lg-5 mx-auto my-5">
                                    <a href="/quiz/GIT" id="git">Git</a>
                                </div>
                            </div>
                            
                        </div>
                    </nav>
                </div>
                <Switch>
                    
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
