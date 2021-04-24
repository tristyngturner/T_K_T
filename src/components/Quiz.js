import React, { Component } from 'react';

class Quiz extends Component {

    render () {
        return (
            <div>
                <form>
                    <div id="question">Question</div>
                
                    <input type="radio" name="answer" value="answer1"></input>
                    <label for="answer1" id="answer1" >Answer 1</label>
                    <input type="radio" name="answer" value="answer2"></input>
                    <label for="answer2" id="answer2">Answer 2</label><br/>
                    <button id="nextButton">Next</button>
                    
                
                </form>
            </div>
            
        )
    }
}
    export default Quiz;