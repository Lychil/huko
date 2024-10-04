CREATE TABLE users (
    id SERIAL PRIMARY KEY;
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

create TABLE event(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    location VARCHAR(255),
    description VARCHAR(255)
);