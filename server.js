const express = require('express')
const app = express()
const PORT = process.env.PORT || 4567
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const users = require('./models/users')
const Post = require('./models/posts')
require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/public', express.static('public'))

app.set('view engine', 'ejs')

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`)
});

// require('express').config()
app.get('/', (req, res) => {
  users.all()
    .then(usersData => {
     res.render('posts/homepage', {users: usersData})
  })
});

app.get('/posts', (req, res) => {
  Post.all()
  .then(posts => {
    res.render('posts/index', {posts: posts})
  })
})


app.get('/post', (req, res) => {
  users.findById()
  res.render('categories/post')
})

//post model file
app.post('/posts', (req, res) => {
  const posts = req.body
  Post.create(posts)
  .then(post => {
    res.redirect(302, '/index')
  })
})

app.get('/index', (req, res) => {
  Post.all().then(
    posts => {
      res.render('posts/index', {posts: posts})
    }
  )
})

app.get('/close', (req, res) => {
  res.render('posts/close')
})

app.get('/neutral', (req, res) => {
  res.render('posts/neutral')
})

app.get('/wide', (req, res) => {
  res.render('posts/wide')
})

app.get('/edit', (req, res) => {
  res.render('categories/edit')
})

app.delete('/post/:id', (req, res) => {
  const id = Number(req.params.id)
  Post.delete(id)
  .then(posts => {
    res.redirect(302, '/edit');
    })
})