exports.up = function (knex) {
  return knex.schema.createTable("dogs", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("breed").notNullable();
    tbl.text("weight").notNullable();
    tbl.text("details").notNullable();
    tbl.text("userId").notNullable();
    tbl.text("birthday").notNullable();
    tbl.text("avatar").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dogs");
};
