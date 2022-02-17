/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("calouros", (table) => {
    table.increments("id").primary();
    table.string("name", 150).notNullable();
    table.string("email", 60).notNullable().unique();
    table.string("password").notNullable();
    table.string("periodo", 3).notNullable();
    table.string("turma", 3).notNullable();
    table.string("imgUrl", 1000);
    table.binary("imgBi").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("calouros");
};
