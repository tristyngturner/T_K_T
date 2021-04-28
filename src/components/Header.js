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
            <div>
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
                                    <li><a id="quiz" href="/Quiz/HTML" onClick={this._getQuiz}>HTML</a></li>
                                    <li><a href="#section3">CSS</a></li>
                                    <li><a href="#section4">Javascript</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <form>
                    <div id="question">Question</div>
                
                    <input type="radio" name="answer" value="answer1"></input>
                    <label htmlFor="answer1" id="answer1" >Answer 1</label>
                    <input type="radio" name="answer" value="answer2"></input>
                    <label htmlFor="answer2" id="answer2">Answer 2</label><br/>
                    <button id="nextButton">Next</button>
                    
                
                </form>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    {/* <Route path="/Quiz" component={Quiz}></Route> */}
                    <Route path="/Quiz/HTML">
                        <Quiz quizType="HTML"/>
                        
                    </Route>
                    <Route path="/Quiz/CSS">
                        <Quiz quizType="CSS"/>
                        
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Header;