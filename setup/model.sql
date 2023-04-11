CREATE DATABASE admin_b;
\c admin_b;

create extension pgcrypto;

CREATE TABLE IF NOT EXISTS admins(
    admin_id serial primary key,
    username varchar(100) not null,
    login varchar(64) not null,
    password text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS images(
    img_id serial primary key,
    image text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS message(
    msg_id serial primary key,
    phone varchar(30),
    message text,
    date timestamp default current_timestamp
);