const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const users = require('./models/users')
const workouts = require('./models/workouts')
const methodOverride = require('method-override')
const Post = require('./models/posts')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use('/public', express.static('public'))

app.set('view engine', 'ejs')

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
});

// require('express').config()
app.get('/', (req, res) => {
  users.all()
    .then(userData => {
     res.render('posts/homepage', {users: userData})
  })
});

app.post('/', (req,res) => {
  workouts.all()
    .then(workoutsData => {
      res.render('posts/homepage', {workouts: workoutsData})
    })
})

  app.get('/workouts', (req, res) => {
    workouts.all()
      .then(workoutsData => {
        res.render('posts/homepage', {workouts: workoutsData})
    })
});

// app.get('/users/:id/edit', (req, res)=> {
//   const id = Number(req.params.id)
//   Promise.all([
//     users.findById(id)
//       .then(userData => {
//         post.timestamp = moment(userData.time).calendar()
//         return userData
//       }),
//     workouts.all()
//       .then(workoutsData => {
//       return workoutsData
//     })
//   ])
//       .then(([userData, workoutsData]) => {
//       res.render('userData/edit', {user: userData, workouts: workoutsData})
//     })
// })

app.get('/close', (req, res) => {
  res.render('posts/close')
})

app.get('/neutral', (req, res) => {
  res.render('posts/neutral')
})

app.get('/wide', (req, res) => {
  res.render('posts/wide')
})

app.post('/post', (req, res) => {
  res.render('categories/post')
})

app.put('/userData/:id', (req,res) => {
  const updateNum = req.body
  updateNum.id = req.params.id
  users.update(updateNum)
      .then(userData => {
      res.redirect(302, `/users/${userData.id}`)
    })
})

// app.post('/posts/:id', (req, res) => {
//   const id = req.params.id
//   Post.findById(id)
//         .then(post => {
//           if(post <= 10){
//             console.log('weak sauce!')
//           }
//         })
// })

app.delete('/posts/:id', (req, res) => {
  const id = Number(req.params.id)
  user.delete(id).then(userData => {
    res.redirect(302, '/');
  })
})
