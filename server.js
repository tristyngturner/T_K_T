const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const db = require('./server/models')
const{qData} = require('./server/permdata');
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

app.post('/api/correctanswers',(req,res) =>{
    let userAnswer = req.body;
    console.log(userAnswer.userSelection)
    db.Questions.findOne({
        where: {
            correctAnswer: userAnswer.userSelection
        }
    })
    .then((results) => {
        console.log(results)
        if(results === null || results === []){
            res.json({isCorrect:false});
        }else{
            res.json({isCorrect:true});
        }
    })
    
})

app.post('/api/submit', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})


app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname + '/build/index.html');
})


app.listen(port, () => {
    console.log(`App listening to ${port}`);
});
