CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    birthday DATE,
    encrypted_password TEXT
);

CREATE TABLE budgets (
    ID SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    title TEXT,
    description TEXT,
    budget_amount NUMERIC,
    banner_style INT REFERENCES banners(id)
);

CREATE TABLE items (
    ID SERIAL PRIMARY KEY,
    budget_id INT REFERENCES budgets(id),
    price NUMERIC,
    rating INT,
    constraint rating_range_check
        check(rating >= 0 and rating <= 5),
    title TEXT,
    description TEXT,
    count INT,
    purchase_date DATE
);

CREATE TABLE banners (
    ID SERIAL PRIMARY KEY,
    name TEXT
);

INSERT INTO banners (name) VALUES ('money');
INSERT INTO banners (name) VALUES ('groceries');
INSERT INTO banners (name) VALUES ('clothes');
INSERT INTO banners (name) VALUES ('bills');
INSERT INTO banners (name) VALUES ('vehicles');
INSERT INTO banners (name) VALUES ('technology');
