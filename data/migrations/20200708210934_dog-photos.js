exports.up = function (knex) {
  return knex.schema.createTable("dog-photos", (tbl) => {
    tbl.increments();
    tbl.text("dogId").notNullable();
    tbl.text("image").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dog-photos");
};
