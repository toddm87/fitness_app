require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4567
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const User = require('./models/users')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/public', express.static('public'))

app.set('view engine', 'ejs')

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`)
});

// require('express').config()
app.get('/', (req, res) => {
  User.all()
    .then(usersData => {
     res.render('users/homepage', {users: usersData})
  })
});

app.get('/users', (req, res) => {
  User.all()
  .then(users => {
    res.render('users/index', {users: users})
  })
})

app.get('/post', (req, res) => {
  User.findById()
  res.render('categories/post')
})

//post model file
app.post('/users', (req, res) => {
  const users = req.body
  User.create(users)
  .then(post => {
    res.redirect(302, '/index')
  })
})

app.get('/index', (req, res) => {
  User.all().then(
    users => {
      res.render('users/index', {users: users})
    }
  )
})

app.get('/close', (req, res) => {
  res.render('users/close')
})

app.get('/neutral', (req, res) => {
  res.render('users/neutral')
})

app.get('/wide', (req, res) => {
  res.render('users/wide')
})

// app.get('/edit', (req, res) => {
//   res.render('categories/edit')
// })

// app.delete('/post/:id', (req, res) => {
//   const id = Number(req.params.id)
//   User.delete(id)
//   .then(post => {
//     res.redirect(302, '/edit');
//     })
// })