-- CREATE TABLE "artists" (
--     "id" SERIAL PRIMARY KEY,
--     "artist_name" varchar(80) not null,
--     "year_born" date
-- );

CREATE TABLE artist (
    "id" serial PRIMARY KEY,
    "name" varchar(80),
    "birthdate" date
);    

CREATE TABLE song (
    "id" serial PRIMARY KEY,
    "title" varchar(255),
    "length" varchar(10),
    "released" date
); 