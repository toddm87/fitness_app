const db = require('../db/connection')
const workouts = {}

workouts.all = () => {
  return db.any(
    "SELECT * FROM workouts"
  )
}

workouts.findById = id => {
    return db.one(
      "SELECT * FROM workouts WHERE id = $<id>", 
      {id: id}
    )
  }
  
module.exports = workouts;