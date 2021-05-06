
import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizInfo: []
        }
    }

    _handleRadioButton = (e) => {
        console.log(e);
        let userSelection = e.target.value;
        fetch('/api/correctanswers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({userSelection:userSelection}), //request body that will show in server.js//
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // let id = data.questions.id
                if(data.isCorrect === true){
                    console.log('green');
                    e.target.parentElement.style.color = '#00FF00'
                }
                if(data.isCorrect === false){
                    console.log('red');
                    e.target.parentElement.style.color = '#FF0000'
                }
            });
        return;
    }
    _handleSubmit = (e) =>{
        e.preventDefault();
        // fetch('http://localhost:3001/api/submit', {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //       },
        //     //   body: 
        // })
        // .then((result) => {
        //     console.log(result)
        // })
        
        console.log('submitted');
        alert('submitted!')
    }

    _getInfo = () => {

        fetch (`/api/quiz/${this.props.quizType}`)
            .then(response => response.json())
            .then(data => 
                this.setState({
                    quizInfo: data.questions
                })
            )
    }

    componentDidMount() {
        this._getInfo()
    }

    render () {
        return (
            <div className="questionContainer">
                <div key={this.props.quiztype} id="question">{this.props.quizType} Quiz</div>
                <form >
                {this.state.quizInfo.map((question, index) => {
                    const number = Math.random()
                    if (number <= 0.5) {
                        return (


                            <div className= "d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" key={index}>
                            <div className ="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
                            <br></br>
                                <div id="question" key={question.question}>{question.question}</div>
                                <input type="radio" className="option-input radio" key={question.answer1} name={index} value={question.answer1} onClick={this._handleRadioButton}></input>

                                <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                                <input type="radio" className="option-input radio" key={question.answer2} name={index} value={question.answer2} onClick={this._handleRadioButton}></input>
                                <label htmlFor="answer2" id="answer2">{question.answer2}</label>
                                
                            </div>
                        )
                    } else {
                    return (
                        <div className= "d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" key={index}>
                        <div className ="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
                        <br></br>
                            <div id="question2" key={question.question}>{question.question}</div>
                            <input type="radio" className= "option-input radio" key={question.answer2} name={index} value={question.answer2} onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer2" id="answer2">{question.answer2}</label>
                            <input type="radio" className="option-input radio" key={question.answer1} name={index} value={question.answer1} onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                        </div>
                     )
                    }
                })}
                    
                    

                <button id="submit" className="submit" key="submit" onClick={this._handleSubmit}>Submit</button>
                </form>
            </div>
            
        )
    }
}
    export default Quiz;
