import React, { Component } from 'react';

class Quiz extends Component {

    _getInfo = () => {
        fetch (`http://localhost:3001/api/quiz${this.props.quizType}`)
            .then(response => response.json())
            .then(data => console.log(data));
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
                    <label htmlFor="answer1" id="answer1" >Answer 1</label>
                    <input type="radio" name="answer" value="answer2"></input>
                    <label htmlFor="answer2" id="answer2">Answer 2</label><br/>
                    <button id="nextButton">Next</button>
                    
                
                </form>
            </div>
            
        )
    }
}
    export default Quiz;