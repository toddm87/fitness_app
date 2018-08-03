const db = require('../db/connection')
const users = {}

users.all = () => {
  return db.any(
    "SELECT * FROM users"
  )
}

users.create = users => {
  return db.one(
    "INSERT INTO users (reps, first_name, last_name, type_of_pushup, workout_id) VALUES ($<reps>, $<first_name>, $<last_name>, $<type_of_pushup>, $<workout_id>) RETURNING * ",
    users
  )
}

users.join = users => {
  return db.all(
    "SELECT * FROM users JOIN workouts ON workouts.id = users.workout_id"
  )
}

users.update = users => {
  return db.one (
    "UPDATE users SET reps = $<reps>, first_name =  $<first_name>, last_name = $<last_name>, type_of_pushup = $<type_of_pushup>, workout_id = $<workout_id> RETURNING *", users
  )
}

users.findById = id => {
  return db.one (
    "SELECT FROM users WHERE id = $<id>", 
    {id: id}
  )
}

users.delete = id => {
  return db.result(
    "DELETE FROM users WHERE id = $<id>", 
    {id: id}
  )
}

  module.exports = users;