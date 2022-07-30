CREATE DATABASE;
CREATE TABLE users(
    user_id BIGSERIAL PRIMARY KEY,
    user_name VARCHAR(255)NOT NULL,
    user_email VARCHAR(255)NOT NULL,
    user_password VARCHAR(255)NOT NULL
);

// insert users//

INSERT INTO users (user_name,user_email,user_password) VALUES('kamil','kamil@gmail.com','Mirza2022');