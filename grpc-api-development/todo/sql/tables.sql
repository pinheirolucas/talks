drop table if exists todo;
create table todo (
  id uuid not null default uuid_generate_v4(),
  description text not null,
  status smallint not null,

  primary key (id)
);
