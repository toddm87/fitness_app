const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const Diet = require('./models/diet')
const Workout = require('./models/workout')
const pgp = require('pg-promise')(initOptions);
// const moment = require('moment')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
});

require('express').config()

app.get('/', (req, res) => {
    Post.all()
      .then(posts => {
        res.render('home', {posts: posts})
    })
});

  app.get('/posts/new', (request, response) => {
    Author.all()
      .then(workout => {
        response.render('posts/new', {workout: workoutData})
    })
});





















app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });