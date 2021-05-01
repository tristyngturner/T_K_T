const express = require('express');
const app = express();
const port = 3001;
const db = require('./models')
const{qData} = require('./permdata');
const cors = require('cors')


app.use(express.json());
app.use(cors());

app.get('/api/quiz/Javascript', (req,res) => {

    db.Questions.findAll({where:{quizType:'js'}})
        .then((results) =>{
            let questions = []
            results.forEach(function(index){
                questions.push({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
            res.json({questions:questions})
        })
})


app.get('/api/quiz/HTML', (req,res) => {

    db.Questions.findAll({where:{quizType:'html'}})
        .then((results) =>{
            let questions = []
            results.forEach(function(index){
                questions.push({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
            res.json({questions:questions})
        })
})

app.get('/api/quiz/CLI', (req,res) => {

    db.Questions.findAll({where:{quizType:'cli'}})
        .then((results) =>{
            let questions = []
            results.forEach(function(index){
                questions.push({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
            res.json({questions:questions})
        })
})

app.get('/api/quiz/GIT', (req,res) => {

    db.Questions.findAll({where:{quizType:'git'}})
        .then((results) =>{
            let questions = []
            results.forEach(function(index){
                questions.push({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
            res.json({questions:questions})
        })
})

app.get('/api/quiz/CSS', (req,res) => {

    db.Questions.findAll({where:{quizType:'css'}})
        .then((results) =>{
            let questions = []
            results.forEach(function(index){
                questions.push({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
            res.json({questions:questions})
        })
})

app.get('/api/correctAnswers',(req,res) =>{
    let userAnswer = req.header;
    for( i=0; i<db.Questions.length;i++){
        if(db.Questions[i].correctAnswer == userAnswer){
            res.json({isCorrect:true})
            return
        }if(!userAnswer || db.Questions[i].correctAnswer !== userAnswer){
            res.json({errorMessage:'Answer is incorrect. Someone needs to google more!',isCorrect:false})
            return
        }
    } return
})


app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port,() => {
    console.log(`App listening to ${port}`);
});
