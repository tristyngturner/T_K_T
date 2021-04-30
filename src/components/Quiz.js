import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizInfo: []
        }
    }

    _handleRadioButton = (e) => {
        e.preventDefault();
        console.log(e);
        let userSelection = e.target.innerHTML;
        fetch('https://localhost:3001/api/answers',{
            headers:{
                'userSelection':userSelection
            },.then(response => response.json())
            .then(data => console.log(data));
    }
    _getInfo = () => {
        // let quizInfo = [];
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
                    return (
                        <div key={index}>
                            <div key={question.question}>{question.question}</div>
                            <input type="radio" key={question.answer1} name={index} value="answer1" onClick={this._handleRadioButton}></input>
                            <label htmlFor="answer1" id="answer1" >{question.answer1}</label>
                            <input type="radio" key={question.answer2} name={index} value="answer2"></input>
                            <label htmlFor="answer2" id="answer2">{question.answer2}</label><br/>
                            
                        </div>
                    )
                })}
                    
                    
                <button key="submit">submit button</button>
                </form>
            </div>
            
        )
    }
}
    export default Quiz;