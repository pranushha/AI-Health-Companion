CREATE DATABASE health;
USE health;


CREATE TABLE goals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    sleep_hours INT,
    exercise_minutes INT,
    calories_consumed INT,
    stress_level varchar(10)
);

CREATE TABLE habits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    sleep_hours INT,
    exercise_minutes INT,
    calories_consumed INT,
    stress_level varchar(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;
select * from goals;		
select * from habits;

alter table habits modify column stress_level varchar(10);
alter table goals modify column stress_level varchar(10);

CREATE TABLE journal_entries (
    journal_id INT AUTO_INCREMENT PRIMARY KEY,
    entry_text TEXT NOT NULL,
    entry_date DATE DEFAULT (CURRENT_TIMESTAMP),  -- This uses CURRENT_TIMESTAMP and extracts the date
    mood INT,  -- Optional: track mood or feelings
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE quotes (
    quote_id INT AUTO_INCREMENT PRIMARY KEY,
    quote_text TEXT NOT NULL,
    author VARCHAR(255),  -- Optional: Store the author of the quote
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from quotes;		
select * from journal_entries;

CREATE TABLE goals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    sleep_hours INT,
    exercise_minutes INT,
    healthy_food BOOLEAN,   -- Use BOOLEAN for checkbox (true/false)
    mood VARCHAR(10),
    water INT,
    stress_level VARCHAR(10)
);

CREATE TABLE habits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    sleep_hours INT,
    exercise_minutes INT,
    healthy_food BOOLEAN,   -- Use BOOLEAN for checkbox (true/false)
    mood VARCHAR(10),
    water INT,
    stress_level VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO habits (user_id, sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level)
VALUES (1, 7, 30, true, 'Good', 8, 'Low');

CREATE TABLE user_info (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    age INT NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    height FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM goals WHERE id = 1;

CREATE TABLE suggestions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  suggestion_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
