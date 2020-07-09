exports.up = function (knex) {
  return knex.schema.createTable("contact", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
    tbl.text("email").notNullable();
    tbl.text("phone").notNullable();
    tbl.text("userId").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("contact");
};
