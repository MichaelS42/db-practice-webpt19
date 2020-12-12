exports.up = function (knex) {
  return knex.schema.createTable("characters", (tbl) => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.string("gender", 64).notNullable();
    tbl.string("imageurl", 256).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("characters");
};
