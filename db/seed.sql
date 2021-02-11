create table rf_users (
    user_id serial primary key,
    username varchar(120) not null,
    email varchar(150) not null,
    hash text not null,
    profile_picture text
);

create table saved_restaurants (
    saved_id serial primary key,
    user_id int references rf_users(user_id),
    restaurant_id text
)