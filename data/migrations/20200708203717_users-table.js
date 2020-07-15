exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.string("id").primary();
    tbl.text("username").notNullable();
    tbl.text("phone").notNullable();
    tbl.text("email").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
