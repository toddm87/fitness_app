const db = require('../db/connection')
const workout = {}

workout.all = () => {
  return db.any(
    "SELECT * FROM workout"
  )
}

workout.findById = id => {
    return db.one(
      "SELECT * FROM workout WHERE id = $<id>", {id: id}
    )
  }
  
module.exports = workout;