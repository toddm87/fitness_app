\c fitness_app

-- Correct posts to userss table
-- Don't insert id (id SERIAL PRIMARY KEY)

INSERT INTO workouts (title, body) 
VALUES (
    'closePushUps', 
    'This variation of push ups works directly on your triceps and the presternal region (inner chest)'
); 
INSERT INTO workouts (title, body) 
VALUES ( 
    'neutralPushUps', 
    'This variation of push ups works more on your pectoral and deltoid region'
);
INSERT INTO workouts (title, body) 
VALUES (
    'widePushUps', 
    'Lastly, this variation of push ups builds on top of the pectoral region but also adds to the greater supraclavicular fossa (outer part of the chest)'
);

INSERT INTO users (reps, first_name, last_name, type_of_pushup, workout_id) VALUES (10, 'Aubrey', 'Johnson','closePushUps', 1);
INSERT INTO users (reps, first_name, last_name, type_of_pushup, workout_id) VALUES (20, 'Glory', 'Johnson', 'neutralPushUps', 2);
INSERT INTO users (reps, first_name, last_name, type_of_pushup, workout_id) VALUES (30, 'Kimmie', 'Yearwood', 'widePushUps', 3);