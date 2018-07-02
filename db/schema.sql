CREATE DATABASE fitness_app;

\c fitness_app

DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS workout;

CREATE TABLE workout (
  id SERIAL PRIMARY KEY,
  title TEXT,
  body TEXT
);

CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  reps INTEGER,
  first_name TEXT,
  last_name TEXT,
  type_of_pushup TEXT
);