const express = require('express');
const app = express();
const port = 3001;
const db = require('./models')
const qData = require('./permdata')


app.get('/api/quizj', (req,res) => {
    console.log('this is a Javascript api endpoint!');
    db.questions.findAll({where:{questionType:'js'}})
        .then((results) =>{
            results.forEach(function(index){
                console.log(index.correctAnswer,index.incorrectAnswer, index.question);
            })
        })
    
})

app.get('/api/quizh', (req,res) => {
    db.questions.findAll({where:{questionType:'html'}})
        .then((results) =>{
            results.forEach(function(index){
                console.log(index.correctAnswer,index.incorrectAnswer, index.question);
            })
        })
})

app.get('/api/quizc', (req,res) => {
    db.questions.findAll({where:{questionType:'cli'}})
        .then((results) =>{
            results.forEach(function(index){
                console.log(index.correctAnswer,index.incorrectAnswer, index.question);
            })
        })
})

app.get('/api/quizg', (req,res) => {
    db.questions.findAll({where:{questionType:'git'}})
        .then((results) =>{
            results.forEach(function(index){
                console.log(index.correctAnswer,index.incorrectAnswer, index.question);
            })
        })
})

app.get('/api/quizcss', (req,res) => {
    db.questions.findAll({where:{questionType:'css'}})
        .then((results) =>{
            results.forEach(function(index){
                console.log(index.correctAnswer,index.incorrectAnswer, index.question);
            })
        })
    })
app.get('/api/test', (req,res) => {
  qData.map(row =>{
      console.log(row.question);
  })
    })




app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port,() => {
    console.log(`App listening to ${port}`);
});
