const express = require('express');
const app = express();
const port = 3001;
const db = require('./models')


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
    res.send('this is a HTML api endpoint!')
})
app.get('/api/quizc', (req,res) => {
    res.send('this is a Command Line api endpoint!')
})
app.get('/api/quizg', (req,res) => {
    res.send('this is a Git api endpoint!')
})
app.get('/api/quizcss', (req,res) => {
    res.send('this is a CSS api endpoint!')
})

app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port,() => {
    console.log(`App listening to ${port}`);
})