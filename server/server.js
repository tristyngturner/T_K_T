const express = require('express');
const app = express();
const port = 3001;
const db = require('./models')
const{qData} = require('./permdata');



app.use(express.json());


app.get('/api/quizj', (req,res) => {
    console.log('this is a Javascript api endpoint!');
    db.Questions.findAll({where:{quizType:'js'}})
        .then((results) =>{
            results.forEach(function(index){
                res.json({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
        })
    
})

app.get('/api/quizh', (req,res) => {
    db.questions.findAll({where:{quizType:'html'}})
        .then((results) =>{
            results.forEach(function(index){
                res.json({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
        })
})

app.get('/api/quizc', (req,res) => {
    db.questions.findAll({where:{quizType:'cli'}})
        .then((results) =>{
            results.forEach(function(index){
                res.json({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
        })
})

app.get('/api/quizg', (req,res) => {
    db.questions.findAll({where:{quizType:'git'}})
        .then((results) =>{
            results.forEach(function(index){
                res.json({question:index.question,answer1:index.answer1,answer2:index.answer2})
            })
        })
})

app.get('/api/quizcss', (req,res) => {
    db.questions.findAll({where:{quizType:'css'}})
        .then((results) =>{
            results.forEach(function(index){
                res.json({question:index.question,answer1:index.answer1,answer2:index.answer2})
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
