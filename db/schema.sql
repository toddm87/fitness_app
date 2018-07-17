DROP DATABASE IF EXISTS fitness_app;
CREATE DATABASE fitness_app;

\c fitness_app

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  body TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  reps INTEGER,
  first_name TEXT,
  last_name TEXT,
  type_of_pushup TEXT,
  workout_id INTEGER REFERENCES workouts(id)
);

--build CRUD models joining both tables
--refer to the blog app from class
--cd into folder with schema and seed files
--run psql -f schema.sql;
--run psql -f seed.sql;
