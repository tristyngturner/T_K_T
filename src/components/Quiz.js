import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizInfo: []
        }
    }

    _handleRadioButton = (e) => {

        let userSelection = e.target.value;
        fetch('http://localhost:3001/api/correctanswers',{
            headers:{
                'userSelection':userSelection}
            }).then(response => response.json())
            .then(data => console.log(data))
    }

    _getInfo = () => {

        fetch (`http://localhost:3001/api/quiz/${this.props.quizType}`)
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
            <div>
                <div key={this.props.quiztype} id="question">{this.props.quizType} Quiz</div>
                <form>
                {this.state.quizInfo.map((question, index) => {
                    const number = Math.random()
                    if (number <= 0.5) {
                        return (
                            <div key={index}>
                                <div key={question.question}>{question.question}</div>
                                <input type="radio" key={question.answer1} name={index} value={question.answer1} onClick={this._handleRadioButton}></input>
                                <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                                <input type="radio" key={question.answer2} name={index} value={question.answer2} onClick={this._handleRadioButton}></input>
                                <label htmlFor="answer2" id="answer2">{question.answer2}</label><br/>
                                
                            </div>
                        )
                    } else {
                    return (
                        <div key={index}>
                            <div key={question.question}>{question.question}</div>
                            <input type="radio" key={question.answer2} name={index} value={question.answer2} onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer2" id="answer2">{question.answer2}</label>
                            <input type="radio" key={question.answer1} name={index} value={question.answer1} onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                        </div>
                     )
                    }
                })}
                    
                    
                <button key="submit">submit button</button>
                </form>
            </div>
            
        )
    }
}
    export default Quiz;