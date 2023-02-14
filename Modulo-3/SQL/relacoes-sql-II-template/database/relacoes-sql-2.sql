-- Active: 1673958897823@@127.0.0.1@3306

-- Práticas

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES 
    ('u001', 'Geovanna', 'geovanna@email.com', 'geovanna2004'),
    ('u002', 'Guilherme', 'guilherme@email.com', 'guilherme2003'),
    ('u003', 'Sampaio', 'sampaio@email.com', 'sampaio2002');

SELECT * FROM users;


-- Prática 2

CREATE TABLE follows (
    follower_id TEXT NOT NULL,
    followed_id TEXT NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);

INSERT INTO follows (follower_id, followed_id)
VALUES
    ('u001', 'u002'),
    ('u001', 'u003'),
    ('u002', 'u001');

    SELECT * FROM follows;

    SELECT * FROM follows -- Mostra todos que seguem
    LEFT JOIN users
    ON follows.follower_id = users.id;

    SELECT * FROM follows -- Mostra todos usuarios mesmo que não sigam
    RIGHT JOIN users
    ON follows.follower_id = users.id;

    SELECT 
        follows.follower_id as followerId,
        users.name as followerName,
        users.email as followerEmail,
        follows.followed_id as followedId,
        followedUsers.name as followedName
    FROM follows -- Mostra os dados de quem o usuario segue
    RIGHT JOIN users
    ON follows.follower_id = users.id
    LEFT JOIN users as followedUsers
    ON follows.followed_id = followedUsers.id;