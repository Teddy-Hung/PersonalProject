create table rf_users (
    user_id serial primary key,
    username varchar(120) not null,
    email varchar(150) not null,
    hash text not null,
    profile_picture text
);

create table restaurant (
    restaurant_id serial primary key,
    restaurant_name varchar(120),
    location text,
    img text,
    miles_away int,
    category_id int
);

create table category (
    category_id serial primary key,
    category_name varchar(120)
);

create table saved_lists (
    user_id int references rf_users(user_id),
    restaurant_id int references restaurant(restaurant_id)
);