CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    email TEXT,
    birthday DATE,
    encrypted_password TEXT
);

CREATE TABLE banners (
    ID SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE budgets (
    ID SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title TEXT,
    description TEXT,
    budget_amount NUMERIC,
    banner_style INT REFERENCES banners(id)
);

CREATE TABLE items (
    ID SERIAL PRIMARY KEY,
    budget_id INT REFERENCES budgets(id) ON DELETE CASCADE,
    price NUMERIC,
    rating INT,
    constraint rating_range_check
        check(rating >= 0 and rating <= 5),
    title TEXT,
    description TEXT,
    count INT,
    purchase_date DATE
);

INSERT INTO banners (name) VALUES ('money');
INSERT INTO banners (name) VALUES ('groceries');
INSERT INTO banners (name) VALUES ('clothes');
INSERT INTO banners (name) VALUES ('bills');
INSERT INTO banners (name) VALUES ('vehicles');
INSERT INTO banners (name) VALUES ('technology');
