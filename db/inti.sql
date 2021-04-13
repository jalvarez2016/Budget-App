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
    budget_amount MONEY,
    banner_style INT REFERENCES banners(id)
);

CREATE TABLE items (
    ID SERIAL PRIMARY KEY,
    budget_id INT REFERENCES banners(id),
    price MONEY,
    rating INT,
    constraint rating_range_check
        check(rating >= 0 and rating <= 5),
    title TEXT,
    description TEXT,
    count TINYINT,
    purchase_date DATE
);

CREATE TABLE banners (
    ID SERIAL PRIMARY KEY,
    name TEXT
);
