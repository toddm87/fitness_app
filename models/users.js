const db = require('../db/connection')
const user = {}

user.all = () => {
  return db.any(
    "SELECT * FROM user"
  )
}

user.create = user => {
  return db.one(
    "INSERT INTO user (first_name, last_name, type_of_pushup, reps) VALUES ($<first_name>, $<last_name>, $<type_of_pushup>, $<reps>) RETURNING * ",
    user
  )
}


user.delete = id => {
  return db.result(
    "DELETE FROM user WHERE id = $<id>", {id: id}
  )
}

  module.exports = user;