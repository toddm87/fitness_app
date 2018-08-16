\c fitness_app

-- Correct posts to users table
-- Don't insert id (id SERIAL PRIMARY KEY)

INSERT INTO workouts (title, user_id) 
    VALUES ('closePushUps', 1); 
INSERT INTO workouts (title, user_id) 
    VALUES ( 'neutralPushUps', 2);
INSERT INTO workouts (title, user_id) 
    VALUES ('widePushUps', 3);

INSERT INTO users (reps, first_name, last_name, type_of_pushup) 
    VALUES (10, 'Aubrey', 'Johnson','closePushUps');
INSERT INTO users (reps, first_name, last_name, type_of_pushup) 
    VALUES (20, 'Glory', 'Johnson', 'neutralPushUps');
INSERT INTO users (reps, first_name, last_name, type_of_pushup) 
    VALUES (30, 'Kimmie', 'Yearwood', 'widePushUps');