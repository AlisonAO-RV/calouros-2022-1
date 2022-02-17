/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("presenca", (table) => {
    table.date("data").primary();
    table.integer("calouroId").unsigned();
    table.foreign("calouroId").references("id").inTable("calouros");
    table.boolean("status").notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("presenca");
};
