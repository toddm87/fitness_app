--\c fitness_app

DELETE FROM workouts;
DELETE FROM users;

INSERT INTO workouts (id, title, body, img_url) 
VALUES (1, calisthenics, 'This is a great way to workout for FREE! No gym membership, no contract, no waiting for the guy at the squat rack who is doing curls. You work at your own pace on your on time.', 
'https://cdn.dribbble.com/users/269111/screenshots/2371101/pushup_dribbble.gif'),
VALUES (2, cardio, 'Not feeling up to oing calisthenics? (No problem!), Cardio is another great way in keeping you healthy. You can just go for a stroll in the park or a bike ride at in point of the day. Just stay active! Here you will learn the basic cardio workouts that will jump start your activity level.',
 'https://i.gifer.com/Br9D.gif')
VALUES (3, weightlifting, 'Oh so you want to hang with the big timers, huh?! 👀 .. Look no further! Lifting weights is a good way to build and sculpt your body to the way you want. If your goal is to big muscle and strength then weights have now offically just became your new bff',
 'http://78.media.tumblr.com/4350be4b260a88a0363620a91c101194/tumblr_nmhh1od1151urg2hno1_500')
