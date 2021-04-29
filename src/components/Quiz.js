import React, { Component } from 'react';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizInfo: []
        }
    }

    _getInfo = () => {
        let quizInfo = [];
        fetch (`http://localhost:3001/api/quiz/${this.props.quizType}`)
            .then(response => response.json())
            .then(data => this.setState({
                quizInfo: quizInfo.push(data.questions)
            }))
            .then(console.log(quizInfo))
            // .then(data => console.log(data))
            // .then(data => 
            //     this.setState ({
            //     quizInfo: data
            // })
    }

    componentDidMount() {
        this._getInfo()
    }

    render () {
        return (
            <div>
                <form>

                    <div id="question">{this.props.quizType} Question</div>
                
                    <input type="radio" name="answer" value="answer1"></input>
                    <label htmlFor="answer1" id="answer1" >{this.state.quizInfo}</label>
                    <input type="radio" name="answer" value="answer2"></input>
                    <label htmlFor="answer2" id="answer2">Answer 2</label><br/>
                    <button id="nextButton">Next</button>
                    
                
                </form>
            </div>
            
        )
    }
}
    export default Quiz;