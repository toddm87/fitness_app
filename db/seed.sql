\c fitness_app

DELETE FROM user;
DELETE FROM workout;

INSERT INTO user (id, workout_id) VALUES (1);
INSERT INTO user (id, workout_id) VALUES (2);
INSERT INTO user (id, workout_id) VALUES (3);


INSERT INTO workout (id, title, body) 
VALUES (
    1, 
    closePushUps, 
    'This variation of push ups works directly on your triceps and the presternal region (inner chest)'
); 
INSERT INTO workout (id, title, body) 
VALUES (
    2, 
    neutralPushUps, 
    'This variation of push ups works more on your pectoral and deltoid region'
);
INSERT INTO workout (id, title, body) 
VALUES (
    3, 
    widePushUps, 
    'Lastly, this variation of push ups builds on top of the pectoral region but also adds to the greater supraclavicular fossa (outer part of the chest)'
);