const db = require('../db/connection')
const post = {}

post.all = () => {
  return db.any(
    "SELECT * FROM post"
  )
}

post.create = post => {
  return db.one(
    "INSERT INTO post (first_name, last_name, type_of_pushup, reps) VALUES ($<first_name>, $<last_name>, $<type_of_pushup>, $<reps>) RETURNING * ",
    post
  )
}


post.delete = id => {
  return db.result(
    "DELETE FROM post WHERE id = $<id>", {id: id}
  )
}

  module.exports = post;