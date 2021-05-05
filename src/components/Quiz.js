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
        fetch('http://localhost:3001/api/correctanswers',{
            headers:{
                'userSelection':userSelection}
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.isCorrect === true){
                    console.log('green');
                }
                if(data.isCorrect === false){
                    document.getElementById('question').style.color='FF0000';
                    
                }
            });
            return;
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
            <div className="questionContainer">
                <div key={this.props.quiztype} id="question">{this.props.quizType} Quiz</div>
                <form>
                {this.state.quizInfo.map((question, index) => {
                    const number = Math.random()
                    if (number <= 0.5) {
                        return (


                            <div class= "d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" key={index}>
                            <div class ="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
                            <br></br>
                                <div id="question" key={question.question}>{question.question}</div>
                                <input type="radio" class="option-input radio" key={question.answer1} name={index} value={question.answer1} onClick={this._handleRadioButton}></input>

                                <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                                <input type="radio" class="option-input radio" key={question.answer2} name={index} value={question.answer2} onClick={this._handleRadioButton}></input>
                                <label htmlFor="answer2" id="answer2">{question.answer2}</label>
                                
                            </div>
                        )
                    } else {
                    return (
                        <div class= "d-md-flex flex-md-equal w-100 my-md-3 ps-md-3" key={index}>
                        <div class ="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"></div>
                        <br></br>
                            <div id="question2" key={question.question}>{question.question}</div>
                            <input type="radio" class= "option-input radio" key={question.answer2} name={index} value={question.answer2} onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer2" id="answer2">{question.answer2}</label>
                            <input type="radio" class="option-input radio" key={question.answer1} name={index} value={question.answer1} onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                        </div>
                     )
                    }
                })}
                    
                    
                <button id="submit" key="submit">Submit</button>
                </form>
            </div>
            
        )
    }
}
    export default Quiz;