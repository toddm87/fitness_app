CREATE DATABASE fitness_app;

\c fitness_app

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workouts;

-- CREATE TABLE diets (
--   id SERIAL PRIMARY KEY,
--   title TEXT,
--   class TEXT,
--   workout_id INTEGER REFERENCES workout(id)
-- );

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  body TEXT,
  img_url TEXT,
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    img_url TEXT,
    workout_id TEXT,
);