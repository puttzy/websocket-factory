create schema if not exists passport;

use passport;

create table factory (
    factory_id int not null AUTO_INCREMENT primary key,
    name varchar(255) not null,
    minRange int not null,
    maxRange int not null,
    constraint factory_pk_id unique (factory_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table factory_nodes (
     node_id int not null AUTO_INCREMENT primary key,
     factory_id int not null,
     value int not null,
     constraint factory_nodes_pk_id unique (node_id),
     FOREIGN KEY (factory_id)
        REFERENCES factory (factory_id)
        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into factory (name, minRange, maxRange) values ('Welcome to the Container', 1, 1000);
insert into factory_nodes (factory_id, value) values (1, 1);
insert into factory_nodes (factory_id, value) values (1, 14);
insert into factory_nodes (factory_id, value) values (1, 345);
insert into factory_nodes (factory_id, value) values (1, 235);

delete from factory where factory_id not in (select distinct  factory_id from factory_nodes);









