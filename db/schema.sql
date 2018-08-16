CREATE DATABASE fitness_app;
-- DROP DATABASE IF EXISTS fitness_app;

\c fitness_app

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  reps INTEGER,
  first_name TEXT,
  last_name TEXT,
  type_of_pushup TEXT
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  user_id INTEGER REFERENCES users
);
--build CRUD models joining both tables
--refer to the blog app from class
--cd into folder with schema and seed files
--run psql -f schema.sql;
--run psql -f seed.sql;

-- join tables..
-- SELECT * 
-- FROM workout 
-- JOIN users 
-- ON workouts.user_id = users.id;