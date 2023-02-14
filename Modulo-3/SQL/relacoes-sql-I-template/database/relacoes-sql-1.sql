-- Active: 1673958897823@@127.0.0.1@3306


-- Práticas

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE phones (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    phone_number TEXT UNIQUE NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
); 

INSERT INTO users (id, name, email, password)
VALUES 
    ('u001', 'Geovanna', 'geovanna@email.com', 'geovanna2004'),
    ('u002', 'Guilherme', 'guilherme@email.com', 'guilherme2003');

INSERT INTO phones (id, phone_number, user_id)
VALUES
    ('p001', '5511977377177', 'u001'),
    ('p002', '5577977455671', 'u001'),
    ('p003', '5571964251452', 'u002');
INSERT INTO phones (id, phone_number, user_id)
VALUES
    ('p004', '5565964121452', 'u003');

DELETE FROM phones
WHERE user_id = 'u003';

SELECT * FROM users;
SELECT * FROM phones;

SELECT * FROM users
INNER JOIN phones
ON phones.user_id = users.id;

CREATE TABLE licenses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    register_number TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL
);

CREATE TABLE drivers (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    license_id TEXT UNIQUE NOT NULL,
    FOREIGN KEY (license_id) REFERENCES licenses (id)
);

INSERT INTO licenses (id, register_number, category)
VALUES
    ('l001', '12121212', 'A'),
    ('l002', '23232323', 'AB');

INSERT INTO drivers (id, name, email, password, license_id)
VALUES
    ('d001', 'Geovanna', 'geovanna@email.com', 'geovanna2004', 'l001'),
    ('d002', 'Guilherme', 'guilherme@email.com', 'guilherme2003', 'l002');

SELECT * FROM drivers
INNER JOIN licenses
ON drivers.license_id = licenses.id;

SELECT * FROM licenses;
SELECT * FROM drivers;

DELETE FROM drivers
WHERE license_id = 'l003'